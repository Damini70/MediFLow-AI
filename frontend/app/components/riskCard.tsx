export default function RiskCard({ level }: { level: string }) {
  const colorMap: Record<string, string> = {
    Low: "bg-green-100 text-green-800",
    Medium: "bg-yellow-100 text-yellow-800",
    High: "bg-red-100 text-red-800",
  };

  return (
    <div className={`p-4 rounded-lg shadow-md ${colorMap[level]}`}>
      <h2 className="text-lg font-bold">Risk Level</h2>
      <p className="text-2xl">{level}</p>
    </div>
  );
}