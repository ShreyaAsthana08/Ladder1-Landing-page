"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FaDiscord, FaWhatsapp } from "react-icons/fa";
import Btn from "./ui/btn";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center">
      {/* Background Circles (Left side) */}
      <div className="absolute -left-32 top-20 w-96 h-96 bg-gradient-to-br from-green-600 to-green-900 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute -left-48 top-64 w-80 h-80 bg-gradient-to-br from-green-500 to-green-800 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute -left-64 bottom-0 w-96 h-96 bg-gradient-to-tr from-green-700 to-green-900 rounded-full opacity-25 blur-3xl"></div>

      {/* Animated Eclipse Image (Center background) */}
      <motion.img
        src="/eclipse1.png"
        alt="Eclipse Background"
        className="absolute w-[70vw] max-w-[700px] object-contain"
        style={{ bottom: "20%", left: "70%", transform: "translate(-50%, -50%)" }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.9, 1, 0.9],
          rotate: [0, 5, -2, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
       <motion.img
        src="/eclipse1.png"
        alt="Eclipse Background"
        className="absolute w-[70vw] max-w-[700px] object-contain"
        style={{ top: "0", right: "50%", transform: "translate(-50%, -50%)" }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.9, 1, 0.9],
          rotate: [0, 5, -2, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
        {/* Top button */}
        

      <Badge 
      className="inline-flex items-center justify-center px-[26px] py-[9px] rounded-[15px] border border-solid border-[#58b368] bg-[#B5E8BE] hover:bg-[#D1F3D0]">
        <span className="[font-family:'Sora',Helvetica] font-bold text-[#2d5735] text-sm tracking-[-0.60px] leading-[normal]">
                  Join Our Community
                </span>
              </Badge>
              <br /><br />

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 max-w-3xl">
          Start Building Projects <span className="text-green-400">Today</span>
        </h1>

        {/* Subheading */}
        <p className="text-gray-300 text-lg mb-12 max-w-2xl">
          Join thousands of learners in our vibrant community. Get instant help,
          share knowledge, and grow together.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6">
          {/* Discord Button */}
          <Btn>
            <FaDiscord className="w-20 h-10" />
            
          </Btn>

          {/* WhatsApp Button */}
          <Btn>
            <FaWhatsapp className="w-20 h-10" />
          
          </Btn>
          <br /> <br />
        </div>
      </div>
    </div>
  );
}
