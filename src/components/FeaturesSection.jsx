"use client";

import Image from "next/image";

export default function FeaturesSection() {
  const features = [
    {
      title: "Collboration Teams",
      description: "Here you can handle projects together with team virtually",
      visual: (
        <div className="flex items-center justify-center">
          <Image
            src="/assets/collaborationTeams.svg"
            alt="Collaboration Teams"
            width={364}
            height={430}
            className="rounded-[20px]"
            style={{ width: '364px', height: '430px' }}
          />
        </div>
      ),
    },
    {
      title: "Cloud Storage",
      description:
        "No nedd to worry about storage because we provide storage up to 2 TB",
      visual: (
        <div className="flex items-center justify-center">
          <Image
            src="/assets/cloudStorage.svg"
            alt="Cloud Storage"
            width={364}
            height={430}
            className="rounded-[20px]"
            style={{ width: '364px', height: '430px' }}
          />
        </div>
      ),
    },
    {
      title: "Daily Analytics",
      description:
        "We always provide useful informatin to make it easier for you every day",
      visual: (
        <div className="flex items-center justify-center">
          <Image
            src="/assets/dailyAnalytics.svg"
            alt="Daily Analytics"
            width={364}
            height={430}
            className="rounded-[20px]"
            style={{ width: '364px', height: '430px' }}
          />
        </div>
      ),
    },
  ];

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-12 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-12 lg:mb-16">
          <div className="lg:flex-1">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Our Features you cab get
            </h2>
          </div>
          <div className="lg:flex-1 flex flex-col sm:flex-row sm:items-center gap-4">
            <p className="text-sm sm:text-base text-gray-500 flex-1">
              We offer a variety of interesting features that you can help increase your productivity at work and manage your project easly
            </p>
            <button className="bg-[#54BD95] text-white px-6 py-3 rounded-full hover:bg-[#45a882] transition-colors font-medium text-sm sm:text-base whitespace-nowrap shadow-sm">
              Get Started
            </button>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow relative"
            >
              {/* Visual */}
              <div className="mb-6 min-h-[200px] flex items-center justify-center">
                {feature.visual}
              </div>

              {/* Title */}
              <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}







