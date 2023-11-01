'use client'
import { Icon } from '@iconify/react';
const TopCards = () => {
  return (
    <div className="grid gap-10 p-4 lg:grid-cols-4 grid-cols-2 ">
      <div className="col-span-1 flex w-full justify-between rounded-lg border bg-white p-4 lg:col-span-1">
        <div className="flex w-full flex-col pb-4">
          <p className="text-2xl font-bold">8,8548</p>
          <p className="text-gray-700">Total students</p>
        </div>
        <p className="my-1 flex min-w-[55px] items-center justify-center rounded-lg bg-blue-200 p-2 font-semibold">
          <span><Icon icon="lucide:users" width="24" height="24" /></span>
        </p>
      </div>
      <div className="col-span-1 flex w-full justify-between rounded-lg border bg-white p-4 lg:col-span-1">
        <div className="flex w-full flex-col pb-4">
          <p className="text-2xl font-bold">$8,8548</p>
          <p className="text-gray-700">Daily Revenue</p>
        </div>
        <p className="my-1 flex min-w-[55px] items-center justify-center rounded-lg bg-blue-200 p-2 font-semibold">
          <span>+8%</span>
        </p>
      </div>
      <div className="col-span-1 flex w-full justify-between rounded-lg border bg-white p-4 lg:col-span-1">
        <div className="flex w-full flex-col pb-4">
          <p className="text-2xl font-bold">$8,8548</p>
          <p className="text-gray-700">Daily Revenue</p>
        </div>
        <p className="my-1 flex min-w-[55px] items-center justify-center rounded-lg bg-blue-200 p-2 font-semibold">
          <span>+8%</span>
        </p>
      </div>
      <div className="col-span-1 flex w-full justify-between rounded-lg border bg-white p-4 lg:col-span-1">
        <div className="flex w-full flex-col pb-4">
          <p className="text-2xl font-bold">$8,8548</p>
          <p className="text-gray-700">Daily Revenue</p>
        </div>
        <p className="my-1 flex min-w-[55px] items-center justify-center rounded-lg bg-blue-200 p-2 font-semibold">
          <span>+8%</span>
        </p>
      </div>
      
    </div>
  );
};

export default TopCards;
