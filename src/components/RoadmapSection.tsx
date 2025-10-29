"use client";
import React, { useState } from "react";
import { Badge } from "./ui/badge";

interface RoadmapCardProps {
  src: string;
  alt: string;
  label: string;
  className: string;
}

const RoadmapCard: React.FC<RoadmapCardProps> = ({
  src,
  alt,
  label,
  className,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`absolute group cursor-pointer transition-transform duration-300 hover:scale-110 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-contain drop-shadow-2xl"
      />
      {isHovered && (
        <div className="absolute -top-0 ml-28 z-50 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <Badge className="border border-solid border-[#58b368] bg-white text-[#58b368] font-semibold text-sm px-4 py-2 rounded-lg shadow-xl whitespace-nowrap [font-family:'Basier_Circle-Regular',Helvetica]">
            {label}
          </Badge>
        </div>
      )}
    </div>
  );
};

const RoadmapSection: React.FC = () => {
  return (
    <section className="relative w-full bg-white overflow-hidden py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-8">
            <Badge className="border border-solid border-[#58b368] bg-[#B5E8BE] text-green-700 hover:bg-[#A3D9A5] font-bold text-xl tracking-[-0.60px] w-fit px-[26px] py-[9px] rounded-[15px] h-auto [font-family:'Sora',Helvetica]">
              AI Roadmaps
            </Badge>

            <h2 className="[font-family:'Sora'] font-extrabold text-[64px] leading-[85.1px] tracking-[-0.82px]">
              <span className="text-black">Your AI-Powered Path to </span>
              <span className="text-[#58b368]">Mastery</span>
            </h2>

            <p className="[font-family:'Basier_Circle-Regular',Helvetica] font-normal text-black text-xl leading-[30px]">
              Stop guessing what to learn next. Ladder1&apos;s intelligent AI
              creates personalized learning roadmaps tailored to your skill
              level, helping you move confidently from beginner to expert — one
              guided step at a time.
            </p>
          </div>

          {/* Right Content */}
          <div className="relative h-[700px] flex items-center justify-center">
            {/* Desktop View */}
            <div className="hidden lg:block relative h-full w-full">
              {/* Background Path */}
              <img
                className="absolute top-0 left-1/2 -translate-x-1/2 w-auto h-full max-h-[700px] opacity-70"
                alt="Roadmap Path"
                src="/Vector 9.png"
              />

              {/* Roadmap Cards */}
              <RoadmapCard
                src="/Group 143726185.png"
                alt="AI Roadmap"
                label="AI Roadmap"
                className="top-[0px] left-[10px] w-[400px] h-[400px]"
              />
              <RoadmapCard
                src="/Group 143726186.png"
                alt="Personalized Learning"
                label="Personalized Learning"
                className="top-[100px] right-[20px] w-[400px] h-[400px]"
              />
              <RoadmapCard
                src="/Group 143726187.png"
                alt="Real Projects"
                label="Real Projects"
                className="top-[320px] left-[40px] w-[400px] h-[400px]"
              />
              <RoadmapCard
                src="/Group 143726188.png"
                alt="Mentorship"
                label="Mentorship"
                className="bottom-[0px] right-[40px] w-[300px] h-[300px]"
              />
            </div>

            {/* Mobile View */}
            <div className="block lg:hidden">
              <img
                src="/Group 143726204.png"
                alt="Mobile Roadmap"
                className="w-full max-w-[400px] mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
