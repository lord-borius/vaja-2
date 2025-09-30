import React from "react";

interface ProgressCardProps {
  currentAmount: number;
  goalAmount: number;
}

export default function ProgressCard({ currentAmount, goalAmount }: ProgressCardProps) {
  const progress = Math.min((currentAmount / goalAmount) * 100, 100);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-full">
      <h2 className="text-lg font-semibold mb-2">Cilj prihodkov</h2>
      <p className="mb-2">
        {currentAmount}€ od {goalAmount}€
      </p>
      <div className="w-full bg-gray-200 rounded-full h-4">
        <div
          className="bg-green-500 h-4 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="mt-2 text-sm text-gray-600">{progress.toFixed(1)}% doseženo</p>
    </div>
  );
}
