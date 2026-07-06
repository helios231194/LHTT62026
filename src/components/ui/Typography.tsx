import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

// For Section titles
export function SectionTitle({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <h2 className={cn("text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-oxford-blue text-center mb-6", className)}>
      {children}
    </h2>
  );
}

// For subheadings or short descriptions under main titles
export function SectionSubtitle({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn("text-lg md:text-xl text-cyan-azure text-center max-w-3xl mx-auto mb-12", className)}>
      {children}
    </p>
  );
}
