export type SalesRecord = {
  month: string;
  sales: number;
};

export type SalesByYear = Record<string, SalesRecord[]>;
export type ChartType = 'bar' | 'line' | 'pie';
