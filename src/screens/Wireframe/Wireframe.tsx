import React from "react";
import { AboutUsSection } from "./sections/AboutUsSection";
import { BlogSection } from "./sections/BlogSection";
import { ContactSection } from "./sections/ContactSection";
import { FeatureSection } from "./sections/FeatureSection";
import { GallerySection } from "./sections/GallerySection";
import { HeroSection } from "./sections/HeroSection";
import { PricingSection } from "./sections/PricingSection";
import { ServicesSection } from "./sections/ServicesSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";

export const Wireframe = (): JSX.Element => {
  return (
    <div className="bg-white overflow-hidden w-full min-w-[1440px] relative">
      <HeroSection />
      <PricingSection />
      <GallerySection />
      <ContactSection />
      <FeatureSection />
      <BlogSection />
      <TestimonialsSection />
      <ServicesSection />
      <AboutUsSection />
    </div>
  );
};
