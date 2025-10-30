"use client";
import React from "react";
import { motion } from "framer-motion";
import { Badge } from "../components/ui/badge";

const steps = [
  {
    number: "01",
    title: "Sign Up",
    description: "Start Your Learning Journey",
  },
  {
    number: "02",
    title: "Strategy",
    description: "Choose Your Career Path",
  },
  {
    number: "03",
    title: "Learn & Practice",
    description: "Build Through Real Projects",
  },
  {
    number: "04",
    title: "Track & Achieve",
    description: "Measure, Improve & Earn",
  },
];

export const StepsSection = (): JSX.Element => {
  return (
    <section className="relative w-full min-h-[900px] bg-black flex flex-col items-center overflow-hidden py-20 sm:py-28 md:py-36">
      {/* Animated Background */}
<div className="absolute top-0 left-0 w-full h-full overflow-hidden">
  <motion.img
    className="absolute top-0 left-0 w-full h-full object-cover object-center opacity-70 md:opacity-80 scale-110 sm:scale-100"
    alt="Steps Background"
    src="/steps bg.png"
    animate={{
      y: [0, -30, 20, -25, 0],
      x: [0, 10, -10, 15, 0],
      scale: [1, 1.05, 1.02, 1.07, 1],
      rotate: [0, 1.5, -1, 2, 0],
    }}
    transition={{
      duration: 22,
      ease: "easeInOut",
      repeat: Infinity,
    }}
  />
</div>


      {/* Heading */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <div className="flex flex-col gap-8">
                    <Badge className="border border-solid border-[#58b368] bg-[#B5E8BE] text-green-700 hover:bg-[#A3D9A5] font-bold text-lg tracking-[-0.60px] w-fit px-[26px] py-[9px] rounded-[15px] h-auto [font-family:'Sora',Helvetica]">
                      How It Works
                    </Badge> </div> <br /><br />

        <h1 className="max-w-3xl font-sora font-bold text-3xl sm:text-4xl md:text-5xl text-white leading-snug">
          From Beginner to Builder —{" "}
          <span className="text-[#65c476]"> How Ladder1 Works</span>
        </h1>
      </div>

      {/* Steps */}
      <div className="relative z-10 w-full max-w-6xl mt-20 px-6">
        {/* Connecting Line */}
        <div className="hidden md:block absolute top-[26px] left-0 w-full h-0.5 bg-[#58b368]/70"></div>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 justify-items-center">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center gap-3"
            >
              <div className="w-14 h-14 flex items-center justify-center bg-[#40934f] rounded-full shadow-lg shadow-[#40934f]/30">
                <span className="font-instrument font-semibold text-white text-lg">
                  {step.number}
                </span>
              </div>

              <h3 className="font-instrument font-bold text-white text-xl sm:text-2xl">
                {step.title}
              </h3>

              <p className="max-w-xs font-basier text-[#fef3f3] text-sm sm:text-base leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
