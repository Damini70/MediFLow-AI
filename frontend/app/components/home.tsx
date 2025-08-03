// components/landingPage.tsx
import React from "react";
import Image from "next/image";
import Navbar from "./navbar";
import Footer from "./footer";
import { heroSection, platformHighlights } from "../../utils/landingPage";
import Button from "./ui/Button";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-white min-h-screen flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-16">
        {/* Text Side */}
        <div className="max-w-xl">
          <p className="text-sm font-medium text-gray-600 mb-2 tracking-wider">
            {heroSection.badge}
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {heroSection.heading}
            <span className="text-indigo-600">{heroSection.highlight}</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8">{heroSection.description}</p>
          <Button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition" label={heroSection.ctaText}/>
        </div>

        {/* Image Side */}
        <div className="mt-12 bg-blue-400 rounded-2xl lg:mt-0">
          <Image
            src={heroSection.image.src}
            alt={heroSection.image.alt}
            width={heroSection.image.width}
            height={heroSection.image.height}
            className="rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* Platform Highlights */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-4xl font-bold text-gray-900 mb-12">Platform Highlights</h3>
          <div className="grid gap-10 md:grid-cols-3">
            {platformHighlights.map((item:any, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center justify-center w-14 h-14 bg-indigo-100 text-indigo-600 rounded-full mb-4 mx-auto">
                  {/* Use placeholder icons for now */}
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h4>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
