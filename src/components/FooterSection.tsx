"use client";

import React from "react";
import { Separator } from "../components/ui/separator";
import { Instagram, Mail, MessageCircle } from "lucide-react"; // Lucide icons

const featuresLinks = [
  "Features",
  "AI Roadmaps",
  "AI Analyzer",
  "AI Quiz",
  "Maangic Mountains",
  "Certifications",
  "Battlepass Rewards",
];

const legalLinks = [
  "Legal",
  "Privacy Policy",
  "Terms and Conditions",
  "Refund Policy",
  "Contact Us",
];

const FooterSection: React.FC = () => {
  return (
    <footer className="relative w-full bg-black overflow-hidden py-20 px-6 sm:px-10 lg:py-[152px] lg:px-[93px]">
      
      <div className="absolute top-[-45px] left-[-150px] w-[400px] sm:w-[600px] lg:w-[722px] h-[150px] sm:h-[200px] bg-[#58b368] rounded-full blur-[150px] opacity-50" />
      <div className="absolute bottom-[-100px] right-[-150px] w-[280px] sm:w-[340px] h-[350px] sm:h-[440px] bg-[#58b368] rounded-full blur-[200px] opacity-70" />

      <div className="relative w-full max-w-[1253px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_auto_auto_auto] gap-12 lg:gap-8 mb-20 lg:mb-[150px]">
          
          <div className="flex flex-col gap-6 sm:gap-8 items-start">
            <img
              className="w-[180px] sm:w-[218px] h-auto object-contain"
              alt="Ladder1 Light"
              src="/ladder1-light-1-1.png"
            />
            <p className="max-w-[450px] text-white font-medium text-base sm:text-lg leading-relaxed tracking-[0.2px]">
              Ladder1 is an AI-driven learning platform that turns coding
              education into real-world skill development. We help learners
              build, test, and showcase projects — with guidance, feedback, and
              rewards.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-5 mt-2">
              <a
                href="https://www.instagram.com/ladder1.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 hover:bg-[#58b368] transition-colors"
              >
                <Instagram className="w-6 h-6 text-white" />
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 hover:bg-[#58b368] transition-colors"
              >
                <MessageCircle className="w-6 h-6 text-white" />
              </a>
              <a
                href="mailto:satvik@ladder1.ai"
                className="p-3 rounded-full bg-white/10 hover:bg-[#58b368] transition-colors"
              >
                <Mail className="w-6 h-6 text-white" />
              </a>
            </div>
          </div>

          {/* Features links */}
          <nav className="flex flex-col gap-3 sm:gap-[15px]">
            <h3 className="text-white font-bold text-lg sm:text-xl mb-2">Features</h3>
            {featuresLinks.map((link, index) => (
              <a
                key={index}
                href="#"
                className="text-white/90 hover:text-green-500 transition-colors text-sm sm:text-base font-medium leading-7"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Legal links */}
          <nav className="flex flex-col gap-3 sm:gap-[15px]">
            <h3 className="text-white font-bold text-lg sm:text-xl mb-2">Legal</h3>
            {legalLinks.map((link, index) => (
              <a
                key={index}
                href="#"
                className="text-white/90 hover:text-green-500 transition-colors text-sm sm:text-base font-medium leading-7"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Contact info */}
          <div className="flex flex-col gap-4 sm:gap-[15px]">
            <h3 className="text-white font-bold text-2xl sm:text-4xl leading-tight">
              Contact Us
            </h3>
            <div className="flex flex-col text-white font-medium text-base sm:text-xl">
              <span className="text-[#ffffff99] mb-1">Email</span>
              <a
                href="mailto:satvik@ladder1.ai"
                className="text-white hover:opacity-80 transition-opacity break-all"
              >
                satvik@ladder1.ai
              </a>
            </div>
          </div>
        </div>

        {/* Decorative Image */}
        <img
          className="relative w-full h-auto max-w-[1119px] mx-auto mb-12 sm:mb-[100px]"
          alt="Mask group"
          src="/mask-group.png"
        />

        {/* Footer bottom */}
        <div className="relative w-full">
          <Separator className="mb-6 bg-[#999999]" />
          <div className="flex flex-col lg:flex-row justify-between items-center gap-3 text-center lg:text-left">
            <p className="text-[#999999] text-sm sm:text-base font-medium">
              Built with passion. Trusted by learners worldwide.
            </p>
            <p className="text-[#999999] text-xs sm:text-[15px] font-medium">
              © 2025 Ladder1.ai — All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
