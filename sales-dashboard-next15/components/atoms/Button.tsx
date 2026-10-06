import type { ButtonHTMLAttributes, ReactNode } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  active?: boolean;
};

export default function Button({ children, active = false, className = '', ...props }: Props) {
  return (
    <button
      className={`rounded-lg border px-4 py-2 text-sm font-semibold transition ${
        active
          ? 'border-slate-900 bg-slate-900 text-white'
          : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
