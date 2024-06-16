/*
import React from 'react';

function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="border-4 border-blue-500 rounded-full w-12 h-12 animate-spin mb-4"></div>
      <div className="text-lg font-semibold text-gray-700">Loading...</div>
    </div>
  );
}

export default Loading;*/


import DashboardSkeleton from '@/app/ui/skeletons';
 
export default function Loading() {
  return <DashboardSkeleton />;
}
