import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text and CTAs */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
              We&apos;re here to Increase your{" "}
              <span className="relative inline-block">
                Productivity
                <Image
                  src="/assets/Vector 32.svg"
                  alt=""
                  width={300}
                  height={20}
                  className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-3 sm:h-4"
                />
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Let&apos;s make your work more organize and easily using the
              Taskio Dashboard with many of the latest features in managing work
              every day.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button className="w-full sm:w-auto bg-[#54BD95] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-[#45a882] transition-colors font-medium text-base sm:text-lg">
                Try free trial
              </button>
              <button className="flex items-center gap-3 text-gray-800 hover:text-[#54BD95] transition-colors">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#54BD95] hover:text-white transition-colors">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </div>
                <span className="font-medium text-sm sm:text-base">
                  View Demo
                </span>
              </button>
            </div>
          </div>

          {/* Right Side - Illustration Area */}
          <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] flex items-center justify-center">
            {/* Main person image - sized to match the gradient shape area */}
            <div className="relative z-10 w-full h-full max-w-md rounded-3xl overflow-hidden">
              <Image
                src="/assets/Charlie.png"
                alt="Person"
                width={400}
                height={600}
                className="w-full h-full object-cover rounded-3xl"
                priority
              />
            </div>

            {/* Floating UI Elements */}
            {/* Top-left card */}
            <div className="absolute top-4 sm:top-8 left-2 sm:left-4 md:left-8 z-20 bg-white rounded-xl shadow-lg p-3 sm:p-4 w-32 sm:w-40 animate-float">
              <div className="text-[10px] sm:text-xs text-gray-500 mb-1">
                Enter amount
              </div>
              <div className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
                $450.00
              </div>
              <button className="bg-[#54BD95] text-white text-[10px] sm:text-xs px-2 sm:px-3 py-1 rounded-md hover:bg-[#45a882] transition-colors">
                Send
              </button>
            </div>

            {/* Mid-left checkmark */}
            <div className="absolute top-1/3 left-0 sm:left-2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center shadow-lg animate-float-delay overflow-hidden">
              <Image
                src="/assets/purpleCheck.svg"
                alt="Checkmark"
                width={48}
                height={48}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Bottom-left income card */}
            <div className="absolute bottom-12 sm:bottom-16 left-2 sm:left-4 md:left-8 z-20 bg-white rounded-xl shadow-lg p-3 sm:p-4 w-28 sm:w-36 animate-float-delay-2">
              <div className="flex items-center justify-between mb-2">
                <div className="text-[10px] sm:text-xs text-gray-500">
                  Total Income
                </div>
                <div className="w-3 h-3 sm:w-4 sm:h-4 shrink-0 flex items-center">
                  <Image
                    src="/assets/database.svg"
                    alt="Chart"
                    width={16}
                    height={16}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div className="text-base sm:text-lg font-bold text-gray-800">
                $245.00
              </div>
            </div>

            {/* Mid-right credit card */}
            <div className="absolute top-1/2 right-2 sm:right-4 md:right-8 z-20 rounded-xl shadow-lg w-32 sm:w-40 animate-float overflow-hidden">
              <Image
                src="/assets/creditCard.svg"
                alt="Credit Card"
                width={160}
                height={100}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom-right message icon */}
            <div className="absolute bottom-4 sm:bottom-8 right-2 sm:right-4 md:right-8 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center shadow-lg animate-float-delay-2 overflow-hidden">
              <Image
                src="/assets/pinkChat.svg"
                alt="Message"
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Top-right document icon */}
            <div className="absolute top-4 sm:top-8 right-2 sm:right-8 md:right-16 z-20 w-10 h-10 sm:w-12 sm:h-12 bg-yellow-400 rounded-lg flex items-center justify-center shadow-lg animate-float">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
