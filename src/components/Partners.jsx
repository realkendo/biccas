export default function Partners() {
  const partners = ["Unsplash", "Notion", "INTERCOM", "descript", "grammarly"];

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
              className="text-gray-400 text-sm sm:text-base lg:text-lg font-medium grayscale hover:grayscale-0 transition-all"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
