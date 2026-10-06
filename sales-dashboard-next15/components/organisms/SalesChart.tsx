'use client';

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import type { ChartType, SalesRecord } from '@/types/sales';

type Props = {
  data: SalesRecord[];
  chartType: ChartType;
};

const pieColors = ['#0f172a', '#334155', '#475569', '#64748b', '#94a3b8', '#cbd5e1'];

const money = (value: number) => `$${value.toLocaleString()}`;

export default function SalesChart({ data, chartType }: Props) {
  if (!data.length) {
    return (
      <div className="flex h-[360px] items-center justify-center rounded-xl border border-dashed border-slate-300 text-sm text-slate-500">
        No months match the selected threshold.
      </div>
    );
  }

  if (chartType === 'pie') {
    return (
      <div className="h-[420px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={data} dataKey="sales" nameKey="month" outerRadius={135} label>
              {data.map((entry, index) => (
                <Cell key={entry.month} fill={pieColors[index % pieColors.length]} />
              ))}
            </Pie>
            <Tooltip formatter={(value) => money(Number(value))} />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
  }

  if (chartType === 'line') {
    return (
      <div className="h-[420px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 10, right: 20, bottom: 10, left: 10 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis tickFormatter={(value) => `$${Math.round(value / 1000)}k`} />
            <Tooltip formatter={(value) => money(Number(value))} />
            <Legend />
            <Line type="monotone" dataKey="sales" stroke="#0f172a" strokeWidth={3} activeDot={{ r: 7 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }

  return (
    <div className="h-[420px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 10, right: 20, bottom: 10, left: 10 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis tickFormatter={(value) => `$${Math.round(value / 1000)}k`} />
          <Tooltip formatter={(value) => money(Number(value))} />
          <Legend />
          <Bar dataKey="sales" fill="#0f172a" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
