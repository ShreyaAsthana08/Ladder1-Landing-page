"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

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
        {/* <div className="mb-16">
          <Button
            variant="outline"
            className="rounded-full bg-white text-black border-white hover:bg-gray-100 hover:text-black px-6 py-2 font-semibold"
          >
            Join Our Community
          </Button>
        </div> */}

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
          <Button className="rounded-full bg-white text-black hover:bg-gray-100 px-8 py-3 font-semibold flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.211.375-.444.864-.607 1.25a18.27 18.27 0 0 0-5.487 0c-.163-.386-.395-.875-.607-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.975 14.975 0 0 0 1.293-2.1a.07.07 0 0 0-.038-.098a13.11 13.11 0 0 1-1.872-.892a.072.072 0 0 1-.007-.12a10.15 10.15 0 0 0 .372-.294a.074.074 0 0 1 .076-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .076.01c.12.098.246.198.373.294a.072.072 0 0 1-.006.12a12.977 12.977 0 0 1-1.873.892a.07.07 0 0 0-.038.098a14.998 14.998 0 0 0 1.293 2.1a.078.078 0 0 0 .084.028a19.963 19.963 0 0 0 6.002-3.03a.079.079 0 0 0 .033-.057c.5-4.761-.838-8.898-3.549-12.571a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-.965-2.157-2.156c0-1.193.964-2.157 2.157-2.157c1.193 0 2.156.964 2.157 2.157c0 1.19-.964 2.156-2.157 2.156zm7.975 0c-1.183 0-2.157-.965-2.157-2.156c0-1.193.964-2.157 2.157-2.157c1.193 0 2.156.964 2.157 2.157c0 1.19-.964 2.156-2.157 2.156z" />
            </svg>
            Join Discord
          </Button>

          {/* WhatsApp Button */}
          <Button
            variant="outline"
            className="rounded-full border-white text-white hover:bg-white/10 px-8 py-3 font-semibold flex items-center gap-2 bg-transparent"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.782 1.14l-.46.264l-4.771-.79l.992 3.63l-.364.577a9.86 9.86 0 .145 5.692 9.806 9.806 0 0 0 5.108 1.81c5.094 0 9.278-4.193 9.278-9.332 0-2.224-.795-4.312-2.231-5.944A9.834 9.834 0 0 0 12.051 6.98z" />
            </svg>
            Join WhatsApp
          </Button>
          <br /> <br />
        </div>
      </div>
    </div>
  );
}
