'use client'; // Only if using Next.js App Router

import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const user = true;

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
         
          <Link href="/" className="text-2xl font-bold text-gray-800 dark:text-white">
            MediFlow AI
          </Link>

        
          <div className="hidden md:flex items-center space-x-6 py-4">
            <div className="flex space-x-6 text-sm text-gray-600 dark:text-gray-300 font-medium">
              <Link href="/" className="text-primary-light hover:text-dark dark:hover:text-dark">Home</Link>
              <Link href="/about" className="hover:text-blue-600 dark:hover:text-white">About</Link>
              <Link href="/services" className="hover:text-blue-600 dark:hover:text-white">Services</Link>
              <Link href="/contact" className="hover:text-blue-600 dark:hover:text-white">Contact</Link>
            </div>

        
            <div className="flex space-x-3">
              {user ? (<><Link
                href="/login"
                className="px-4 py-1.5 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-md text-sm transition"
              >
               Logout
              </Link></>):(<><Link
                href="/login"
                className="px-4 py-1.5 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-md text-sm transition"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="px-4 py-1.5 bg-blue-600 text-white hover:bg-blue-700 rounded-md text-sm transition"
              >
                Register
              </Link></>)
             }
            </div>
          </div>

        
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 dark:text-gray-300 focus:outline-none">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

     
      {isOpen && (
        <div className="md:hidden px-4 pb-6 space-y-3 text-sm text-gray-600 dark:text-gray-300">
          <Link href="/" className="block hover:text-blue-600 dark:hover:text-white">Home</Link>
          <Link href="/about" className="block hover:text-blue-600 dark:hover:text-white">About</Link>
          <Link href="/services" className="block hover:text-blue-600 dark:hover:text-white">Services</Link>
          <Link href="/contact" className="block hover:text-blue-600 dark:hover:text-white">Contact</Link>
             <div className="flex flex-col pt-3 space-y-2">
              {user ? (<><Link
                href="/login"
                className="px-4  text-center py-1.5 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-md text-sm transition"
              >
               Logout
              </Link></>):(<><Link
                href="/login"
                className="px-4 py-1.5 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-md text-sm transition"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="px-4 py-1.5 bg-blue-600 text-white hover:bg-blue-700 rounded-md text-sm transition"
              >
                Register
              </Link></>)
             }
            </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
