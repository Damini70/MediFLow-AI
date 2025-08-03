import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./navbar";
import Footer from "./footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Navbar/>

        {/* Hero Section */}
    <section className="bg-white min-h-screen flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-16">
      {/* Text Side */}
      <div className="max-w-xl">
        <p className="text-sm font-medium text-gray-600 mb-2 tracking-wider">
          MEDICAL GUIDANCE PLATFORM / TRIAGE
        </p>
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Enhance symptom assessment with{' '}
          <span className="text-indigo-600">AI-powered virtual triage</span>
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Support patients before their visit with symptom analysis and tailored medical guidance using AI-powered virtual triage.
        </p>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition">
          Get in touch
        </button>
      </div>

      {/* Image Side */}
      <div className="mt-12 bg-blue-400 rounded-2xl lg:mt-0">
        <Image
          src="/app-preview.png"
          alt="AI Virtual Triage Interface"
          width={400}
          height={500}
          className="rounded-2xl shadow-lg"
        />
      </div>
    </section>
   
   
{/* Platform highlights */}
      
      <section className="py-20 px-6 bg-gray-50">
  <div className="max-w-6xl mx-auto text-center">
    <h3 className="text-4xl font-bold text-gray-900 mb-12">
      Platform Highlights
    </h3>
    <div className="grid gap-10 md:grid-cols-3">
      {/* Card 1 */}
      <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center justify-center w-14 h-14 bg-indigo-100 text-indigo-600 rounded-full mb-4 mx-auto">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M13 16h-1v-4h-1m1-4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"/>
          </svg>
        </div>
        <h4 className="text-xl font-semibold mb-2 text-gray-800">Natural Language Symptom Input</h4>
        <p className="text-gray-600">
          Describe what you're feeling in plain language - our AI does the rest.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center justify-center w-14 h-14 bg-indigo-100 text-indigo-600 rounded-full mb-4 mx-auto">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M12 8c-1.105 0-2 .672-2 1.5s.895 1.5 2 1.5 2-.672 2-1.5S13.105 8 12 8zm0 6c-1.333 0-4 .667-4 2v1h8v-1c0-1.333-2.667-2-4-2z"/>
          </svg>
        </div>
        <h4 className="text-xl font-semibold mb-2 text-gray-800">AI-Based Risk Assessment</h4>
        <p className="text-gray-600">
          Receive an instant analysis of your condition with confidence scores.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center justify-center w-14 h-14 bg-indigo-100 text-indigo-600 rounded-full mb-4 mx-auto">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h4 className="text-xl font-semibold mb-2 text-gray-800">Personalized Insights</h4>
        <p className="text-gray-600">
          Care tailored to your age, gender, history, and vitals - securely handled.
        </p>
      </div>
    </div>
  </div>
</section>




      {/* CTA Section */}
      {/* <section className="py-12 bg-blue-50 text-center">
        <h4 className="text-2xl font-semibold mb-4">Ready to understand your symptoms better?</h4>
        <Link
          href="/symptom-checker"
          className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg hover:bg-blue-700"
        >
          Try It Now
        </Link>
      </section> */}


     <Footer/>
    </div>
  );
}
