"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`bg-dark fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'shadow-md shadow-primary/20' : 'shadow-sm shadow-primary/10'
    }`}>
      <div className="container-wide py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary animate-glowPulse">RoomTune</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/technology" className="text-light hover:text-primary transition-colors">
              Technology
            </Link>
            <Link href="/products" className="text-light hover:text-primary transition-colors">
              Products
            </Link>
            <Link href="/business" className="text-light hover:text-primary transition-colors">
              For Business
            </Link>
            <Link href="/support" className="text-light hover:text-primary transition-colors">
              Support
            </Link>
            <Link href="/about" className="text-light hover:text-primary transition-colors">
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
            className="md:hidden text-light"
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
                <Link href="/technology" className="block text-light hover:text-primary transition-colors">
                  Technology
                </Link>
              </li>
              <li>
                <Link href="/products" className="block text-light hover:text-primary transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/business" className="block text-light hover:text-primary transition-colors">
                  For Business
                </Link>
              </li>
              <li>
                <Link href="/support" className="block text-light hover:text-primary transition-colors">
                  Support
                </Link>
              </li>
              <li>
                <Link href="/about" className="block text-light hover:text-primary transition-colors">
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