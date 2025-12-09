"use client";

import { useState } from "react";
import Image from "next/image";

export default function TestimonialsSection() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", { email, message });
    setEmail("");
    setMessage("");
  };

  return (
    <section className="w-full" style={{ backgroundColor: "#161C28" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Testimonials */}
          <div className="space-y-6">
            <div
              className="lg:w-[444px] lg:h-[122px] opacity-100"
              style={{
                width: "100%",
                opacity: 1,
              }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                People are Saying About DoWhith
              </h2>
            </div>

            {/* Quote Icon and Testimonial */}
            <div className="space-y-0 flex flex-col items-start">
              <p className="text-white text-base sm:text-lg opacity-90 max-w-xl">
                Everything you need to accept to payment and grow your money of
                manage anywhere on planet
              </p>
              <div className="m-8">
                <Image
                  src="/assets/quotes.png"
                  alt="Quote"
                  width={40}
                  height={40}
                  className="w-10 h-10 sm:w-12 sm:h-12"
                />
              </div>

              <p className="text-white text-lg sm:text-xl leading-relaxed">
                I am very helped by this E-wallet application, my days are very
                easy to use this application and its very helpful in my life,
                even I can pay a short time 😊
              </p>

              <p className="text-white text-sm sm:text-base opacity-80 mt-4">
                _ Aria Zinanrio
              </p>
            </div>

            {/* User Avatars and Play Button */}
            <div className="flex items-center gap-4 pt-4">
              <div className="flex gap-2">
                {[
                  { src: "/assets/pic1.png", alt: "User 1" },
                  { src: "/assets/pic2.png", alt: "User 2" },
                  { src: "/assets/pic3.png", alt: "User 3" },
                  { src: "/assets/pic4.png", alt: "User 4" },
                ].map((pic, index) => (
                  <div
                    key={index}
                    className="rounded-full border-2 border-[#161C28] overflow-hidden relative shrink-0 opacity-100"
                    style={{ width: "66px", height: "66px" }}
                  >
                    <Image
                      src={pic.src}
                      alt={pic.alt}
                      fill
                      className="object-cover"
                      sizes="66px"
                    />
                  </div>
                ))}
              </div>
              <button
                className="rounded-full bg-white/10 border-3 border-white flex items-center justify-center hover:bg-white/20 transition-colors opacity-100"
                style={{ width: "66px", height: "66px" }}
                aria-label="Play video"
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-white ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Column - Get Started Form */}
          <div
            className="bg-[#2A3441] rounded-[20px] p-6 sm:p-8 lg:p-10 lg:w-[612px] lg:h-[588px] flex flex-col justify-center opacity-100"
            style={{
              width: "100%",
              borderRadius: "20px",
              opacity: 1,
            }}
          >
            {/* Get Started Icon */}
            <div className="flex justify-center mb-6">
              <Image
                src="/assets/getStarted.svg"
                alt="Get Started"
                width={80}
                height={80}
                className="w-16 h-16 sm:w-20 sm:h-20"
              />
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8">
              Get Started
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Input */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-white text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full bg-white text-gray-900 placeholder-gray-500 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#54BD95] text-sm sm:text-base"
                  required
                />
              </div>

              {/* Message Input */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-white text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="What are you say ?"
                  rows={4}
                  className="w-full bg-white text-gray-900 placeholder-gray-500 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#54BD95] resize-none text-sm sm:text-base"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#54BD95] text-white px-6 py-3 rounded-lg hover:bg-[#45a882] transition-colors font-medium text-base sm:text-lg"
              >
                Request Demo
              </button>

              <p className="text-white text-right text-sm opacity-80">
                or <span className="font-bold">Start Free Trial</span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
