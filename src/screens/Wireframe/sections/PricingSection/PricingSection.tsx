import { Badge } from "../../../../components/ui/badge";

const features = [
  {
    number: "1",
    category: "Chart Your Journey",
    title: "AI Roadmaps",
    subtitle: "— Custom Paths to Mastery",
    description:
      "Ladder1's AI Roadmaps guide you step by step through your coding journey. Each path adapts to your skills and progress, ensuring you learn in the most efficient and structured way possible — from fundamentals to advanced mastery.",
    image: "/rectangle-21982-1.svg",
    imagePosition: "right",
  },
  {
    number: "2",
    category: "AI Projects Hub",
    title: "Experience-First ",
    subtitle: "Learning for Future-Ready Skills",
    description:
      "Turn your learning into action with AI-curated projects designed to simulate real-world challenges. Whether it's building a full-stack web app, training a model, or solving DSA problems each project adapts to your skill level, offering personalized feedback and growth insights.",
    image: "/rectangle-21982-3.svg",
    imagePosition: "left",
  },
  {
    number: "3",
    category: "Decode Smarter",
    title: "AI Analyzer ",
    subtitle: "— Code Understanding at Scale",
    description:
      "Understand your code like never before. The AI Analyzer scans your submissions, detects logic gaps, and provides instant, human-like feedback to help you write cleaner, optimized, and industry-ready code.",
    image: "/rectangle-21982-6.svg",
    imagePosition: "right",
  },
  {
    number: "4",
    category: "Learn. Test. Improve.",
    title: "AI Quiz",
    subtitle: " — Smart Learning with Real-Time Insights",
    description:
      "Test your knowledge through adaptive quizzes powered by AI. Each question evolves based on your responses, helping you identify weak areas instantly and sharpen your concepts with precision.",
    image: "/rectangle-21982-2.svg",
    imagePosition: "left",
  },
  {
    number: "5",
    category: "Conquer the MAANG Path",
    title: "Maangic Mountains ",
    subtitle: "— Curated MAANG Company Problems",
    description:
      "Climb the Maangic Mountains to prepare for top tech interviews. Solve handpicked coding problems inspired by real MAANG challenges and boost your confidence for high-impact interviews.",
    image: "/rectangle-21982-4.svg",
    imagePosition: "right",
  },
  {
    number: "6",
    category: " Prove Your Mastery",
    title: "Certifications",
    subtitle: " — Industry Recognition",
    description:
      "Earn verifiable certifications that showcase your skills and hard work. Each certificate adds credibility to your resume and helps you stand out to recruiters and tech companies.",
    image: "/rectangle-21982-5.svg",
    imagePosition: "left",
  },
  {
    number: "7",
    category: "Level Up & Earn",
    title: "Battlepass Rewards ",
    subtitle: "— Unlock Premium Perks",
    description:
      "Stay motivated as you learn with the Battlepass system. Complete tasks, earn XP, and unlock premium rewards — turning your coding journey into a fun, gamified experience that celebrates progress.",
    image: "/rectangle-21982.svg",
    imagePosition: "right",
  },
];

export const PricingSection = (): JSX.Element => {
  return (
    <section className="w-full flex flex-col gap-6 py-[110px]">
      <header className="flex flex-col items-center gap-6 mx-auto max-w-[877px] px-4">
        <Badge className="inline-flex items-center justify-center px-[26px] py-[9px] rounded-[15px] border border-solid border-[#58b368] bg-[linear-gradient(0deg,rgba(90,203,110,0.45)_0%,rgba(90,203,110,0.45)_100%)] hover:bg-[linear-gradient(0deg,rgba(90,203,110,0.45)_0%,rgba(90,203,110,0.45)_100%)]">
          <span className="[font-family:'Sora',Helvetica] font-bold text-[#2d5735] text-xl tracking-[-0.60px] leading-[normal]">
            Features
          </span>
        </Badge>

        <h2 className="[font-family:'Sora',Helvetica] font-normal text-[64px] text-center tracking-[0] leading-[64px]">
          <span className="font-extrabold text-black leading-[96px]">
            Smarter Tools for{" "}
          </span>
          <span className="font-extrabold text-[#58b368] leading-[96px]">
            Learning &amp; Upskilling
          </span>
        </h2>
      </header>

      <div className="flex flex-col gap-[186px]">
        {features.map((feature, index) => (
          <article key={index} className="w-full bg-white">
            <div
              className={`flex items-center gap-[13px] max-w-[1261px] mx-auto px-4 py-[30px] relative ${
                feature.imagePosition === "left" ? "flex-row-reverse" : ""
              }`}
            >
              <div className="flex flex-col items-start gap-3 w-[518px] flex-shrink-0">
                <div className="[font-family:'Lato',Helvetica] font-normal text-[#454545] text-xl tracking-[0] leading-[26.4px]">
                  {feature.category}
                </div>

                <div className="w-[403px]">
                  <img
                    className="w-full h-px object-cover"
                    alt="Line"
                    src="/line-7.svg"
                  />
                </div>

                <h3 className="[font-family:'Sora',Helvetica] font-bold text-[40px] tracking-[0] leading-[44px]">
                  <span className="text-[#40934f]">{feature.title}</span>
                  <span className="text-black">{feature.subtitle}</span>
                </h3>

                <p className="[font-family:'Lato',Helvetica] font-normal text-[#454545] text-xl tracking-[0] leading-[29.2px] max-w-[467px]">
                  {feature.description}
                </p>
              </div>

              <div className="flex-shrink-0">
                <img
                  className="w-[710px] h-[785px] object-cover"
                  alt={`${feature.title} illustration`}
                  src={feature.image}
                />
              </div>

              <div className="absolute top-[19px] left-2.5 [font-family:'Sora',Helvetica] font-extrabold text-black text-8xl tracking-[0] leading-[155.5px]">
                {feature.number}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
