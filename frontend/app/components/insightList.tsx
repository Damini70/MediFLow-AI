
export default function InsightsList({ insights=[] }: { insights: string[] }) {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="mb-4 text-lg font-bold">Personalized Insights</h2>
      <ul className="space-y-2 list-disc list-inside">
        {insights.map((insight, idx) => (
          <li key={idx}>{insight}</li>
        ))}
      </ul>
    </div>
  );
}