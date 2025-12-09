"use client";

import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const supportLinks = [
    "Help centre",
    "Account information",
    "About",
    "Contact us",
  ];

  const helpLinks = [
    "Talk to support",
    "Support docs",
    "System status",
    "Covid responde",
  ];

  const productLinks = ["Update", "Security", "Beta test", "Pricing product"];

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    // Handle email submission
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <footer className="w-full" style={{ backgroundColor: "#161C28" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Main Footer Content - 2 Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          {/* Left Column - Biccas Brand and CTA */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#54BD95] mb-4">
              Biccas
            </h2>
            <p className="text-[#A6A6A6] text-sm lg:text-base mb-6">
              Get started now try our product
            </p>
            <form onSubmit={handleEmailSubmit} className="flex items-center">
              <div
                className="flex items-center  bg-[#161C28] border-4 border-[#2A3441] rounded-full px-1 py-3 opacity-100 w-full"
                style={{
                  width: "410px",
                  height: "50px",
                  borderRadius: "70px",
                  borderWidth: "2px",
                  opacity: 1,
                }}
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email here"
                  className="flex-1 ml-3 bg-transparent text-white placeholder-gray-400 focus:outline-none text-sm"
                  required
                />
                <button
                  type="submit"
                  className="bg-[#54BD95] text-white rounded-full hover:bg-[#45a882] transition-colors shrink-0 flex items-center justify-center"
                  style={{ width: "40px", height: "40px" }}
                  aria-label="Submit email"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>

          {/* Right Column - Support, Help and Solution, Product */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
            {/* Support Column */}
            <div>
              <h3 className="text-white font-semibold mb-4 text-base lg:text-lg">
                Support
              </h3>
              <ul className="space-y-3">
                {supportLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-[#A6A6A6] text-sm lg:text-base hover:text-[#54BD95] transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Help and Solution Column */}
            <div>
              <h3 className="text-white font-semibold mb-4 text-base lg:text-lg">
                Help and Solution
              </h3>
              <ul className="space-y-3">
                {helpLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-[#A6A6A6] text-sm lg:text-base hover:text-[#54BD95] transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Product Column */}
            <div>
              <h3 className="text-white font-semibold mb-4 text-base lg:text-lg">
                Product
              </h3>
              <ul className="space-y-3">
                {productLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-[#A6A6A6] text-sm lg:text-base hover:text-[#54BD95] transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-white text-sm">
              © 2022 Biccas Inc. Copyright and rights reserved
            </p>
            <div className="flex gap-4 text-white text-sm">
              <a href="#" className="hover:text-[#54BD95] transition-colors">
                Terms and Conditions
              </a>
              <span>•</span>
              <a href="#" className="hover:text-[#54BD95] transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
