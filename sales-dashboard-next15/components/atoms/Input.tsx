import type { InputHTMLAttributes } from 'react';

export default function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none ring-slate-300 transition focus:ring-2"
      {...props}
    />
  );
}
