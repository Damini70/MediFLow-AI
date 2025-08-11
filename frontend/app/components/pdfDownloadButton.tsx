"use client";
import jsPDF from "jspdf";

export default function PDFDownloadButton({
  symptoms, risk, confidence, insights
}: {
  symptoms: string;
  risk: string;
  confidence: { label: string; score: number }[];
  insights: string[];
}) {
  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.text("AI Healthcare Report", 10, 10);
    doc.text(`Symptoms: ${symptoms}`, 10, 20);
    doc.text(`Risk Level: ${risk}`, 10, 30);
    doc.text("Confidence Scores:", 10, 40);
    confidence.forEach((c, i) => {
      doc.text(`${c.label}: ${c.score}%`, 10, 50 + i * 10);
    });
    doc.text("Insights:", 10, 80);
    insights.forEach((insight, i) => {
      doc.text(`- ${insight}`, 10, 90 + i * 10);
    });
    doc.save("health_report.pdf");
  };

  return (
    <button onClick={downloadPDF} className="px-4 py-2 mt-4 text-white bg-green-500 rounded hover:bg-green-600">
      Download Report as PDF
    </button>
  );
}