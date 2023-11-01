'use client'

import TopCards from '@/components/TopCards';
import BarChart from '@/components/BarChart';
import PieChart from '@/components/PieChart';
export default function Home() {
  return (
    <>
    
      <TopCards/>
      <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-3">
      <BarChart/>
      <PieChart/>
      </div>
    </>
  );
}
