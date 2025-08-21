"use client";
import { useState } from 'react';

export default function MentalHealthPage() {
  const [text, setText] = useState('');
  const [score, setScore] = useState<number | null>(null);
  const [notes, setNotes] = useState<string[]>([]);


  const analyzeMental = (input: string) => {
    const lowered = input.toLowerCase();
    let s = 50;
    if (/(depress|sad|hopeless|worthless)/.test(lowered)) s -= 25;
    if (/(anxious|nervous|panic|worried)/.test(lowered)) s -= 15;
    if (/(happy|good|well|great)/.test(lowered)) s += 20;
    s = Math.max(0, Math.min(100, s));
    const n: string[] = [];
    if (s < 40) n.push('Consider speaking with a mental health professional.');
    if (s < 60) n.push('Practice deep breathing and short mindfulness exercises daily.');
    if (s >= 60) n.push('Maintain current self-care practices. Keep monitoring.');
    return { s, n };
  };

  const handleAnalyze = () => {
    const res = analyzeMental(text);
    setScore(res.s);
    setNotes(res.n);
  };

  return (
    <main className="max-w-3xl p-6 mx-auto">
      <h1 className="mb-4 text-3xl font-bold">Mental Health Index</h1>
      <p className="mb-4">
        This lightweight assessment gives a quick mental well-being index based on your input. For clinical-grade
        analysis, connect to the AI backend.
      </p>

      <textarea
        className="w-full p-3 mb-4 border rounded"
        rows={6}
        placeholder="Describe how you've been feeling lately..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div className="flex gap-3">
        <button onClick={handleAnalyze} className="px-4 py-2 text-white bg-blue-600 rounded">
          Analyze
        </button>
        <button
          onClick={() => {
            setText('');
            setScore(null);
            setNotes([]);
          }}
          className="px-4 py-2 border rounded"
        >
          Clear
        </button>
      </div>

      {score !== null && (
        <div className="p-4 mt-6 bg-white rounded shadow">
          <h2 className="text-xl font-semibold">Mental Health Index: {score}/100</h2>
          <p className="mt-2">Recommendations:</p>
          <ul className="pl-5 mt-2 list-disc">
            {notes.map((n, i) => (
              <li key={i}>{n}</li>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
}