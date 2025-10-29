import { Badge } from "../../../../components/ui/badge";

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

export const GallerySection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-black py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-6 mb-16">
          <Badge className="bg-[linear-gradient(0deg,rgba(217,217,217,1)_0%,rgba(217,217,217,1)_100%)] text-black hover:bg-[linear-gradient(0deg,rgba(217,217,217,1)_0%,rgba(217,217,217,1)_100%)] px-[26px] py-[9px] rounded-[15px] h-auto">
            <span className="[font-family:'Sora',Helvetica] font-bold text-xl tracking-[-0.60px]">
              How It Works
            </span>
          </Badge>

          <h2 className="max-w-[782px] [font-family:'Sora',Helvetica] font-normal text-5xl text-center tracking-[0] leading-[72px]">
            <span className="font-bold text-white">
              From Beginner to Builder —{" "}
            </span>
            <span className="font-bold text-[#acacac]">
              How Ladder1&nbsp;&nbsp;Works
            </span>
          </h2>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-6">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center gap-3">
                <div className="flex flex-col items-center justify-center gap-2.5 p-2.5 w-[50px] h-[50px] bg-[#40934f] rounded-[40px]">
                  <div className="[font-family:'Instrument_Sans',Helvetica] font-semibold text-white text-xl text-center tracking-[0] leading-[30px]">
                    {step.number}
                  </div>
                </div>

                <h3 className="[font-family:'Instrument_Sans',Helvetica] font-bold text-[#fef3f3] text-2xl text-center tracking-[0] leading-[30px] whitespace-nowrap">
                  {step.title}
                </h3>

                <p className="[font-family:'Basier_Circle-Regular',Helvetica] font-normal text-[#fef3f3] text-base text-center tracking-[0] leading-[30px] max-w-[254px]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-white to-transparent mb-6" />
        </div>

        <div className="relative w-full h-[803px] mt-8">
          <img
            className="w-full h-full object-cover"
            alt="Gemini generated"
            src="/gemini-generated-image-vi7upkvi7upkvi7u-1.png"
          />
        </div>
      </div>
    </section>
  );
};
