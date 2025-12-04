import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E6F7F2] to-white">
      <Header />
      <Hero />
      <Partners />
    </div>
  );
}
