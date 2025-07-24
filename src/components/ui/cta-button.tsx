import { Button } from "@/components/ui/button";
import { SIGNUP_URL } from "@/lib/constants";

interface CTAButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  size?: "default" | "sm" | "lg" | "icon";
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
}

export function CTAButton({ 
  children, 
  className = "", 
  href = SIGNUP_URL,
  size = "lg",
  variant = "default",
}: CTAButtonProps) {
  return (
    <Button 
      size={size} 
      variant={variant}
      className={`inline-flex items-center justify-center ${className}`} 
      asChild
    >
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    </Button>
  );
} 