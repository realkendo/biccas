"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import SupportSection from "@/components/SupportSection";
import FeaturesSection from "@/components/FeaturesSection";
import BenefitsSection from "@/components/BenefitsSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-b from-[#E6F7F2] to-white">
      <Header />
      <Hero />
      <Partners />
      <SupportSection />
      <FeaturesSection />
      <BenefitsSection />
      <PricingSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}
