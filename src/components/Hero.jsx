import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text and CTAs */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* Headline */}
            <h1 
              className="font-bold text-gray-800"
              style={{
                fontFamily: 'Inter',
                fontWeight: 700,
                fontSize: '80px',
                lineHeight: '90px',
                letterSpacing: '0%',
              }}
            >
              <div>We&apos;re here to Increase your</div>
              <div>Productivity</div>
            </h1>

            {/* Vector - centered at all sizes */}
            <div className="flex justify-center xl:justify-start">
              <Image
                src="/assets/Vector 32.svg"
                alt=""
                width={360}
                height={30}
                className="mt-1"
                style={{ width: '460px', height: 'auto' }}
              />
            </div>

            {/* Description - centered at all sizes */}
            <div className="flex justify-center xl:justify-start">
              <div 
                className="text-gray-600"
                style={{
                  width: '461px',
                  height: '90px',
                  opacity: 1,
                  fontFamily: 'Inter',
                  fontWeight: 500,
                  fontSize: '18px',
                  lineHeight: '30px',
                  letterSpacing: '0%',
                }}
              >
               <div> Let&apos;s make your work more organize and easily using</div>
                <div>the Taskio Dashboard with many of the latest </div>
                 <div>features in managing work every day.</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button className="w-full sm:w-auto bg-[#54BD95] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-[#45a882] transition-colors font-medium text-base sm:text-lg">
                Try free trial
              </button>
              <button className="flex items-center  text-gray-800">
                <div className="w-12 h-12 sm:w-12 sm:h-12 rounded-full  flex items-center justify-center overflow-hidden">
                  <Image
                    src="/assets/Play.png"
                    alt="Play"
                    width={20}
                    height={20}
                    className="w-12 h-12 sm:w-5 sm:h-5 ml-1"
                  />
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
            <div
              className="absolute top-4 sm:top-8 left-[-32px]  sm:left-4 md:left-8 z-20 bg-white shadow-lg animate-float"
              style={{
                width: "262px",
                height: "78px",
                borderRadius: "10px",
                left: "-84px",
              }}
            >
              <div className="flex items-center h-full px-4">
                <div className="flex-1">
                  <div className="text-xs text-gray-500 mb-1">Enter amount</div>
                  <div className="text-xl font-bold text-gray-800">$450.00</div>
                </div>
                <button className="bg-[#54BD95] text-white text-sm px-4 py-2 rounded-full hover:bg-[#45a882] transition-colors ml-3">
                  Send
                </button>
              </div>
            </div>

            {/* Mid-left checkmark */}
            <div 
              className="absolute top-1/3 left-0 sm:left-2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center shadow-lg animate-float-rotate-left"
            >
              <Image
                src="/assets/purpleCheck.svg"
                alt="Checkmark"
                width={48}
                height={48}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Bottom-left income card */}
            <div 
              className="absolute bottom-12 sm:bottom-16 left-2 sm:left-4 md:left-8 z-20 bg-white rounded-xl shadow-lg animate-float-delay-2"
              style={{
                width: '138px',
                height: '70px',
                padding: '12px',
                opacity: 1,
              }}
            >
              <div className="text-[10px] text-gray-500 mb-2">
                Total Income
              </div>
              <div className="flex items-end justify-between">
                <div className="text-lg font-bold text-gray-800">
                  $245.00
                </div>
                <div className="flex items-end gap-1 h-5 mb-2">
                  <div className="w-1.5 bg-[#54BD95] rounded-t-sm" style={{ height: '60%' }}></div>
                  <div className="w-1.5 bg-[#54BD95] rounded-t-sm" style={{ height: '100%' }}></div>
                  <div className="w-1.5 bg-[#54BD95] rounded-t-sm" style={{ height: '45%' }}></div>
                </div>
              </div>
            </div>

            {/* Mid-right credit card */}
            <div className="absolute top-1/2 right-2 sm:right-4 md:right-8 z-20 w-32 sm:w-40 animate-float">
              <Image
                src="/assets/creditCard.svg"
                alt="Credit Card"
                width={160}
                height={100}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom-right message icon */}
            <div className="absolute bottom-1 sm:bottom-4 right-12 sm:right-12 md:right-16 z-20 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center animate-float-delay-2">
              <Image
                src="/assets/pinkChat.svg"
                alt="Message"
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Top-right document icon */}
            <div 
              className="absolute top-4 sm:top-8 right-2 sm:right-8 md:right-16 z-20 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center animate-float"
              style={{ transform: 'rotate(15deg)' }}
            >
              <Image
                src="/assets/database (2).svg"
                alt="Database"
                width={48}
                height={48}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
