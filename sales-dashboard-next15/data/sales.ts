import type { SalesByYear } from '@/types/sales';

// Mock monthly totals for the assessment demo.
// The year range and retail/FMCG context are inspired by Kaggle's
// "FMCG Daily Sales Data (2022-2024)" dataset.
export const salesData: SalesByYear = {
  '2022': [
    { month: 'Jan', sales: 42000 }, { month: 'Feb', sales: 45500 },
    { month: 'Mar', sales: 48100 }, { month: 'Apr', sales: 46200 },
    { month: 'May', sales: 51000 }, { month: 'Jun', sales: 53400 },
    { month: 'Jul', sales: 55800 }, { month: 'Aug', sales: 54100 },
    { month: 'Sep', sales: 58700 }, { month: 'Oct', sales: 61200 },
    { month: 'Nov', sales: 64900 }, { month: 'Dec', sales: 70500 }
  ],
  '2023': [
    { month: 'Jan', sales: 50100 }, { month: 'Feb', sales: 52600 },
    { month: 'Mar', sales: 55900 }, { month: 'Apr', sales: 54800 },
    { month: 'May', sales: 59300 }, { month: 'Jun', sales: 62400 },
    { month: 'Jul', sales: 65100 }, { month: 'Aug', sales: 63800 },
    { month: 'Sep', sales: 67700 }, { month: 'Oct', sales: 71400 },
    { month: 'Nov', sales: 75200 }, { month: 'Dec', sales: 81900 }
  ],
  '2024': [
    { month: 'Jan', sales: 58400 }, { month: 'Feb', sales: 61100 },
    { month: 'Mar', sales: 64600 }, { month: 'Apr', sales: 63300 },
    { month: 'May', sales: 69200 }, { month: 'Jun', sales: 72800 },
    { month: 'Jul', sales: 76100 }, { month: 'Aug', sales: 74900 },
    { month: 'Sep', sales: 79500 }, { month: 'Oct', sales: 83200 },
    { month: 'Nov', sales: 88600 }, { month: 'Dec', sales: 96300 }
  ]
};
