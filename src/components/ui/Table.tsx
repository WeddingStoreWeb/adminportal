import React from 'react';
import { cn } from '@/lib/utils';

interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {}

export function Table({ className, ...props }: TableProps) {
  return (
    <div className="w-full overflow-auto">
      <table
        className={cn(
          'w-full text-sm text-left text-gray-500 border-collapse',
          className
        )}
        {...props}
      />
    </div>
  );
}

export function TableHeader({ className, ...props }: React.ThHTMLAttributes<HTMLTableSectionElement>) {
  return <thead className={cn('bg-gray-50 text-gray-700', className)} {...props} />;
}

export function TableBody({ className, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) {
  return <tbody className={cn('bg-white divide-y divide-gray-200', className)} {...props} />;
}

export function TableRow({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) {
  return <tr className={cn('hover:bg-gray-50', className)} {...props} />;
}

export function TableCell({ className, ...props }: React.TdHTMLAttributes<HTMLTableCellElement>) {
  return <td className={cn('px-6 py-4 whitespace-nowrap', className)} {...props} />;
}

export function TableHead({ className, ...props }: React.ThHTMLAttributes<HTMLTableCellElement>) {
  return <th className={cn('px-6 py-3 text-left', className)} {...props} />;
}