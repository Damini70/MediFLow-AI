
const help = () => {
  return (
    <>
     
    <main className="min-h-screen text-gray-900 bg-gray-50">
      {/* Header */}
      <section className="px-6 py-20 text-center text-white bg-blue-700">
        <h1 className="text-4xl font-bold md:text-5xl">Help & Support</h1>
        <p className="max-w-2xl mx-auto mt-4 text-lg text-blue-200">
          Need assistance? Find answers to common questions or reach out to our support team.
        </p>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl px-6 py-16 mx-auto">
        <h2 className="mb-8 text-3xl font-bold text-center">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <details className="p-6 bg-white rounded-lg shadow cursor-pointer">
            <summary className="text-lg font-semibold">How does the symptom analysis work?</summary>
            <p className="mt-2 text-gray-700">
              You enter your symptoms in natural language, and our AI-powered backend analyzes them to provide a risk classification, confidence score, and personalized medical insights.
            </p>
          </details>
          <details className="p-6 bg-white rounded-lg shadow cursor-pointer">
            <summary className="text-lg font-semibold">Is my health data secure?</summary>
            <p className="mt-2 text-gray-700">
              Absolutely. We prioritize your privacy by encrypting all stored data and never sharing your personal information with third parties.
            </p>
          </details>
          <details className="p-6 bg-white rounded-lg shadow cursor-pointer">
            <summary className="text-lg font-semibold">Can I use the app without signing up?</summary>
            <p className="mt-2 text-gray-700">
              Some features are available without signing up, but to save your analysis history and access personalized insights, you need to create an account.
            </p>
          </details>
          <details className="p-6 bg-white rounded-lg shadow cursor-pointer">
            <summary className="text-lg font-semibold">How accurate is the AI diagnosis?</summary>
            <p className="mt-2 text-gray-700">
              Our AI uses state-of-the-art clinical models and is meant to support—not replace—professional medical advice. Always consult a healthcare provider for critical health decisions.
            </p>
          </details>
          <details className="p-6 bg-white rounded-lg shadow cursor-pointer">
            <summary className="text-lg font-semibold">How do I contact support?</summary>
            <p className="mt-2 text-gray-700">
              You can email us anytime at <a href="mailto:support@aihealthcheck.com" className="text-blue-600 underline">support@aihealthcheck.com</a> or use the contact form below.
            </p>
          </details>
        </div>
      </section>

      {/* Contact Form */}
      <section className="max-w-3xl px-6 py-16 mx-auto mb-20 bg-white rounded-lg shadow-md">
        <h2 className="mb-8 text-3xl font-bold text-center">Contact Us</h2>
        <form
          action="mailto:support@aihealthcheck.com"
          method="POST"
          encType="text/plain"
          className="space-y-6"
        >
          <div>
            <label htmlFor="name" className="block mb-2 font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your full name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2 font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="How can we help you?"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 font-semibold text-white transition bg-blue-700 rounded-md hover:bg-blue-800"
          >
            Send Message
          </button>
        </form>
      </section>

    </main>


    </>
  )
}

export default help
