import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Error404Page = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6 py-20 text-center">
      <div className="max-w-2xl">
        <p className="text-sm uppercase tracking-wider text-indigo-600 font-semibold mb-4">Oops! Page not found</p>
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          404 – Not Found
        </h1>
        <p className="text-lg text-gray-600 mb-10">
          The page you are looking for doesn't exist or has been moved. Let us guide you back.
        </p>
        <Link href="/">
          <a className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white text-base font-medium px-6 py-3 rounded-xl shadow transition">
            Go Back Home
          </a>
        </Link>
      </div>

      <div className="mt-16">
        <Image
          src="/app-preview.png" // use a light illustration or cropped image from your hero
          alt="Illustration"
          className="w-[360px] mx-auto opacity-80"
        />
      </div>
    </div>
  )
}

export default Error404Page
