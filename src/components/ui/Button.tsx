import React from 'react';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', isLoading = false, children, ...props }, ref) => {
    
    // Brand Rules:
    // primary = Blaze Orange (#ff6801)
    // secondary = Cyan Azure (#4991ba) / Metallic Blue (#205e8c)
    // text/bg = Ice White / Oxford Blue
    
    const baseStyles = 'inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-95 whitespace-nowrap';
    
    const variants = {
      primary: 'bg-[#ff6801] text-white hover:bg-[#e05a00] hover:shadow-lg shadow-md', // Blaze Orange
      secondary: 'bg-[#002b57] text-[#EBEBF1] hover:bg-[#205e8c] shadow-md', // Oxford Blue to Metallic Blue
      outline: 'border-2 border-[#002b57] text-[#002b57] hover:bg-[#002b57] hover:text-[#EBEBF1]', 
      ghost: 'text-[#002b57] hover:bg-[#EBEBF1]/50 hover:text-[#ff6801]'
    };

    const sizes = {
      sm: 'h-9 px-4 text-sm',
      md: 'h-11 px-8 text-base',
      lg: 'h-14 px-10 text-lg',
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
