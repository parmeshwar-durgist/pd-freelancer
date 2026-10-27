import React from 'react';
import { cn } from '../../lib/utils';
import { Badge } from './Badge';

interface SectionHeadingProps {
  pill?: string;
  pillVariant?: 'brand' | 'glow' | 'success';
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
  titleClassName?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  pill,
  pillVariant = 'brand',
  title,
  subtitle,
  align = 'center',
  className,
  titleClassName,
}) => {
  return (
    <div
      className={cn(
        'max-w-3xl mb-12 sm:mb-16',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className
      )}
    >
      {pill && (
        <div className={cn('mb-3', align === 'center' ? 'flex justify-center' : '')}>
          <Badge variant={pillVariant} size="md">
            {pill}
          </Badge>
        </div>
      )}
      <h2
        className={cn(
          'text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white',
          titleClassName
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
