'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaBookOpen, FaBars } from 'react-icons/fa';

const Nav: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo + Title */}
          <div className="flex items-center cursor-pointer">
            <div className="flex-shrink-0 flex items-center">
              <FaBookOpen className="text-blue-500 text-2xl mr-2" />
              <span className="text-xl font-bold text-blue-600">Learning Fun Hub</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-8">
            <Link href="#features" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">Features</Link>
            <Link href="#how-it-works" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">How It Works</Link>
            <Link href="#testimonials" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">Testimonials</Link>
            <Link href="#pricing" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">Pricing</Link>
          </div>

          {/* CTA Button */}
          <div className="flex items-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium">
              Try for Free
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={toggleMobileMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <FaBars />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div id="mobile-menu" className="sm:hidden bg-white border-t">
          <div className="pt-2 pb-3 space-y-1">
            <Link href="#features" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">Features</Link>
            <Link href="#how-it-works" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">How It Works</Link>
            <Link href="#testimonials" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">Testimonials</Link>
            <Link href="#pricing" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">Pricing</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
