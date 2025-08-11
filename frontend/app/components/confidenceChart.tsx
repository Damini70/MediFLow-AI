"use client";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function ConfidenceChart({ data=[] }: { data: { label: string; score: number }[] }) {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="mb-4 text-lg font-bold">Confidence Scores</h2>
      <Bar
        data={{
          labels: data.map(d => d.label),
          datasets: [
            {
              label: "Confidence",
              data: data.map(d => d.score),
              backgroundColor: "#3b82f6",
            },
          ],
        }}
        options={{
          responsive: true,
          plugins: {
            legend: { display: false },
          },
          scales: {
            y: { beginAtZero: true, max: 100 },
          },
        }}
      />
    </div>
  );
}