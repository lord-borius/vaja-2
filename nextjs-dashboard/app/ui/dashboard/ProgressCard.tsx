"use client";

interface ProgressCardProps {
  currentAmount: number;
  goalAmount: number;
}

export default function ProgressCard({ currentAmount, goalAmount }: ProgressCardProps) {
  const progress = Math.min((currentAmount / goalAmount) * 100, 100);

  
  let progressColor = "bg-green-500";
  if (progress < 50) progressColor = "bg-red-500";
  else if (progress < 80) progressColor = "bg-yellow-500";

  return (
    <div className="rounded-xl bg-white p-4 shadow">
      <h2 className="font-semibold text-lg mb-1">Cilj prihodkov</h2>
      <p className="text-sm text-gray-600 mb-2">
        {currentAmount.toLocaleString("sl-SI")}€ od {goalAmount.toLocaleString("sl-SI")}€
      </p>
      <div className="w-full bg-gray-200 rounded-full h-4">
        <div
          className={`${progressColor} h-4 rounded-full transition-all duration-500`}
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="text-sm text-gray-500 mt-2">{progress.toFixed(1)}% doseženo</p>
    </div>
  );
}
