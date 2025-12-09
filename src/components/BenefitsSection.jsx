"use client";

import Image from "next/image";

export default function BenefitsSection() {
  const benefits = [
    "Free Consulting With Experet Saving Money",
    "Online Banking",
    "Investment Report Every Month",
    "Saving Money For The Future",
    "Online Transection",
  ];

  return (
    <section
      className="w-full px-4 sm:px-6 lg:px-8 py-12 lg:py-20"
      style={{
        background:
          "linear-gradient(135deg, rgba(250,244,244,1) 0%, rgba(245,252,249,1) 50%, rgba(255,255,255,1) 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Section - Benefits List */}
          <div className="space-y-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
              What Benifit Will You Get
            </h2>

            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="shrink-0 w-6 h-6 rounded-full bg-[#54BD95] flex items-center justify-center mt-1">
                    <svg
                      className="w-3.5 h-3.5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-base sm:text-lg text-gray-800 pt-0.5 font-normal">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Section - Visual Representation */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[520px] h-[400px] sm:h-[500px] lg:h-[560px]">
              {/* Soft rounded background */}
              <div className="absolute right-0 top-8 w-[85%] h-[90%] rounded-[20px] bg-gradient-to-br from-[#F3FBF8] to-[#E8F5F1]" />

              {/* Laptop (centered inside the rounded bg) */}
              <div className="absolute left-0 top-16 w-[90%] h-[85%] rounded-[20px] overflow-hidden shadow-xl">
                <Image
                  src="/assets/laptop.png"
                  alt="Laptop"
                  width={520}
                  height={480}
                  className="object-cover w-full h-full rounded-[20px]"
                />
              </div>

              {/* Amanda card - top-left over laptop, 50% outside */}
              <div className="absolute top-[100px] bg-white rounded-xl shadow-xl p-3 z-20 flex items-center gap-3 w-[250px]" style={{ left: '-125px' }}>
                <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 bg-gray-200">
                  <Image
                    src="/assets/amandaYoung.png"
                    alt="Amanda Young"
                    width={40}
                    height={40}
                    className="rounded-full object-cover w-full h-full"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm text-gray-900 truncate">Amanda Young</p>
                  <p className="text-xs text-gray-500 truncate">Expert Saving Money</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#54BD95] flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                    <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                  </svg>
                </div>
              </div>

              {/* Total Income - top-right */}
              <div className="absolute top-48 right-[-30px] bg-white rounded-xl shadow-xl p-3 z-20 flex items-center gap-3 min-w-[120px]">
                <div className="flex flex-col flex-1">
                  <span className="text-xs text-gray-500 font-medium">Total Income</span>
                  <p className="text-base font-bold text-gray-900">$245.00</p>
                </div>
                <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-[#54BD95]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
              </div>

              {/* Small green icon floating (middle-left) */}
              <div className="absolute left-2 top-[45%] bg-[#54BD95] rounded-lg shadow-xl p-2.5 z-20 w-12 h-12 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                  <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
                </svg>
              </div>

              {/* Money Transfer chip - bottom left, 50% outside */}
              <div className="absolute bottom-2 bg-white rounded-xl shadow-xl px-4 py-3 z-20 flex items-center gap-3 w-[240px]" style={{ left: '-120px' }}>
                <div className="w-6 h-6 rounded-full bg-[#54BD95] flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-900 whitespace-nowrap">Money Transfer Succesfull</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
