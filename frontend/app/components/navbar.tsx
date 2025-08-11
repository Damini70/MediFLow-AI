'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import Image from 'next/image';
import { logoImage } from '@/utils/landingPage';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Help', path: '/help' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const user = true;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClasses = `fixed top-0 w-full z-50 transition duration-300 ${
    isScrolled
      ? 'bg-white/30 dark:bg-gray-900/30 backdrop-blur-md shadow-md'
      : 'bg-primary'
  }`;

  const getLinkClass = () =>
    `hover:font-semibold transition-colors duration-200 ${
      isScrolled
        ? 'text-gray-800 dark:text-white'
        : 'text-white dark:text-white'
    }`;

  const AuthButtons = () => {
    const base = 'px-4 py-1.5 text-sm rounded-md transition text-center font-medium';
    return user ? (
      <Link
        href="/login"
        className={`${base} bg-white text-blue-600 hover:bg-blue-600 hover:text-white shadow`}
      >
        Logout
      </Link>
    ) : (
      <>
        <Link
          href="/login"
          className={`${base} border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white shadow`}
        >
          Login
        </Link>
        <Link
          href="/register"
          className={`${base} bg-blue-600 text-white hover:bg-blue-700 shadow`}
        >
          Register
        </Link>
      </>
    );
  };

  return (
    <nav className={navClasses}>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo + Brand */}
          <div className="flex items-center gap-x-3">
            <div className="relative w-10 h-10 overflow-hidden rounded-full shadow-lg dark:shadow-gray-800">
              <Image
                src={logoImage.image.src}
                alt={logoImage.image.alt}
                fill
                className="object-cover"
              />
            </div>
            <Link
              href="/"
              className={`text-2xl font-bold ${
                isScrolled ? 'text-gray-800 dark:text-white' : 'text-white'
              }`}
            >
              MediFlow AI
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="items-center hidden md:flex gap-x-6">
            <div className="flex text-sm font-medium gap-x-6">
              {navLinks.map(({ name, path }) => (
                <Link key={path} href={path} className={getLinkClass()}>
                  {name}
                </Link>
              ))}
            </div>
            <div className="flex gap-x-3">{AuthButtons()}</div>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={`transition-colors ${
                isScrolled ? 'text-gray-800 dark:text-white' : 'text-white'
              }`}
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="px-4 pb-6 space-y-3 text-sm text-gray-800 md:hidden dark:text-gray-200">
          {navLinks.map(({ name, path }) => (
            <Link key={path} href={path} className={`block ${getLinkClass()}`}>
              {name}
            </Link>
          ))}
          <div className="flex flex-col pt-3 space-y-2">{AuthButtons()}</div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
