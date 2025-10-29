"use client";

import React from "react";
import { Mail, Instagram, Linkedin } from "lucide-react";
import { Badge } from "../components/ui/badge";

const teamMembers = [
  {
    name: "Nishant Tiwari",
    title: "Co-Founder",
    image: "/nishant-1.png",
    union: "/union.svg",
    containerClasses: "top-[273px] left-9 w-[459px] h-[442px]",
    unionClasses: "top-11 left-[69px] w-[386px] h-[398px]",
    imageClasses: "w-[442px] h-[442px]",
    lineClasses: "top-[75px] left-[336px]",
    nameClasses: "top-[88px] left-[293px] w-[162px]",
    titleClasses: "top-[134px] left-[293px] w-[111px]",
  },
  {
    name: "Satvik Thakkar",
    title: "Co-Founder",
    image: "/satvik-1.png",
    union: "/union-1.svg",
    containerClasses: "top-[257px] left-[445px] w-[471px] h-[458px]",
    unionClasses: "top-[60px] left-[81px] w-[390px] h-[398px]",
    imageClasses: "w-[457px] h-[457px]",
    lineClasses: "top-[-13px] left-[43px]",
    nameClasses: "top-0 left-0 w-[162px]",
    titleClasses: "top-[41px] left-0 w-[111px]",
    textContainerClasses: "top-[98px] left-[295px] w-[166px] h-14",
  },
  {
    name: "Siddhartha Chandra",
    title: "Co-Founder",
    image: "/siddhartha-1.png",
    union: "/union-2.svg",
    containerClasses: "top-[220px] left-[833px] w-[510px] h-[495px]",
    unionClasses: "top-[97px] left-[115px] w-[395px] h-[398px]",
    imageClasses: "w-[495px] h-[495px]",
    lineClasses: "top-2.5 left-[43px]",
    nameClasses: "top-0 left-0 w-[169px]",
    titleClasses: "top-[65px] left-0 w-[103px]",
    textContainerClasses: "top-32 left-[326px] w-[173px] h-[81px]",
  },
];

export const TeamSection = (): JSX.Element => {
  return (
    <div className="relative w-[1441px] h-[809px] bg-white">
      <div className="flex flex-col gap-8 ml-24">
        <Badge className="border border-solid border-[#58b368] bg-[#B5E8BE] text-green-700 hover:bg-[#A3D9A5] font-bold text-xl tracking-[-0.60px] w-fit px-[26px] py-[9px] rounded-[15px] h-auto [font-family:'Sora',Helvetica]">
          Why Trust Us
        </Badge>

        <h2 className="[font-family:'Sora'] font-extrabold text-[64px] leading-[85.1px] tracking-[-0.82px]">
          <span className="text-black">Meet the Team Behind </span>
          <span className="text-[#58b368]">Ladder1</span>
        </h2>
      </div>

      {teamMembers.map((member, index) => (
        <div
          key={index}
          className={`absolute ${member.containerClasses} flex flex-col items-center`}
        >
          <img
            className={`absolute ${member.unionClasses}`}
            alt="Union"
            src={member.union}
          />

          <img
            className={`${member.imageClasses} object-cover absolute top-0 left-0`}
            alt={member.name}
            src={member.image}
          />

          {/* Name and Title */}
          <div
            className={`absolute ${
              member.textContainerClasses || ""
            } flex flex-col`}
          >
            <div
              className={`absolute ${member.lineClasses} w-[3px] h-[89px] bg-black rounded-[12.8px] -rotate-90`}
            />
            <div
              className={`absolute ${member.nameClasses} [font-family:'Sora'] font-extrabold text-white text-xl leading-[20.9px]`}
            >
              {member.name}
            </div>
            <div
              className={`absolute ${member.titleClasses} [font-family:'Sora',Helvetica] font-semibold text-[#d9d9d9] text-sm leading-[14.6px]`}
            >
              {member.title}
            </div>
          </div>

          {/* Social Icons */}
          <div
            className="flex gap-3 absolute bottom-[-60px]"
            style={{
              animation: `fadeInUp 0.8s ease-out ${index * 0.3 + 0.8}s both`,
            }}
          >
            <button className="w-11 h-11 rounded-full bg-black flex items-center justify-center hover:bg-[#4ba860] transition-colors duration-300">
              <Mail className="w-5 h-5 text-white" />
            </button>
            <button className="w-11 h-11 rounded-full bg-black flex items-center justify-center hover:bg-[#4ba860] transition-colors duration-300">
              <Instagram className="w-5 h-5 text-white" />
            </button>
            <button className="w-11 h-11 rounded-full bg-black flex items-center justify-center hover:bg-[#4ba860] transition-colors duration-300">
              <Linkedin className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      ))} 
    </div>
  );
};
