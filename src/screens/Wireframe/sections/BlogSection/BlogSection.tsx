import React from "react";

const teamMembers = [
  {
    name: "Nishant Tiwari",
    title: "Co-Founder",
    image: "/nishant-1.png",
    unionBg: "/union-1.svg",
    logo: "/group-143726066.png",
    nameTop: "top-[88px]",
    nameLeft: "left-[293px]",
    titleTop: "top-[134px]",
    titleLeft: "left-[293px]",
    lineTop: "top-[75px]",
    lineLeft: "left-[336px]",
    unionTop: "top-11",
    unionLeft: "left-[69px]",
    unionWidth: "w-[386px]",
    containerWidth: "w-[459px]",
    containerHeight: "h-[442px]",
    imageWidth: "w-[442px]",
    imageHeight: "h-[442px]",
    logoLeft: "left-[170px]",
  },
  {
    name: "Satvik Thakkar",
    title: "Co-Founder",
    image: "/satvik-1.png",
    unionBg: "/union.svg",
    logo: "/group-143726182.png",
    nameTop: "top-0",
    nameLeft: "left-0",
    titleTop: "top-[41px]",
    titleLeft: "left-0",
    lineTop: "top-[-13px]",
    lineLeft: "left-[43px]",
    unionTop: "top-[60px]",
    unionLeft: "left-[81px]",
    unionWidth: "w-[390px]",
    containerWidth: "w-[471px]",
    containerHeight: "h-[458px]",
    imageWidth: "w-[457px]",
    imageHeight: "h-[457px]",
    logoLeft: "left-[630px]",
  },
  {
    name: "Siddhartha Chandra",
    title: "Co-Founder",
    image: "/siddhartha-1.png",
    unionBg: "/union-2.svg",
    logo: "/group-143726183.png",
    nameTop: "top-0",
    nameLeft: "left-0",
    titleTop: "top-[65px]",
    titleLeft: "left-0",
    lineTop: "top-2.5",
    lineLeft: "left-[43px]",
    unionTop: "top-[97px]",
    unionLeft: "left-[115px]",
    unionWidth: "w-[395px]",
    containerWidth: "w-[510px]",
    containerHeight: "h-[495px]",
    imageWidth: "w-[495px]",
    imageHeight: "h-[495px]",
    logoLeft: "left-[1069px]",
  },
];

export const BlogSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-white py-12 px-9">
      <div className="flex justify-start mb-12">
        <div className="w-[180px] h-[43px] ml-[33px] relative bg-[#59cb6d73] border-[none] inline-flex items-center justify-center px-[26px] py-[9px] rounded-[15px] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[15px] before:[background:linear-gradient(180deg,rgba(59,124,70,1)_27%,rgba(107,226,128,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Sora',Helvetica] font-bold text-[#397c45] text-xl tracking-[-0.60px] leading-[normal]">
            Why Trust Us
          </div>
        </div>
      </div>

      <div className="flex justify-start gap-0 mb-8">
        <div className="relative w-[459px] h-[442px]">
          <img
            className="top-11 left-[69px] w-[386px] absolute h-[398px]"
            alt="Union"
            src="/union-1.svg"
          />
          <img
            className="absolute top-0 left-0 w-[442px] h-[442px] object-cover"
            alt="Nishant"
            src="/nishant-1.png"
          />
          <div className="absolute top-[75px] left-[336px] w-[3px] h-[89px] bg-black rounded-[12.8px] -rotate-90" />
          <div className="absolute top-[88px] left-[293px] w-[162px] [font-family:'Sora',Helvetica] font-extrabold text-white text-xl tracking-[0] leading-[20.9px]">
            Nishant Tiwari
          </div>
          <div className="absolute top-[134px] left-[293px] w-[111px] [font-family:'Sora',Helvetica] font-semibold text-[#d9d9d9] text-sm tracking-[0.14px] leading-[14.6px]">
            Co-Founder
          </div>
        </div>

        <div className="relative w-[471px] h-[458px]">
          <img
            className="top-[60px] left-[81px] w-[390px] absolute h-[398px]"
            alt="Union"
            src="/union.svg"
          />
          <img
            className="w-[457px] h-[457px] object-cover absolute top-0 left-0"
            alt="Satvik"
            src="/satvik-1.png"
          />
          <div className="absolute top-[98px] left-[295px] w-[166px] h-14">
            <div className="top-[-13px] absolute left-[43px] w-[3px] h-[89px] bg-black rounded-[12.8px] -rotate-90" />
            <div className="w-[162px] [font-family:'Sora',Helvetica] font-extrabold text-white text-xl tracking-[0] leading-[20.9px] absolute top-0 left-0">
              Satvik Thakkar
            </div>
            <div className="top-[41px] w-[111px] absolute left-0 [font-family:'Sora',Helvetica] font-semibold text-[#d9d9d9] text-sm tracking-[0.14px] leading-[14.6px]">
              Co-Founder
            </div>
          </div>
        </div>

        <div className="relative w-[510px] h-[495px]">
          <img
            className="top-[97px] left-[115px] w-[395px] absolute h-[398px]"
            alt="Union"
            src="/union-2.svg"
          />
          <img
            className="w-[495px] h-[495px] object-cover absolute top-0 left-0"
            alt="Siddhartha"
            src="/siddhartha-1.png"
          />
          <div className="absolute top-32 left-[326px] w-[173px] h-[81px]">
            <div className="top-2.5 absolute left-[43px] w-[3px] h-[89px] bg-black rounded-[12.8px] -rotate-90" />
            <div className="w-[169px] [font-family:'Sora',Helvetica] font-extrabold text-white text-xl tracking-[0] leading-[20.9px] absolute top-0 left-0">
              Siddhartha&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Chandra
            </div>
            <div className="top-[65px] w-[103px] whitespace-nowrap absolute left-0 [font-family:'Sora',Helvetica] font-semibold text-[#d9d9d9] text-sm tracking-[0.14px] leading-[14.6px]">
              Co-Founder
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full h-[49px]">
        <img
          className="absolute top-0 left-[170px] w-[180px] h-[49px]"
          alt="Group"
          src="/group-143726066.png"
        />
        <img
          className="absolute top-0 left-[630px] w-[181px] h-[49px]"
          alt="Group"
          src="/group-143726182.png"
        />
        <img
          className="absolute top-0 left-[1069px] w-[180px] h-[49px]"
          alt="Group"
          src="/group-143726183.png"
        />
      </div>
    </section>
  );
};
