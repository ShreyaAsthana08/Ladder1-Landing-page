"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";

const faqItems = [
  {
    id: "item-1",
    question: "What is Ladder1?",
    answer:
      "Every business is unique, so we don't believe in 'one-size-fits-all' solutions. We analyze your industry, audience, and goals to create tailored strategies—whether it's performance marketing, website optimization, automation tools, or CRM integration.",
  },
  {
    id: "item-2",
    question: "How does the AI Roadmap work?",
    answer:
      "We analyze your goals and skill level, then generate an AI-powered personalized roadmap with tasks, milestones, and learning resources.",
  },
  {
    id: "item-3",
    question: "What kind of projects can I build?",
    answer:
      "You can build real-world, AI-integrated, and web-based projects such as dashboards, automation tools, and interactive websites.",
  },
  {
    id: "item-4",
    question: "Is Ladder1 suitable for beginners?",
    answer:
      "Absolutely. Ladder1 is designed for all skill levels, guiding beginners step-by-step with structured roadmaps and AI assistance.",
  },
  {
    id: "item-5",
    question: "What are Battlepass Rewards?",
    answer:
      "Battlepass Rewards are achievement-based perks you earn by completing roadmaps, challenges, and real-world projects.",
  },
  {
    id: "item-6",
    question: "Do I get a certificate after completing a roadmap or project?",
    answer:
      "Yes, you'll receive a verified certificate recognizing your skill progression and project completion.",
  },
  {
    id: "item-7",
    question: "Can I access Ladder1 on mobile devices?",
    answer:
      "Yes, Ladder1 is optimized for all devices, allowing you to track progress and continue learning on the go.",
  },
];

const ServicesSection: React.FC = () => {
  const leftColumnItems = faqItems.slice(0, 3);
  const rightColumnItems = faqItems.slice(3);

  return (
    <section className="w-full bg-black py-[80px] sm:py-[100px] md:py-[136px] px-6 sm:px-10 md:px-[60px] lg:px-[98px]">
      <div className="max-w-[1244px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-12 lg:gap-8">
          {/* Left Heading */}
          <div className="flex flex-col text-center lg:text-left">
            <h2 className="bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(104,104,104,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'DM_Sans',Helvetica] font-bold text-[40px] sm:text-[50px] md:text-[60.7px] tracking-[-1.82px] leading-tight sm:leading-[70px] md:leading-[91.1px]">
              Ladder1
              <br className="hidden lg:block" />
              FAQs
            </h2>
          </div>

          {/* Right Accordion Columns */}
          <div className="grid grid-cols-1 gap-4 sm:gap-6">
            <Accordion type="single" collapsible className="w-full">
              {leftColumnItems.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="border-b-0"
                >
                  <div className="flex flex-col gap-[13.3px] py-4">
                    <div className="flex items-start gap-[9.49px]">
                      <AccordionTrigger className="flex items-center justify-center w-[35px] sm:w-[41px] h-[35px] sm:h-[43px] shrink-0 hover:no-underline p-0 [&[data-state=open]_.plus-icon]:hidden [&[data-state=closed]_.minus-icon]:hidden">
                        <Plus
                          className="plus-icon text-[#58b368]"
                          size={30}
                          strokeWidth={3}
                        />
                        <Minus
                          className="minus-icon text-[#58b368]"
                          size={30}
                          strokeWidth={3}
                        />
                      </AccordionTrigger>
                      <div className="flex-1 [font-family:'Inter',Helvetica] font-medium text-white text-[22px] sm:text-[28px] md:text-[34.2px] leading-snug md:leading-normal pt-1">
                        {item.question}
                      </div>
                    </div>
                    <AccordionContent className="pb-0">
                      <div className="pl-[45px] sm:pl-[55px]">
                        <p className="[font-family:'Inter',Helvetica] font-normal text-white text-[16px] sm:text-[18px] md:text-[19px] leading-relaxed max-w-full md:max-w-[498px]">
                          {item.answer}
                        </p>
                      </div>
                    </AccordionContent>
                    <img
                      className="ml-[45px] sm:ml-[55px] w-full md:w-[574px] h-[4.74px]"
                      alt="Line"
                      src="/line-10.svg"
                    />
                  </div>
                </AccordionItem>
              ))}
            </Accordion>

            <Accordion type="single" collapsible className="w-full">
              {rightColumnItems.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="border-b-0"
                >
                  <div className="flex flex-col gap-[13.3px] py-4">
                    <div className="flex items-start gap-[9.49px]">
                      <AccordionTrigger className="flex items-center justify-center w-[35px] sm:w-[41px] h-[35px] sm:h-[43px] shrink-0 hover:no-underline p-0 [&[data-state=open]_.plus-icon]:hidden [&[data-state=closed]_.minus-icon]:hidden">
                        <Plus
                          className="plus-icon text-[#58b368]"
                          size={30}
                          strokeWidth={3}
                        />
                        <Minus
                          className="minus-icon text-[#58b368]"
                          size={30}
                          strokeWidth={3}
                        />
                      </AccordionTrigger>
                      <div className="flex-1 [font-family:'Inter',Helvetica] font-medium text-white text-[22px] sm:text-[28px] md:text-[34.2px] leading-snug md:leading-normal pt-1">
                        {item.question}
                      </div>
                    </div>
                    <AccordionContent className="pb-0">
                      <div className="pl-[45px] sm:pl-[55px]">
                        <p className="[font-family:'Inter',Helvetica] font-normal text-white text-[16px] sm:text-[18px] md:text-[19px] leading-relaxed max-w-full md:max-w-[498px]">
                          {item.answer}
                        </p>
                      </div>
                    </AccordionContent>
                    <img
                      className="ml-[45px] sm:ml-[55px] w-full md:w-[574px] h-[4.74px]"
                      alt="Line"
                      src="/line-10.svg"
                    />
                  </div>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
