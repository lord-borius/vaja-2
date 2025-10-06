import React from "react";
interface ProgressCardProps {
  currentAmount: number;
  goalAmount: number;
}

export default function ProgressCard({ currentAmount, goalAmount }: ProgressCardProps) {
  const progress = (currentAmount / goalAmount) * 100;

  return (
    <div className="rounded-xl bg-white p-4 shadow">
      <h2 className="font-bold text-lg mb-2">Cilj prihodkov</h2>
      <p className="text-sm text-gray-500">
        {currentAmount}€ od {goalAmount}€
      </p>
      <div className="w-full bg-gray-200 rounded-full h-4 mt-2">
        <div
          className="bg-green-500 h-4 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="text-xs text-gray-500 mt-1">{progress.toFixed(1)}% doseženo</p>
    </div>
  );
}

