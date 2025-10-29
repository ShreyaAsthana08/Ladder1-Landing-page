import { Separator } from "../../../../components/ui/separator";

const featuresLinks = [
  "Features",
  "AI Roadmaps",
  "AI Analyzer",
  "AI Quiz",
  "Maangic Mountains",
  "Certifications",
  "Battlepass Rewards",
];

const legalLinks = [
  "Legal",
  "Privacy Policy",
  "Terms and Conditions",
  "Refund Policy",
  "Contact Us",
];

export const AboutUsSection = (): JSX.Element => {
  return (
    <footer className="relative w-full bg-black overflow-hidden py-[152px] px-[93px]">
      <div className="absolute top-[-45px] left-[-150px] w-[722px] h-[209px] bg-[#58b368] rounded-[361px/104.5px] blur-[200px] opacity-50" />

      <div className="absolute top-[587px] left-[1100px] w-[340px] h-[440px] bg-[#58b368] rounded-[170px/220px] blur-[200px] opacity-70" />

      <div className="relative w-full max-w-[1253px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_auto_auto] gap-8 mb-[150px]">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <img
                className="w-[218px] h-[50.21px] object-cover"
                alt="Ladder1 Light"
                src="/ladder1-light-1-1.png"
              />
            </div>

            <p className="w-full max-w-[423px] [font-family:'Lato',Helvetica] font-medium text-white text-xl tracking-[0.20px] leading-[19.8px]">
              Ladder1 is an AI-driven learning platform that turns coding
              education into real-world skill development. We help learners
              build, test, and showcase projects — with guidance, feedback, and
              rewards.
            </p>

            <img
              className="w-[180px] h-[49px]"
              alt="Social Media Icons"
              src="/group-143726066-1.png"
            />
          </div>

          <nav className="flex flex-col gap-[15px]">
            {featuresLinks.map((link, index) => (
              <a
                key={index}
                href="#"
                className="[font-family:'Lato',Helvetica] font-bold text-white text-base tracking-[0.16px] leading-10 hover:opacity-80 transition-opacity"
              >
                {link}
              </a>
            ))}
          </nav>

          <nav className="flex flex-col gap-[15px]">
            {legalLinks.map((link, index) => (
              <a
                key={index}
                href="#"
                className="[font-family:'Lato',Helvetica] font-bold text-white text-base tracking-[0.16px] leading-10 hover:opacity-80 transition-opacity"
              >
                {link}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-[15px]">
            <h3 className="[font-family:'Lato',Helvetica] font-bold text-[#d9d9d9] text-4xl tracking-[0.36px] leading-[35.6px]">
              Contact Us
            </h3>

            <div className="flex flex-col [font-family:'Lato',Helvetica] font-bold text-2xl tracking-[0.24px] leading-6">
              <span className="text-[#ffffff99] tracking-[0.06px] leading-9">
                Email
              </span>
              <a
                href="mailto:satvik@ladder1.ai"
                className="text-white tracking-[0.06px] leading-9 hover:opacity-80 transition-opacity"
              >
                satvik@ladder1.ai
              </a>
            </div>
          </div>
        </div>

        <img
          className="relative w-full max-w-[1119px] h-[252px] mx-auto mb-[100px]"
          alt="Mask group"
          src="/mask-group.png"
        />

        <div className="relative w-full">
          <Separator className="mb-8 bg-[#999999]" />

          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <p className="[font-family:'Lato',Helvetica] font-bold text-[#999999] text-base tracking-[0.16px] leading-10">
              Built with passion. Trusted by learners worldwide.
            </p>

            <p className="[font-family:'Lato',Helvetica] font-bold text-[#999999] text-[15px] tracking-[0.15px] leading-[37.5px]">
              © 2025 Ladder1.ai — All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
