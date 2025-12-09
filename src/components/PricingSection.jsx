"use client";

import { useState } from "react";

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(true);

  const plans = [
    {
      name: "Free",
      description: "Have a go and test your superpowers",
      monthlyPrice: 0,
      yearlyPrice: 0,
      features: [
        "2 Users",
        "2 Files",
        "Public Share & Comments",
        "Chat Support",
        "New income apps",
      ],
      cta: "Signup for free",
      ctaStyle: "border border-gray-300 text-gray-800 hover:bg-gray-50",
      highlighted: false,
    },
    {
      name: "Pro",
      description: "Experiment the power of infinite possibilities",
      monthlyPrice: 8,
      yearlyPrice: 8,
      yearlySavings: "Save $50 a year",
      features: [
        "4 Users",
        "All apps",
        "Unlimited editable exports",
        "Folders and collaboration",
        "All incoming apps",
      ],
      cta: "Go to pro",
      ctaStyle: "bg-[#45a882] text-white hover:bg-[#3d9773]",
      highlighted: true,
    },
    {
      name: "Business",
      description: "Unveil new superpowers and join the Design League",
      monthlyPrice: 16,
      yearlyPrice: 16,
      features: [
        "All the features of pro plan",
        "Account success Manager",
        "Single Sign-On (SSO)",
        "Co-conception pogram",
        "Collaboration-Soon",
      ],
      cta: "Goto Business",
      ctaStyle: "border border-gray-300 text-primary hover:bg-gray-50",
      highlighted: false,
    },
  ];

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-12 lg:py-20 bg-linear-to-b from-white to-[#E6F7F2]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            <div className="m-4"> Choose Plan </div> That&apos;s Right For You
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Choose plan that works best for you, feel free to contact us.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-8 lg:mb-12">
          <div className="inline-flex bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                !isYearly
                  ? "bg-white text-gray-800 shadow-sm"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              Bil Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                isYearly
                  ? "bg-[#54BD95] text-white shadow-sm"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              Bil Yearly
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) =>
            plan.highlighted ? (
              <div
                key={plan.name}
                className="mx-4 rounded-[20px] lg:w-[374px] bg-[#54BD95] lg:h-[684px] shadow-lg overflow-hidden flex flex-col"
              >
                {/* Top gradient header */}
                <div className="bg-linear-to-b from-[#6EE2B0] to-[#54BD95] p-8 text-white text-center">
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <p className="text-sm mt-2 text-white/90">
                    {plan.description}
                  </p>

                  <div className="mt-6 flex flex-col items-center">
                    <div className="text-4xl lg:text-5xl font-bold">
                      ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </div>
                    {plan.yearlySavings && isYearly && (
                      <div className="mt-3 text-sm bg-white/20 text-white px-3 py-1 rounded-full">
                        {plan.yearlySavings}
                      </div>
                    )}
                  </div>
                </div>

                {/* White features card */}
                <div className="bg-white m-6 rounded-lg p-6 flex-1 flex flex-col justify-between">
                  <ul className="space-y-4">
                    {plan.features.map((feature, fi) => (
                      <li key={fi} className="flex items-start gap-3">
                        <svg
                          className="w-5 h-5 shrink-0 mt-1 text-[#54BD95]"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div>
                    <div className="flex justify-center">
                      <button
                        className="mt-4 sm:mt-5 lg:mt-6 bg-[#54BD95] text-white py-2 sm:py-2.5 lg:py-3 px-4 sm:px-5 lg:px-6 rounded-full font-semibold w-full sm:w-auto lg:w-[260px] lg:h-[64px] flex items-center justify-center shadow-lg"
                        style={{
                          borderRadius: "20px",
                          opacity: 1,
                          fontFamily: "Inter",
                          fontWeight: 600,
                          fontSize: "clamp(14px, 2.5vw, 18px)",
                          lineHeight: "1.5",
                        }}
                      >
                        {plan.cta}
                      </button>
                    </div>
                    <p className="text-center text-xs sm:text-sm lg:text-sm text-gray-400 mt-2 sm:mt-2.5 lg:mt-3">
                      All prices billed yearly
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div
                key={plan.name}
                className="mx-4 rounded-[20px] lg:w-[374px] lg:h-[644px] bg-white shadow-lg overflow-hidden flex flex-col justify-center items-center"
              >
                {/* Top header */}
                <div className="p-8 text-center w-full">
                  <h3 className="text-2xl font-bold text-gray-800">
                    {plan.name}
                  </h3>
                  <p className="text-sm mt-2 text-gray-500">
                    {plan.description}
                  </p>

                  <div className="mt-6 flex flex-col items-center">
                    <div className="text-4xl font-bold text-gray-800">
                      ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </div>
                  </div>
                </div>

                {/* Features panel - white padded container (match Pro) */}
                <div className="bg-[#F9FAFB] m-6 rounded-lg p-6 flex-1 flex flex-col justify-between ">
                  <ul className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-[#54BD95] flex items-center justify-center shrink-0">
                          <svg
                            className="w-3 h-3 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 00-1.414-1.414L8 11.172 4.707 7.879A1 1 0 003.293 9.293l4 4a1 1 0 001.414 0l8-8z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex justify-center">
                    <button
                      className="mt-4 sm:mt-5 lg:mt-6 bg-white text-[#54BD95] py-2 sm:py-2.5 lg:py-3 px-4 sm:px-5 lg:px-6 rounded-full font-semibold w-full sm:w-auto lg:w-[260px] lg:h-[64px] flex items-center justify-center shadow-lg"
                      style={{
                        borderRadius: "20px",
                        opacity: 1,
                        fontFamily: "Inter",
                        fontWeight: 600,
                        fontSize: "clamp(14px, 2.5vw, 18px)",
                        lineHeight: "1.5",
                      }}
                    >
                      {plan.cta}
                    </button>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
