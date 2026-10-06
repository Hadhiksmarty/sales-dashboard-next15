# Sales Analytics Dashboard — Next.js 15

A simple frontend assessment project built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **Recharts**. The application uses atomic design principles and displays monthly sales for **2022, 2023, and 2024**.

## Features

- Next.js 15 App Router
- TypeScript
- Tailwind CSS
- Atomic component structure: atoms, molecules, organisms
- `/dashboard` page containing the sales dashboard component
- Mock sales data for 2022, 2023 and 2024
- API route at `/api/sales`
- Custom minimum-sales threshold input
- Year selector
- Bar, line and pie chart switching
- Summary cards for total, average, and best month
- Responsive layout
- Deployment-ready for Vercel

## Dataset inspiration

The assessment asks for random sales data from Kaggle. This project uses **mock monthly totals** for the UI while taking its year range and retail/FMCG context from the Kaggle dataset **“FMCG Daily Sales Data (2022–2024)”**.

Kaggle reference:
https://www.kaggle.com/code/beatafaron/fmcg-2022-24-eda-key-business-insights

The numbers in `data/sales.ts` are intentionally mocked for demonstration and are **not presented as exact values copied from Kaggle**.

## Atomic structure

```text
components/
├── atoms/
│   ├── Button.tsx
│   ├── Input.tsx
│   ├── Select.tsx
│   └── StatCard.tsx
├── molecules/
│   ├── ChartTypeSwitcher.tsx
│   └── SalesFilters.tsx
└── organisms/
    ├── SalesChart.tsx
    └── SalesDashboard.tsx
```

## Project structure

```text
app/
├── api/
│   └── sales/
│       └── route.ts
├── dashboard/
│   └── page.tsx
├── globals.css
├── layout.tsx
└── page.tsx
components/
data/
types/
```

## Setup

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd sales-dashboard-next15
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start development server

```bash
npm run dev
```

Open `http://localhost:3000`. The home page redirects to `/dashboard`.

### 4. Production build

```bash
npm run build
npm start
```

## API Integration

The dashboard does not import the dataset directly in the client component. It calls:

```text
GET /api/sales
```

The route currently returns local mock data. To use a real external API later, replace the content of `app/api/sales/route.ts` with a `fetch()` request to your selected API and return the normalized response.

## Deploy to Vercel

1. Push this project to GitHub.
2. Sign in to Vercel.
3. Click **Add New → Project**.
4. Import your GitHub repository.
5. Keep the default Next.js settings.
6. Click **Deploy**.
7. Copy the generated live URL and test `/dashboard`.

## Push to GitHub

After creating a new empty repository on GitHub:

```bash
git init
git add .
git commit -m "Complete frontend sales dashboard assessment"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

## Assessment submission checklist

- [ ] GitHub repository is public or accessible to the assessor
- [ ] Vercel live URL works without authentication
- [ ] `/dashboard` loads successfully
- [ ] All three years work
- [ ] Threshold filter works
- [ ] Bar, line and pie charts work
- [ ] README is visible in GitHub
- [ ] GitHub and Vercel links are submitted in the required assessment form
- [ ] Links are sent to the required Microsoft Teams contact/channel
- [ ] Email is sent with subject **FINAL FRONTEND PROJECT**
- [ ] Screenshot of the required submission/message is attached

## Submission details template

```text
Name: YOUR NAME
Primary email: YOUR PRIMARY EMAIL
Secondary email: YOUR SECONDARY EMAIL
Intern start date: YYYY-MM-DD
Intern end date: YYYY-MM-DD
Time zone: Asia/Colombo (UTC+05:30) [change if needed]
GitHub: YOUR_GITHUB_URL
Live Vercel: YOUR_VERCEL_URL
```

## Technologies

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Recharts
