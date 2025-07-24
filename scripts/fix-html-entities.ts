#!/usr/bin/env bun

import * as fs from 'fs';
import * as path from 'path';
import { glob } from 'glob';

// Map of unsafe entities to their HTML entity equivalents
const ENTITY_MAP = {
  "'": '&apos;',
  '"': '&quot;',
  '<': '&lt;',
  '>': '&gt;',
  '&': '&amp;'
} as const;

/**
 * Fix HTML entities in JSX text content
 * This function carefully replaces entities only in JSX text content, avoiding:
 * - Attribute values
 * - JavaScript expressions
 * - Comments
 * - Already escaped entities
 */
function fixHtmlEntities(content: string): string {
  let result = content;
  
  // Split content into lines for processing
  const lines = result.split('\n');
  const processedLines = lines.map((line, lineIndex) => {
    // Skip processing certain types of lines
    const trimmedLine = line.trim();
    if (
      trimmedLine.startsWith('import ') ||
      trimmedLine.startsWith('export ') ||
      trimmedLine.startsWith('const ') ||
      trimmedLine.startsWith('let ') ||
      trimmedLine.startsWith('var ') ||
      trimmedLine.startsWith('//') ||
      trimmedLine.startsWith('/*') ||
      trimmedLine.startsWith('*') ||
      trimmedLine.startsWith('function ') ||
      trimmedLine.startsWith('interface ') ||
      trimmedLine.startsWith('type ') ||
      trimmedLine === ''
    ) {
      return line;
    }

    let processedLine = line;

    // Pattern 1: Text between JSX tags that contains single quotes
    // Matches: >some text with 'quotes'<  
    processedLine = processedLine.replace(
      />([^<{]*)'([^<}]*)</g,
      (match, before, after) => {
        // Don't replace if this looks like it's in a JavaScript expression
        if (before.includes('{') || after.includes('}')) {
          return match;
        }
        return `>${before}&apos;${after}<`;
      }
    );

    // Pattern 2: Handle quotes in text content more carefully
    // Look for patterns like: >...text with 'quote'...<
    if (
      processedLine.includes("'") &&
      processedLine.includes('>') &&
      processedLine.includes('<') &&
      !processedLine.includes('=') && // Not an attribute
      !processedLine.includes('{') && // Not a JS expression
      !processedLine.includes('}') && // Not a JS expression
      !processedLine.includes('&apos;') && // Not already escaped
      !processedLine.includes('className') && // Not in className
      !processedLine.includes('href') && // Not in href
      !processedLine.includes('src') && // Not in src
      !processedLine.includes('import') // Not an import
    ) {
      // Replace single quotes in JSX text content
      processedLine = processedLine.replace(/'/g, '&apos;');
    }

    return processedLine;
  });

  return processedLines.join('\n');
}

/**
 * Process a single file
 */
async function processFile(filePath: string): Promise<void> {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    const fixedContent = fixHtmlEntities(content);

    if (originalContent !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`✅ Fixed HTML entities in: ${filePath}`);

      // Show what was changed
      const originalLines = originalContent.split('\n');
      const fixedLines = fixedContent.split('\n');

      originalLines.forEach((line, index) => {
        if (line !== fixedLines[index]) {
          console.log(`   Line ${index + 1}:`);
          console.log(`   - ${line.trim()}`);
          console.log(`   + ${fixedLines[index].trim()}`);
        }
      });
      console.log('');
    } else {
      console.log(`⏭️  No changes needed: ${filePath}`);
    }
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error);
  }
}

/**
 * Main function to find and process all TSX files
 */
async function main(): Promise<void> {
  console.log('🔍 Finding TSX files to process...\n');

  try {
    // Find all TSX files in src directory
    const files = await glob('src/**/*.tsx');

    if (files.length === 0) {
      console.log('No TSX files found.');
      return;
    }

    console.log(`Found ${files.length} TSX files to process:\n`);

    // Process each file
    for (const file of files) {
      await processFile(file);
    }

    console.log('\n✨ HTML entity fixing complete!');
    console.log('\n💡 Run `npm run lint` to verify all react/no-unescaped-entities issues are resolved.');
  } catch (error) {
    console.error('Error finding files:', error);
    process.exit(1);
  }
}

// Run the script if called directly
if (require.main === module) {
  main().catch(console.error);
}

export { fixHtmlEntities, processFile }; 