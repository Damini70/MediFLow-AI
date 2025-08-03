// app/not-found.tsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="mb-6">Sorry, the page you are looking for does not exist.</p>
      <Link href="/">
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Go Home
        </button>
      </Link>
    </div>
  );
}
