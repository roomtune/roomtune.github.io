"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="container-wide py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary">RoomTune</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/technology" className="text-gray-800 hover:text-primary">
              Technology
            </Link>
            <Link href="/products" className="text-gray-800 hover:text-primary">
              Products
            </Link>
            <Link href="/business" className="text-gray-800 hover:text-primary">
              For Business
            </Link>
            <Link href="/support" className="text-gray-800 hover:text-primary">
              Support
            </Link>
            <Link href="/about" className="text-gray-800 hover:text-primary">
              About Us
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/demo" className="btn-primary">
              Try Demo
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <ul className="flex flex-col space-y-4">
              <li>
                <Link href="/technology" className="block text-gray-800 hover:text-primary">
                  Technology
                </Link>
              </li>
              <li>
                <Link href="/products" className="block text-gray-800 hover:text-primary">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/business" className="block text-gray-800 hover:text-primary">
                  For Business
                </Link>
              </li>
              <li>
                <Link href="/support" className="block text-gray-800 hover:text-primary">
                  Support
                </Link>
              </li>
              <li>
                <Link href="/about" className="block text-gray-800 hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/demo" className="btn-primary inline-block">
                  Try Demo
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header; 