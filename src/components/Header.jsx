"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/Biccas.svg"
            alt="Biccas"
            width={120}
            height={40}
            className="h-6 sm:h-8 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          <Link
            href="/"
            className="text-gray-800 hover:text-[#54BD95] transition-colors text-sm lg:text-base"
          >
            Home
          </Link>
          <Link
            href="/product"
            className="text-gray-800 hover:text-[#54BD95] transition-colors text-sm lg:text-base"
          >
            Product
          </Link>
          <Link
            href="/faq"
            className="text-gray-800 hover:text-[#54BD95] transition-colors text-sm lg:text-base"
          >
            FAQ
          </Link>
          <Link
            href="/blog"
            className="text-gray-800 hover:text-[#54BD95] transition-colors text-sm lg:text-base"
          >
            Blog
          </Link>
          <Link
            href="/about"
            className="text-gray-800 hover:text-[#54BD95] transition-colors text-sm lg:text-base"
          >
            About Us
          </Link>
        </nav>

        {/* User Actions */}
        <div className="flex items-center gap-2 sm:gap-4">
          <Link
            href="/login"
            className="text-gray-800 hover:text-[#54BD95] transition-colors hidden sm:block text-sm lg:text-base"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="bg-[#54BD95] text-white px-4 sm:px-6 py-2 rounded-full hover:bg-[#45a882] transition-colors font-medium text-sm sm:text-base"
          >
            Sign Up
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-800 hover:text-[#54BD95] transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <nav className="md:hidden mt-4 pb-4 border-t border-gray-200">
          <div className="flex flex-col gap-4 pt-4">
            <Link
              href="/"
              className="text-gray-800 hover:text-[#54BD95] transition-colors px-2 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/product"
              className="text-gray-800 hover:text-[#54BD95] transition-colors px-2 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Product
            </Link>
            <Link
              href="/faq"
              className="text-gray-800 hover:text-[#54BD95] transition-colors px-2 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link
              href="/blog"
              className="text-gray-800 hover:text-[#54BD95] transition-colors px-2 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/about"
              className="text-gray-800 hover:text-[#54BD95] transition-colors px-2 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/login"
              className="text-gray-800 hover:text-[#54BD95] transition-colors px-2 py-2 sm:hidden"
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
