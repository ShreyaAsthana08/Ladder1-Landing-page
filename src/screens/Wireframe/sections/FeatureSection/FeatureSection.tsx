import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";

export const FeatureSection = (): JSX.Element => {
  const projectImages = [
    {
      src: "/rectangle-1.png",
      alt: "Project 1",
      className: "w-[493px] h-[634px] object-cover",
    },
    {
      src: "/rectangle-21986.svg",
      alt: "Project 2",
      className: "w-[344px] h-[443px] object-cover",
    },
    {
      src: "/rectangle-2.png",
      alt: "Project 3",
      className: "w-[493px] h-[634px] object-cover",
    },
  ];

  const shadows = [
    {
      className: "top-[502px] left-[52px] rotate-[-9.14deg]",
    },
    {
      className: "top-[518px] left-[462px] rotate-[179.15deg]",
    },
    {
      className: "top-[507px] left-[868px] rotate-[-170.85deg]",
    },
  ];

  return (
    <section className="w-full flex flex-col gap-[17px] py-10">
      <div className="mx-auto w-full max-w-[859px] flex flex-col gap-5 px-4">
        <div className="mx-auto">
          <Badge className="h-auto border border-solid border-[#58b368] bg-[linear-gradient(0deg,rgba(90,203,110,0.45)_0%,rgba(90,203,110,0.45)_100%)] px-[26px] py-[9px] rounded-[15px] hover:bg-[linear-gradient(0deg,rgba(90,203,110,0.45)_0%,rgba(90,203,110,0.45)_100%)]">
            <span className="[font-family:'Sora',Helvetica] font-bold text-[#397c45] text-xl tracking-[-0.60px] leading-[normal]">
              Projects
            </span>
          </Badge>
        </div>

        <h2 className="[font-family:'Sora',Helvetica] font-extrabold text-[64px] text-center tracking-[0] leading-[64px]">
          <span className="text-black leading-[76.8px]">
            Build Real Skills with{" "}
          </span>
          <span className="text-[#58b368] leading-[76.8px]">Real Projects</span>
        </h2>
      </div>

      <div className="mx-auto w-full max-w-[1261px] relative px-4">
        <div className="relative w-full h-[634px]">
          {shadows.map((shadow, index) => (
            <div
              key={`shadow-${index}`}
              className={`absolute w-[327px] h-[46px] bg-black rounded-[163.48px/22.86px] blur-[25px] ${shadow.className}`}
            />
          ))}

          <img
            className="absolute top-0 left-0 w-[493px] h-[634px] object-cover"
            alt="Project 1"
            src="/rectangle-1.png"
          />

          <img
            className="absolute top-0 left-[768px] w-[493px] h-[634px] object-cover"
            alt="Project 3"
            src="/rectangle-2.png"
          />

          <img
            className="absolute top-24 left-[455px] w-[344px] h-[443px] object-cover"
            alt="Project 2"
            src="/rectangle-21986.svg"
          />
        </div>

        <div className="absolute top-[607px] left-1/2 -translate-x-1/2 flex gap-[38px]">
          <Button
            className="w-[61px] h-[60px] bg-black hover:bg-black/90 rounded-[100px] p-0 rotate-180"
            size="icon"
          >
            <span className="[font-family:'Sora',Helvetica] font-bold text-white text-[32px] tracking-[-0.96px] leading-[normal]">
              →
            </span>
          </Button>

          <Button
            className="w-[61px] h-[60px] bg-black hover:bg-black/90 rounded-[100px] p-0"
            size="icon"
          >
            <span className="[font-family:'Sora',Helvetica] font-bold text-white text-[32px] tracking-[-0.96px] leading-[normal]">
              →
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};
