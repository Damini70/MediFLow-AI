"use client";

import SymptomForm from "./symptomForm"
import RiskCard from "./riskCard";
import ConfidenceChart from "./confidenceChart";
import InsightsList from "./insightList";
import PDFDownloadButton from "./pdfDownloadButton";
import { useState } from "react";

export default function Dashboard() {
  const [analysis, setAnalysis] = useState<null | {
    symptoms: string;
    risk: string;
    confidence: { label: string; score: number }[];
    insights: string[];
  }>(null);

  const handleAnalyze = (data: { symptoms: string }) => {
    // Mocked AI response
    const mockResult = {
      symptoms: data.symptoms,
      risk: "Medium",
      confidence: [
        { label: "Flu", score: 65 },
        { label: "COVID-19", score: 25 },
        { label: "Common Cold", score: 10 },
      ],
      insights: [
        "Stay hydrated and rest well.",
        "Monitor your temperature twice daily.",
        "Consider visiting a doctor if symptoms worsen.",
      ],
    };
    setAnalysis(mockResult);
  };

  return (
    <>
      <main className="p-6 space-y-6">
        <h1 className="text-2xl font-bold">Symptom Analysis Dashboard</h1>
        <SymptomForm onAnalyze={handleAnalyze} />
        {analysis && (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <RiskCard level={analysis.risk} />
            <ConfidenceChart data={analysis.confidence} />
            <InsightsList insights={analysis.insights} />
            <PDFDownloadButton
              symptoms={analysis.symptoms}
              risk={analysis.risk}
              confidence={analysis.confidence}
              insights={analysis.insights}
            />
          </div>
        )}
      </main>
    </>
  );
}


