"use client";

export default function SupportSection() {
  const features = [
    {
      icon: (
        <svg
          className="w-6 h-6 text-[#54BD95]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      title: "Publishing",
      description:
        "Plan, collaborate, and publishing your contetn that drivees meaningful engagement and growth for your barnd",
    },
    {
      icon: (
        <svg
          className="w-6 h-6 text-[#54BD95]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Analytics",
      description: "Analyze your performance and create goegeous report",
    },
    {
      icon: (
        <svg
          className="w-6 h-6 text-[#54BD95]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      title: "Engagement",
      description: "Quiuckly navigate you anda engage with your adience",
    },
  ];

  const ratings = [
    {
      stars: 5,
      rating: "4.9 / 5 rating",
      company: "databricks",
    },
    {
      stars: 4,
      rating: "4.8 / 5 rating",
      company: "Chainalysis",
    },
  ];

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-12 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
                How we support our pratner all over the world
              </h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                SaaS become a common delivery model for many business
                application, including office software, messaging software,
                payroll processing software, DBMS software, management software
              </p>
            </div>

            {/* Ratings Section */}
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
              {ratings.map((rating, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${
                          i < rating.stars ? "text-yellow-400" : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm font-medium text-gray-700">
                    {rating.rating}
                  </p>
                  <p className="text-sm text-gray-600 capitalize">
                    {rating.company}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6 lg:space-y-8">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-4">
                {/* Icon */}
                <div className="shrink-0 w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm">
                  {feature.icon}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
