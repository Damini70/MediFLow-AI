import Link from "next/link";
import Image from "next/image";
import { HeartPulse, ShieldCheck, Lightbulb } from "lucide-react";
const about = () => {
  return (
    <>
      <main className="flex flex-col min-h-screen text-gray-900 bg-gray-50">
        <section className="flex flex-col items-center justify-center px-4 py-20 text-center">
          <h1 className="mb-4 text-4xl font-bold text-blue-700 md:text-6xl">
            AI-Powered Healthcare, At Your Fingertips
          </h1>
          <p className="max-w-2xl mb-8 text-lg text-gray-600 md:text-xl">
            Enter your symptoms in natural language, get instant AI-driven risk
            assessments, confidence scores, and personalized medical insights —
            including mental health screening.
          </p>
          <div className="flex gap-4">
            <Link
              href="/login"
              className="px-6 py-3 text-white transition bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              Get Started
            </Link>
            <a
              href="#features"
              className="px-6 py-3 transition bg-white border border-gray-300 rounded-lg hover:bg-gray-100"
            >
              Learn More
            </a>
          </div>
        </section>

        <section id="features" className="px-4 py-16 bg-white">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="mb-6 text-3xl font-bold">Key Features</h2>
            <div className="grid gap-8 text-left md:grid-cols-3">
              <div className="p-6 transition border rounded-lg shadow-sm hover:shadow-md">
                <h3 className="mb-2 text-xl font-semibold">
                  AI Symptom Analysis
                </h3>
                <p className="text-gray-600">
                  Input symptoms in plain language and get instant AI-driven
                  risk classification with confidence scores.
                </p>
              </div>
              <div className="p-6 transition border rounded-lg shadow-sm hover:shadow-md">
                <h3 className="mb-2 text-xl font-semibold">
                  Mental Health Index
                </h3>
                <p className="text-gray-600">
                  Screen your mental well-being using clinically validated AI
                  questionnaires and sentiment analysis.
                </p>
              </div>
              <div className="p-6 transition border rounded-lg shadow-sm hover:shadow-md">
                <h3 className="mb-2 text-xl font-semibold">Voice Input</h3>
                <p className="text-gray-600">
                  Talk instead of typing. Our voice-enabled symptom input makes
                  healthcare more accessible.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <main className="min-h-screen text-gray-900 bg-white">
        <section className="relative w-full h-[60vh] md:h-svh">
          {/* <Image
            src={heroSection.image.src}
            alt="About AI HealthCheck"
            fill
            className="object-cover"
            priority
          /> */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center bg-blue-900/60">
            <h1 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl">
              About AI HealthCheck
            </h1>
            <p className="max-w-2xl mt-4 text-base text-blue-100 sm:text-lg md:text-xl">
              AI-driven insights to empower your health journey — anytime,
              anywhere.
            </p>
          </div>
        </section>

        <section className="max-w-6xl px-6 py-20 mx-auto">
          <h2 className="mb-6 text-3xl font-bold text-center md:text-4xl">
            Our Mission
          </h2>
          <p className="max-w-3xl mx-auto text-lg leading-relaxed text-center text-gray-700">
            At AI HealthCheck, our mission is to provide quick, reliable, and
            accessible healthcare insights powered by cutting-edge AI and
            clinical expertise. We believe technology should bridge the gap
            between people and quality healthcare.
          </p>
        </section>

        <section className="px-6 py-20 bg-gradient-to-br from-blue-50 to-blue-100">
          <div className="max-w-6xl mx-auto">
            <h2 className="mb-12 text-3xl font-bold text-center md:text-4xl">
              Our Core Values
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="p-8 text-center transition bg-white shadow-lg rounded-2xl hover:shadow-xl">
                <HeartPulse className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <h3 className="mb-2 text-xl font-semibold">Accessibility</h3>
                <p className="text-gray-600">
                  Bringing AI-powered healthcare insights to anyone, anywhere —
                  without barriers.
                </p>
              </div>
              <div className="p-8 text-center transition bg-white shadow-lg rounded-2xl hover:shadow-xl">
                <ShieldCheck className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <h3 className="mb-2 text-xl font-semibold">Privacy First</h3>
                <p className="text-gray-600">
                  We safeguard your health data with advanced encryption and
                  never share it without your consent.
                </p>
              </div>
              <div className="p-8 text-center transition bg-white shadow-lg rounded-2xl hover:shadow-xl">
                <Lightbulb className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <h3 className="mb-2 text-xl font-semibold">Innovation</h3>
                <p className="text-gray-600">
                  Continuously improving our AI with the latest medical research
                  and feedback from healthcare experts.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-6xl px-6 py-20 mx-auto">
          <div className="md:flex md:items-center md:gap-12">
            <div className="md:w-1/2">
              <Image
                src="/images/our-story.jpg"
                alt="Our Story"
                width={600}
                height={400}
                className="object-cover shadow-lg rounded-2xl"
              />
            </div>
            <div className="mt-8 md:w-1/2 md:mt-0">
              <h2 className="mb-4 text-3xl font-bold">Our Story</h2>
              <p className="mb-4 text-lg leading-relaxed text-gray-700">
                AI HealthCheck was born from the vision of combining AI
                technology with medical expertise to make healthcare more
                proactive. By analyzing symptoms and mental health markers in
                real-time, we empower people to seek help earlier and live
                healthier lives.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                Our platform is built with compassion, precision, and a deep
                commitment to improving global health accessibility.
              </p>
            </div>
          </div>
        </section>

        <section className="px-6 py-20 text-center text-white bg-blue-700">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Be Part of the Future of Healthcare
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            Join thousands of users who trust AI HealthCheck for early
            healthcare awareness and mental wellness tracking.
          </p>
          <a
            href="/signup"
            className="px-6 py-3 font-semibold text-blue-700 transition bg-white rounded-lg hover:bg-gray-100"
          >
            Get Started
          </a>
        </section>
      </main>
    </>
  );
};

export default about;
