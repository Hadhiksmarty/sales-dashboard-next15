import { NextResponse } from 'next/server';
import { salesData } from '@/data/sales';

export async function GET() {
  return NextResponse.json({
    source: 'Mock data inspired by a Kaggle FMCG retail sales dataset (2022-2024)',
    data: salesData,
  });
}
