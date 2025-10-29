"use client";

import React from "react";
import { Mail, Instagram, Linkedin } from "lucide-react";
import { Badge } from "../components/ui/badge";

interface TeamMember {
  name: string;
  title: string;
  image: string;
  union: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Nishant Tiwari",
    title: "Co-Founder",
    image: "/nishant-1.png",
    union: "/union.svg",
  },
  {
    name: "Satvik Thakkar",
    title: "Co-Founder",
    image: "/satvik-1.png",
    union: "/union-1.svg",
  },
  {
    name: "Siddhartha Chandra",
    title: "Co-Founder",
    image: "/siddhartha-1.png",
    union: "/union-2.svg",
  },
];

export const TeamSection: React.FC = (): JSX.Element => {
  return (
    <section className="relative w-full bg-white py-16 px-6 sm:px-12 lg:px-20">
      {/* Section Heading */}
      <div className="flex flex-col gap-6 items-start text-left mb-12">
        <Badge className="border border-solid border-[#58b368] bg-[#B5E8BE] text-green-700 hover:bg-[#A3D9A5] font-bold text-base sm:text-lg md:text-xl tracking-[-0.6px] px-6 py-2 rounded-[15px]">
          Why Trust Us
        </Badge>

        <h2 className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight [font-family:'Sora']">
          <span className="text-black">Meet the Team Behind </span>
          <span className="text-[#58b368]">Ladder1</span>
        </h2>
      </div>

      {/* Team Grid */}
      <div className="grid gap-12 sm:gap-16 md:gap-20 lg:gap-24 xl:gap-28 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center group w-full max-w-[400px]"
          >
            {/* Image & Background Shape */}
            <div className="relative w-full aspect-square flex items-center justify-center">
              <img
                src={member.union}
                alt="Union"
                className="absolute w-[90%] h-[90%] object-contain opacity-90"
              />
              <img
                src={member.image}
                alt={member.name}
                className="relative w-[100%] h-[100%] object-cover rounded-xl  transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Name & Title */}
            <div className="text-center mt-6">
              <h3 className="font-extrabold text-xl sm:text-2xl text-gray-900 [font-family:'Sora']">
                {member.name}
              </h3>
              <p className="font-medium text-sm sm:text-base text-gray-600">
                {member.title}
              </p>
            </div>

            {/* Social Icons */}
            <div
              className="flex gap-4 mt-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                animation: `fadeInUp 0.8s ease-out ${index * 0.2 + 0.5}s both`,
              }}
            >
              <button className="w-10 h-10 rounded-full bg-black flex items-center justify-center hover:bg-[#4ba860] transition-colors duration-300">
                <Mail className="w-5 h-5 text-white" />
              </button>
              <button className="w-10 h-10 rounded-full bg-black flex items-center justify-center hover:bg-[#4ba860] transition-colors duration-300">
                <Instagram className="w-5 h-5 text-white" />
              </button>
              <button className="w-10 h-10 rounded-full bg-black flex items-center justify-center hover:bg-[#4ba860] transition-colors duration-300">
                <Linkedin className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
