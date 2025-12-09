import Image from "next/image";

export default function Partners() {
  const partners = [
    { name: "Unsplash", logo: "/assets/unsplash.svg" },
    { name: "Notion", logo: "/assets/notion.svg" },
    { name: "INTERCOM", logo: "/assets/intercom.svg" },
    { name: "descript", logo: "/assets/descript.svg" },
    { name: "grammarly", logo: "/assets/grammarly.svg" },
  ];

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6 sm:mb-8">
          <p className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800">
            More than 25,000 teams use Collabs
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 lg:gap-12">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={120}
                height={40}
                className="h-8 sm:h-10 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
