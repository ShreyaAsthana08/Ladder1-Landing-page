"use client";

import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { ContainerScroll } from "./ui/container-scroll-animation";
import { MobileContainerScroll } from "./ui/MobileContainerScroll"; 

export default function HeroSection() {
  const companyLogos = [
    { src: "/infosys-1.png", alt: "Infosys" },
    { src: "/tcs-1.png", alt: "Tcs" },
    { src: "/work-india-1.png", alt: "Work India" },
    { src: "/image-19.png", alt: "Company logo" },
    { src: "/phonepe-logo-svg-1.png", alt: "PhonePe" },
    { src: "/download-1.png", alt: "Company logo" },
    { src: "/oracle-1.png", alt: "Oracle" },
    { src: "/barclays-1.png", alt: "Barclays" },
  ];

  return (
    <section className="w-full bg-black">
      {/* Hero Section */}
      <div className="relative w-full overflow-hidden">
      {/* 🔹 Desktop Video Background */}
      <div className="hidden lg:block absolute inset-0 w-full h-full overflow-hidden z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-[30%] left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-contain"
        >
          <source src="/edit hero video.mp4" type="video/mp4" />
        </video>

        {/* Optional gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/30 to-transparent" />
      </div>


        <div className="relative w-full max-w-[1441px] mx-auto z-10">
          {/* Header */}
          <header className="flex items-center justify-between  md:px-[50px] pt-6 md:pt-8">
            <img
              className="w-[120px] md:w-[172px] h-auto"
              alt="Ladder1 Logo"
              src="/ladder1-light-1-1.png"
            />

            <HoverBorderGradient
              containerClassName="rounded-[27px]"
              className="flex items-center justify-center gap-3 md:gap-4 px-5 md:px-8 py-3 md:py-4 bg-black/80 backdrop-blur-sm"
              gradientColor="#888787"
              duration={1.5}
            >
              <span className="font-semibold text-white text-sm md:text-base tracking-wide">
                Get Started
              </span>
              <div className="flex items-center justify-center w-[32px] md:w-[38px] h-[32px] md:h-[38px] rounded-full bg-[#40934f]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="white"
                  className="w-4 h-4 md:w-5 md:h-5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7l7 7-7 7" />
                </svg>
              </div>
            </HoverBorderGradient>
          </header>

          {/* 🔹 Hero Content */}
          <div className="px-6 sm:px-12 md:px-[90px] lg:px-[127px] pt-10 md:pt-[20px] pb-4 md:pb-0 flex flex-col items-center md:items-start justify-center min-h-[40vh] text-center md:text-left">
            <div className="w-full max-w-[707px] mx-auto md:mx-0 flex flex-col items-center md:items-start justify-center md:justify-start">
              <h1 className="max-w-[675px] bg-gradient-to-br from-white via-gray-300 to-gray-500 bg-clip-text text-transparent font-bold text-[32px] sm:text-[44px] md:text-[64px] leading-tight md:leading-[1.1] mb-4 md:mb-[27px]">
                Because College <br /> Won&apos;t Teach You{" "}
                <span className="text-white">This!</span>
              </h1>

              <p className="max-w-[709px] text-[#bfbfbf] text-xs md:text-base leading-relaxed mb-6 md:mb-[56px]">
                Build real-world projects, not just assignments. Ladder1 helps you learn by doing —
                code, create, and showcase your skills through hands-on projects that prepare you for
                the industry.
              </p>

              {/* 🔹 CTA Buttons */}
              <div className="flex flex-row items-center justify-center md:justify-start gap-3 md:gap-[47px] flex-wrap">
                <HoverBorderGradient
                  containerClassName="rounded-[44.92px] flex-1 min-w-[140px] sm:flex-none"
                  className="w-full px-4 sm:px-6 md:px-[23px] py-3 sm:py-4 md:py-6 bg-gradient-to-b from-[#6dd87fef] to-[#2e5735ef]"
                  gradientColor="#58b368"
                  duration={1.5}
                >
                  <span className="text-white text-sm sm:text-base md:text-[19px] text-center font-medium whitespace-nowrap">
                    Generate Roadmap
                  </span>
                </HoverBorderGradient>

                <HoverBorderGradient
                  containerClassName="rounded-[44.92px] flex-1 min-w-[120px] sm:flex-none"
                  className="w-full px-4 sm:px-6 md:px-[23px] py-3 sm:py-4 md:py-6 bg-gradient-to-b from-[#888787ef] to-[#000000ef]"
                  gradientColor="#888787"
                  duration={1.5}
                >
                  <span className="text-white text-sm sm:text-base md:text-[19.6px] text-center font-medium whitespace-nowrap">
                    Explore Projects
                  </span>
                </HoverBorderGradient>
              </div>
            </div>
          </div>

          {/*  3D Scroll Frame Desktop */}
          <div className="hidden md:block">
            <ContainerScroll titleComponent={<div className="h-0" />}>
              <div className="relative w-full rounded-[30px] overflow-hidden">
                <img
                  src="/Rectangle 21981.png"
                  alt="Tutorial Frame"
                  className="w-full h-full object-cover"
                  draggable={false}
                />
              </div>
            </ContainerScroll>
          </div>

          {/*  3D Scroll Frame Mobile */}
          <div className="block md:hidden mt-10 mb-20">
            <MobileContainerScroll titleComponent={<div className="h-0" />}>
              <img
                src="/phone view.png"
                alt="App Preview"
                className="w-full h-full object-cover"
                draggable={false}
              />
            </MobileContainerScroll>
          </div>
        </div>
      </div>

      {/* 🔹 Trusted By Section */}
      <div className="w-full bg-black">
        <div className="w-full max-w-[1441px] mx-auto">
          <div className="flex flex-col items-center gap-6 md:gap-[39px] px-4 md:px-[118px] py-16 md:py-32">
            <h2 className="font-bold text-[#fef3f3] text-lg md:text-2xl text-center">
              Trusted by fast-growing startups
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-12 w-full">
              {companyLogos.map((logo, index) => (
                <div key={index} className="flex items-center justify-center">
                  <img
                    src={logo.src || "/placeholder.svg"}
                    alt={logo.alt}
                    className="w-[60px] sm:w-[80px] md:w-[120px] h-auto filter grayscale opacity-60 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
