import type { SelectHTMLAttributes } from 'react';

export default function Select(props: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium outline-none ring-slate-300 focus:ring-2"
      {...props}
    />
  );
}
