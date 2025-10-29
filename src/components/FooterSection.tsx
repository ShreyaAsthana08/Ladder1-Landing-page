"use client";
import React from "react";
import { Separator } from "./ui/separator";
import { Instagram, Mail, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

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
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-[450px] text-white font-medium text-base sm:text-lg leading-relaxed tracking-[0.2px]"
            >
              Ladder1 is an AI-driven learning platform that turns coding
              education into real-world skill development. We help learners
              build, test, and showcase projects — with guidance, feedback, and
              rewards.
            </motion.p>

            {/* Social Icons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex items-center gap-5 mt-2"
            >
              <motion.a
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.instagram.com/ladder1.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 hover:bg-[#58b368] transition-colors"
              >
                <Instagram className="w-6 h-6 text-white" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 hover:bg-[#58b368] transition-colors"
              >
                <MessageCircle className="w-6 h-6 text-white" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:satvik@ladder1.ai"
                className="p-3 rounded-full bg-white/10 hover:bg-[#58b368] transition-colors"
              >
                <Mail className="w-6 h-6 text-white" />
              </motion.a>
            </motion.div>
          </div>

          {/* Features links */}
          <motion.nav 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col gap-3 sm:gap-[15px]"
          >
            <h3 className="text-white font-bold text-lg sm:text-xl mb-2">Features</h3>
            {featuresLinks.map((link, index) => (
              <motion.a
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                whileHover={{ x: 5, color: "#58b368" }}
                href="#"
                className="text-white/90 hover:text-green-500 transition-colors text-sm sm:text-base font-medium leading-7"
              >
                {link}
              </motion.a>
            ))}
          </motion.nav>

          {/* Legal links */}
          <motion.nav 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col gap-3 sm:gap-[15px]"
          >
            <h3 className="text-white font-bold text-lg sm:text-xl mb-2">Legal</h3>
            {legalLinks.map((link, index) => (
              <motion.a
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ x: 5, color: "#58b368" }}
                href="#"
                className="text-white/90 hover:text-green-500 transition-colors text-sm sm:text-base font-medium leading-7"
              >
                {link}
              </motion.a>
            ))}
          </motion.nav>

          {/* Contact info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col gap-4 sm:gap-[15px]"
          >
            <h3 className="text-white font-bold text-2xl sm:text-4xl leading-tight">
              Contact Us
            </h3>
            <div className="flex flex-col text-white font-medium text-base sm:text-xl">
              <span className="text-[#ffffff99] mb-1">Email</span>
              <motion.a
                whileHover={{ color: "#58b368" }}
                href="mailto:satvik@ladder1.ai"
                className="text-white hover:opacity-80 transition-opacity break-all"
              >
                satvik@ladder1.ai
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Decorative Image with Glowing Reveal Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ 
            opacity: 1, 
            y: 0, 
            filter: "blur(0px)",
          }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ 
            duration: 1.2, 
            ease: [0.22, 1, 0.36, 1] 
          }}
          className="relative mx-auto max-w-[1119px] mb-12 sm:mb-[100px]"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: [0, 1, 0.7, 1, 0.7] }}
            viewport={{ once: true }}
            transition={{ 
              duration: 3,
              delay: 0.3,
              ease: "easeOut",
              repeat: Infinity,
              repeatDelay: 2
            }}
            className="absolute -inset-8 bg-gradient-to-r from-[#58b368]/30 via-[#58b368]/50 to-[#58b368]/30 rounded-lg blur-3xl"
          />
          
          <motion.img
            initial={{ scale: 0.95, opacity: 0.5 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 1.2, 
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1] 
            }}
            className="relative w-full h-auto"
            alt="Mask group"
            src="/Mask group2.png"
            style={{
              filter: "drop-shadow(0 0 30px rgba(88, 179, 104, 0.4))",
            }}
          />
        </motion.div>

        {/* Footer bottom */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative w-full"
        >
          <Separator className="mb-6 bg-[#999999]" />
          <div className="flex flex-col lg:flex-row justify-between items-center gap-3 text-center lg:text-left">
            <p className="text-[#999999] text-sm sm:text-base font-medium">
              Built with passion. Trusted by learners worldwide.
            </p>
            <p className="text-[#999999] text-xs sm:text-[15px] font-medium">
              © 2025 Ladder1.ai — All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterSection;
