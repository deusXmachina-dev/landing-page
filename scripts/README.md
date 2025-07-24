# HTML Entity Fixing Script

This script automatically fixes `react/no-unescaped-entities` ESLint violations by replacing unsafe HTML entities in JSX text content with their properly escaped equivalents.

## What it does

The script scans all `.tsx` files in the `src/` directory and replaces:

- `'` (single quotes) → `&apos;`
- `"` (double quotes) → `&quot;`  
- `<` (less than) → `&lt;`
- `>` (greater than) → `&gt;`
- `&` (ampersand) → `&amp;`

## Smart replacement

The script is designed to be safe and only replaces entities in JSX text content while avoiding:

- Attribute values (e.g., `className="my-class"`)
- JavaScript expressions (e.g., `{someVariable}`)
- Import/export statements
- Comments
- Already escaped entities

## Usage

### Run the script manually

```bash
npm run fix-entities
```

### Integration options

1. **Pre-commit hook**: Add to your Git hooks to automatically fix entities before commits
2. **CI/CD pipeline**: Run as part of your build process
3. **IDE integration**: Set up as a task in your editor
4. **Watch mode**: Run when files change during development

### Example output

```
🔍 Finding TSX files to process...

Found 17 TSX files to process:

✅ Fixed HTML entities in: src/app/terms/page.tsx
   Line 67:
   - <li>Not upload or transmit malicious code or infringe others' rights.</li>
   + <li>Not upload or transmit malicious code or infringe others&apos; rights.</li>

⏭️  No changes needed: src/components/ui/button.tsx

✨ HTML entity fixing complete!

💡 Run `npm run lint` to verify all react/no-unescaped-entities issues are resolved.
```

## Script location

- **Script**: `scripts/fix-html-entities.ts`
- **Package script**: `npm run fix-entities`

## Dependencies

The script uses:
- `tsx` - TypeScript execution
- `glob` - File pattern matching
- `@types/glob` - TypeScript types for glob

These are installed as dev dependencies and don't affect your production bundle. 