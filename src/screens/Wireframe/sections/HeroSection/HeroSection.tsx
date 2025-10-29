import { Button } from "../../../../components/ui/button";

const companyLogosRow1 = [
  {
    src: "/infosys-1.png",
    alt: "Infosys",
    className: "w-[190px] h-[51.72px] object-cover",
  },
  {
    src: "/tcs-1.png",
    alt: "Tcs",
    className: "w-[175px] h-[53px] object-cover",
  },
  {
    src: "/work-india-1.png",
    alt: "Work india",
    className: "w-[217px] h-[47px] object-cover",
  },
  {
    src: "/image-19.png",
    alt: "Company logo",
    className: "w-[179px] h-[89px]",
  },
];

const companyLogosRow2 = [
  {
    src: "/phonepe-logo-svg-1.png",
    alt: "Phonepe logo svg",
    className: "w-[169px] h-[51px] object-cover",
  },
  {
    src: "/download-1.png",
    alt: "Company logo",
    className: "w-[174px] h-[87px] object-cover",
  },
  {
    src: "/oracle-1.png",
    alt: "Oracle",
    className: "w-[173px] h-[37px]",
  },
  {
    src: "/barclays-1.png",
    alt: "Barclays",
    className: "w-[181px] h-[31px] object-cover",
  },
];

export const HeroSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-black">
      <div className="relative w-full max-w-[1441px] mx-auto">
        <header className="flex items-center justify-between px-[90px] pt-7 pb-0">
          <div className="flex flex-col items-start gap-2.5 p-2.5">
            <img
              className="w-[172px] h-10 object-cover"
              alt="Light"
              src="/ladder1-light-1-1.png"
            />
          </div>

          <Button className="h-auto flex items-center justify-center gap-2.5 pl-10 pr-[11px] py-4 bg-black rounded-[27px] border-2 border-solid border-white hover:bg-zinc-900">
            <span className="[font-family:'Sora',Helvetica] font-semibold text-white text-base text-center tracking-[0] leading-[normal]">
              Get Started
            </span>
            <div className="relative w-[35px] h-[31px]">
              <div className="absolute top-0 left-0 w-[33px] h-[31px] bg-[#40934f] rounded-[16.5px/15.5px]" />
              <div className="absolute top-px left-1 [font-family:'Sora',Helvetica] font-semibold text-white text-2xl text-center tracking-[0] leading-[normal]">
                →
              </div>
            </div>
          </Button>
        </header>

        <div className="relative px-[127px] pt-[99px] pb-0">
          <div className="relative w-full max-w-[707px]">
            <h1 className="w-full max-w-[675px] bg-[linear-gradient(158deg,rgba(255,255,255,1)_14%,rgba(109,108,108,1)_92%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Sora',Helvetica] font-bold text-transparent text-[64px] tracking-[-1.92px] leading-[normal] mb-[27px]">
              Because College <br />
              Won&apos;t Teach You This!
            </h1>

            <p className="w-full max-w-[709px] [font-family:'Basier_Circle-Medium',Helvetica] font-medium text-[#bfbfbf] text-base tracking-[0] leading-[normal] mb-[56px]">
              Build real-world projects, not just assignments. Ladder1 helps you
              learn by doing — code, create, and showcase your skills through
              hands-on projects that prepare you for the industry
            </p>

            <div className="flex items-center gap-[47px]">
              <Button className="h-auto w-[269px] px-[23px] py-4 rounded-[44.92px] border-[0.82px] border-solid border-white bg-[linear-gradient(180deg,rgba(109,216,127,0.94)_0%,rgba(46,87,53,0.94)_91%)] shadow-[0px_-1.63px_18.78px_#58b368fc] hover:opacity-90">
                <span className="[font-family:'Basier_Circle-Medium',Helvetica] font-medium text-white text-[19.6px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
                  Generate My Roadmap
                </span>
              </Button>

              <Button className="h-auto w-[211px] px-6 py-4 rounded-[44.92px] border-[0.82px] border-solid border-white bg-[linear-gradient(180deg,rgba(136,135,135,0.94)_0%,rgba(0,0,0,0.94)_100%)] hover:opacity-90">
                <span className="[font-family:'Basier_Circle-Medium',Helvetica] font-medium text-white text-[19.6px] text-center tracking-[0] leading-[normal]">
                  Explore Features
                </span>
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-[39px] px-[118px] pt-[797px] pb-0">
          <h2 className="[font-family:'Sora',Helvetica] font-bold text-[#fef3f3] text-2xl text-center tracking-[-0.72px] leading-[normal]">
            Trusted by fast-growing startups
          </h2>

          <div className="flex items-center justify-center gap-[148px] w-full">
            {companyLogosRow1.map((logo, index) => (
              <img
                key={`logo-row1-${index}`}
                className={logo.className}
                alt={logo.alt}
                src={logo.src}
              />
            ))}
          </div>

          <div className="flex items-center justify-center gap-[158px]">
            {companyLogosRow2.map((logo, index) => (
              <img
                key={`logo-row2-${index}`}
                className={logo.className}
                alt={logo.alt}
                src={logo.src}
              />
            ))}
          </div>
        </div>

        <img
          className="absolute top-0 left-[97px] w-[1257px] h-[925px] pointer-events-none"
          alt="Background decoration"
          src="/group-143726151.png"
        />

        <img
          className="absolute top-[504px] left-0 w-full max-w-[1440px] h-[773px] object-cover pointer-events-none"
          alt="Background gradient"
          src="/rectangle.png"
        />

        <img
          className="absolute top-[126px] left-[55px] w-[714px] h-[349px] pointer-events-none"
          alt="Background decoration"
          src="/group-143726192.png"
        />
      </div>
    </section>
  );
};
