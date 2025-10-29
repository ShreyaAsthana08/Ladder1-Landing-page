import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";

export const TestimonialsSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-black overflow-hidden py-20">
      <div className="absolute -top-16 right-0 w-[737px] h-[609px] opacity-80 pointer-events-none">
        <img
          className="absolute top-16 left-0 w-[355px] h-[545px]"
          alt="Ellipse"
          src="/ellipse-31.svg"
        />
        <img
          className="absolute top-[68px] left-[81px] w-[274px] h-[474px]"
          alt="Ellipse"
          src="/ellipse-30.svg"
        />
        <img
          className="absolute top-[107px] left-[152px] w-[203px] h-[375px]"
          alt="Ellipse"
          src="/ellipse-29.svg"
        />
        <div className="absolute top-[17px] left-[131px] w-[445px] h-[555px] bg-[#58b368] rounded-[222.35px/277.71px] blur-[226.88px]" />
      </div>

      <div className="absolute top-[380px] -left-[364px] w-[737px] h-[609px] opacity-80 pointer-events-none">
        <img
          className="absolute top-0 left-[371px] w-[366px] h-[609px]"
          alt="Ellipse"
          src="/ellipse-31.svg"
        />
        <img
          className="absolute top-[68px] left-[371px] w-[277px] h-[474px]"
          alt="Ellipse"
          src="/ellipse-30.svg"
        />
        <img
          className="absolute top-[107px] left-[371px] w-[213px] h-[375px]"
          alt="Ellipse"
          src="/ellipse-29-1.svg"
        />
        <div className="absolute top-[17px] left-[131px] w-[445px] h-[555px] bg-[#58b368] rounded-[222.35px/277.71px] blur-[226.88px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-8 px-4">
        <Badge className="bg-[linear-gradient(0deg,rgba(217,217,217,1)_0%,rgba(217,217,217,1)_100%)] text-black hover:bg-[linear-gradient(0deg,rgba(217,217,217,1)_0%,rgba(217,217,217,1)_100%)] border-0 rounded-[15px] px-[26px] py-[9px] h-auto">
          <span className="[font-family:'Sora',Helvetica] font-extrabold text-base tracking-[0.16px] leading-[16.7px]">
            Join Our Community
          </span>
        </Badge>

        <div className="flex flex-col items-center gap-6 max-w-[909px] w-full mt-16">
          <h2 className="[font-family:'Sora',Helvetica] font-normal text-[55.7px] text-center tracking-[0] leading-[83.5px]">
            <span className="font-bold text-white">
              Start Building Projects{" "}
            </span>
            <span className="font-bold text-[#58b368]">Today</span>
          </h2>

          <p className="[font-family:'Lato',Helvetica] font-normal text-white text-[17.5px] text-center tracking-[0.18px] leading-[28.4px] max-w-[606px]">
            Join thousands of learners in our vibrant community. Get instant
            help, share knowledge, and grow together.
          </p>

          <div className="flex items-center gap-6 mt-8">
            <Button className="inline-flex items-center justify-center gap-[7.85px] px-[39.25px] py-[11.77px] rounded-[32.18px] border border-solid border-[#33ff57] bg-[linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)] hover:bg-[linear-gradient(0deg,rgba(255,255,255,0.9)_0%,rgba(255,255,255,0.9)_100%)] h-auto">
              <span className="[font-family:'Lato',Helvetica] font-bold text-black text-[18.8px] text-center tracking-[0.19px] leading-[30.5px]">
                Join Discord
              </span>
              <img
                className="w-[32.18px] h-[32.18px]"
                alt="Discord"
                src="/discord.svg"
              />
            </Button>

            <Button
              variant="outline"
              className="inline-flex items-center justify-center gap-[7.42px] px-[37.08px] py-[11.12px] rounded-[30.41px] border border-solid border-white bg-transparent hover:bg-white/10 h-auto"
            >
              <span className="[font-family:'Lato',Helvetica] font-bold text-white text-[17.8px] text-center tracking-[0.18px] leading-[28.8px]">
                Join WhatsApp
              </span>
              <img
                className="w-[22.99px] h-[22.99px]"
                alt="Whatsapp"
                src="/whatsapp.svg"
              />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
