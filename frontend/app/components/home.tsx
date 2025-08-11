import Link from "next/link";
import React from "react";
import Image from "next/image";
import Navbar from "./navbar";
import Footer from "./footer";
import { heroSection, platformHighlights } from "../../utils/landingPage";
import Button from "./ui/Button";

import Dashboard from "./dashboard";
export default function LandingPage() {
  return (
    <>
      <div className="min-h-screen text-gray-800 bg-white">
        <Navbar />

        <section className="flex flex-col items-center justify-between min-h-screen px-6 py-16 bg-white pt-28 lg:flex-row lg:px-20">
          <div className="max-w-xl">
            <p className="mb-2 text-sm font-medium tracking-wider text-gray-600">
              {heroSection.badge}
            </p>
            <h1 className="mb-6 text-4xl font-bold text-gray-900 lg:text-5xl">
              {heroSection.heading}
              <span className="text-indigo-600">{heroSection.highlight}</span>
            </h1>
            <p className="mb-8 text-lg text-gray-600">
              {heroSection.description}
            </p>

            <Button
              className="px-6 py-3 font-semibold text-white transition bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700"
              label={heroSection.ctaText}
            />
          </div>

          <div className="mt-12 bg-blue-400 rounded-2xl lg:mt-0">
            <Image
              src={heroSection.image.src}
              alt={heroSection.image.alt}
              width={heroSection.image.width}
              height={heroSection.image.height}
              className="shadow-lg rounded-2xl"
            />
          </div>
        </section>

        <section className="px-6 py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto text-center">
            <h3 className="mb-12 text-4xl font-bold text-gray-900">
              Platform Highlights
            </h3>
            <div className="grid gap-10 md:grid-cols-3">
              {platformHighlights.map((item: any, index) => (
                <div
                  key={index}
                  className="p-8 transition-shadow duration-300 bg-white shadow-md rounded-2xl hover:shadow-xl"
                >
                  <div className="flex items-center justify-center mx-auto mb-4 text-indigo-600 bg-indigo-100 rounded-full w-14 h-14">
                    {/* Use placeholder icons for now */}
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="mb-2 text-xl font-semibold text-gray-800">
                    {item.title}
                  </h4>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 bg-gray-100">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="mb-10 text-3xl font-bold">How It Works</h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div>
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 text-xl font-bold text-blue-700 bg-blue-100 rounded-full">
                  1
                </div>
                <h3 className="mb-2 text-xl font-semibold">Enter Symptoms</h3>
                <p className="text-gray-600">
                  Use text or voice input to share your health concerns.
                </p>
              </div>
              <div>
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 text-xl font-bold text-blue-700 bg-blue-100 rounded-full">
                  2
                </div>
                <h3 className="mb-2 text-xl font-semibold">AI Analysis</h3>
                <p className="text-gray-600">
                  Our AI models analyze your symptoms using clinical data.
                </p>
              </div>
              <div>
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 text-xl font-bold text-blue-700 bg-blue-100 rounded-full">
                  3
                </div>
                <h3 className="mb-2 text-xl font-semibold">Get Insights</h3>
                <p className="text-gray-600">
                  View your risk level, confidence score, and personalized
                  recommendations.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-20 text-center text-white bg-blue-700">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Start Your AI Health Check Today
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            Quick, private, and backed by advanced medical AI. Get started now
            and take control of your health.
          </p>
          <Link
            href="/login"
            className="px-6 py-3 font-semibold text-blue-700 transition bg-white rounded-lg hover:bg-gray-100"
          >
            Sign Up Free
          </Link>
        </section>
        <Footer />
      </div>
    </>
  );
}
