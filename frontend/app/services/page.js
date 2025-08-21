import Image from "next/image";

export default function services() {
  const services = [
    {
      title: "AI Symptom Analysis",
      description:
        "Describe your symptoms in everyday language, and our AI will interpret them using medical NLP models to provide a preliminary health assessment.",
      icon: "🩺",
    },
    {
      title: "Risk Classification & Confidence Scores",
      description:
        "Get clear insights with a visual risk rating (Low, Moderate, High) and a confidence percentage to understand reliability.",
      icon: "📊",
    },
    {
      title: "Personalized Medical Insights",
      description:
        "Receive health recommendations tailored to your condition, lifestyle, and reported symptoms.",
      icon: "💡",
    },
    {
      title: "Mental Health Check",
      description:
        "Assess your emotional well-being with guided questionnaires and AI-based mood analysis.",
      icon: "🧠",
    },
    {
      title: "Voice Symptom Input",
      description:
        "Speak your symptoms directly to the app for quick, hands-free analysis.",
      icon: "🎙️",
    },
    {
      title: "Secure Health Data Storage",
      description:
        "Your health data is encrypted and stored securely, ensuring privacy and HIPAA compliance.",
      icon: "🔒",
    },
  ];

  const steps = [
    {
      step: "1",
      title: "Sign Up",
      text: "Create a free account to access AI-powered health tools.",
    },
    {
      step: "2",
      title: "Enter Symptoms",
      text: "Type or speak your symptoms into our intuitive form.",
    },
    {
      step: "3",
      title: "Get AI Insights",
      text: "Receive an instant analysis with risk level, possible conditions, and recommendations.",
    },
    {
      step: "4",
      title: "Track Your Health",
      text: "Save results, view history, and monitor your health trends over time.",
    },
  ];

  return (
    <>
    <main className="min-h-screen text-gray-900 bg-gray-50">
  
      <section className="relative w-full h-[60vh] bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 text-white">
        <Image
          src="/landing.jpg"
          alt="Healthcare Services"
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <h1 className="text-4xl font-bold md:text-6xl drop-shadow-lg">
            Our Services
          </h1>
          <p className="max-w-2xl mt-4 text-lg text-blue-100 md:text-xl">
            AI-powered healthcare tools designed to help you understand, monitor, and improve your well-being — anytime, anywhere.
          </p>
        </div>
      </section>

      <section className="grid gap-10 px-6 py-16 mx-auto max-w-7xl sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="relative p-8 transition bg-white border border-gray-200 shadow-lg group rounded-2xl hover:shadow-2xl hover:border-blue-500"
          >
            <div className="mb-6 text-5xl transition group-hover:scale-110">
              {service.icon}
            </div>
            <h2 className="mb-3 text-2xl font-semibold">{service.title}</h2>
            <p className="leading-relaxed text-gray-700">{service.description}</p>
          </div>
        ))}
      </section>

      <section className="py-20 bg-blue-50">
        <div className="max-w-6xl px-6 mx-auto text-center">
          <h2 className="mb-12 text-3xl font-bold">How It Works</h2>
          <div className="grid gap-8 md:grid-cols-4">
            {steps.map((step) => (
              <div
                key={step.step}
                className="p-6 transition bg-white shadow-md rounded-xl hover:shadow-lg"
              >
                <div className="mb-4 text-3xl font-bold text-blue-700">
                  {step.step}
                </div>
                <h3 className="mb-2 text-lg font-semibold">{step.title}</h3>
                <p className="text-gray-600">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    
      <section className="relative py-20 text-center text-white bg-gradient-to-r from-blue-700 to-blue-800">
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">
          Take Control of Your Health Today
        </h2>
        <p className="max-w-2xl mx-auto mb-6 text-lg text-blue-100">
          Sign up and start your journey with AI-powered health insights now.
        </p>
        <a
          href="/signup"
          className="px-8 py-3 font-semibold text-blue-800 transition bg-white rounded-lg hover:bg-gray-100"
        >
          Get Started
        </a>
      </section>

    </main>
    </>
  );
}
