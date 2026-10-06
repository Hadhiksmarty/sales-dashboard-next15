'use client';

import { useEffect, useMemo, useState } from 'react';
import ChartTypeSwitcher from '@/components/molecules/ChartTypeSwitcher';
import SalesFilters from '@/components/molecules/SalesFilters';
import StatCard from '@/components/atoms/StatCard';
import SalesChart from '@/components/organisms/SalesChart';
import type { ChartType, SalesByYear } from '@/types/sales';

export default function SalesDashboard() {
  const [allSales, setAllSales] = useState<SalesByYear>({});
  const [year, setYear] = useState('2024');
  const [threshold, setThreshold] = useState(0);
  const [chartType, setChartType] = useState<ChartType>('bar');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadSales = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/sales');
        if (!response.ok) throw new Error('Failed to load sales data');
        const result = await response.json();
        setAllSales(result.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unable to load data');
      } finally {
        setLoading(false);
      }
    };

    loadSales();
  }, []);

  const yearData = allSales[year] ?? [];
  const filteredData = useMemo(
    () => yearData.filter((item) => item.sales >= threshold),
    [yearData, threshold]
  );

  const total = yearData.reduce((sum, item) => sum + item.sales, 0);
  const average = yearData.length ? total / yearData.length : 0;
  const best = yearData.reduce((max, item) => (item.sales > max.sales ? item : max), { month: '-', sales: 0 });

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl space-y-6">
        <header>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Frontend Assessment</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Sales Analytics Dashboard</h1>
          <p className="mt-2 max-w-2xl text-slate-600">
            Compare monthly mock sales for 2022, 2023 and 2024, filter by a custom threshold, and switch chart types.
          </p>
        </header>

        <section className="grid gap-4 md:grid-cols-3">
          <StatCard label={`Total sales (${year})`} value={`$${total.toLocaleString()}`} />
          <StatCard label="Average per month" value={`$${Math.round(average).toLocaleString()}`} />
          <StatCard label="Best month" value={best.month} helper={best.sales ? `$${best.sales.toLocaleString()}` : '-'} />
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <SalesFilters
              year={year}
              threshold={threshold}
              onYearChange={setYear}
              onThresholdChange={setThreshold}
            />
            <div>
              <p className="mb-2 text-sm font-semibold text-slate-700">Chart type</p>
              <ChartTypeSwitcher value={chartType} onChange={setChartType} />
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
          {loading ? (
            <div className="flex h-[420px] items-center justify-center text-slate-500">Loading sales data...</div>
          ) : error ? (
            <div className="flex h-[420px] items-center justify-center text-red-600">{error}</div>
          ) : (
            <SalesChart data={filteredData} chartType={chartType} />
          )}
        </section>

        <footer className="pb-4 text-xs text-slate-500">
          Demo values are mock data. Dataset inspiration: Kaggle — FMCG Daily Sales Data (2022–2024).
        </footer>
      </div>
    </main>
  );
}
