import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";

const faqItems = [
  {
    id: "item-1",
    question: "What is Ladder1?",
    answer:
      "Yes. Every business is unique, so we don't believe in \"one-size-fits-all\" solutions. We analyze your industry, audience, and goals to create tailored strategies—whether it's performance marketing, website optimization, automation tools, or CRM integration.",
  },
  {
    id: "item-2",
    question: "How does the AI Roadmap work?",
    answer:
      "Yes. Every business is unique, so we don't believe in \"one-size-fits-all\" solutions. We analyze your industry, audience, and goals to create tailored strategies—whether it's performance marketing, website optimization, automation tools, or CRM integration.",
  },
  {
    id: "item-3",
    question: "What kind of projects can I build?",
    answer:
      "Yes. Every business is unique, so we don't believe in \"one-size-fits-all\" solutions. We analyze your industry, audience, and goals to create tailored strategies—whether it's performance marketing, website optimization, automation tools, or CRM integration.",
  },
  {
    id: "item-4",
    question: "Is Ladder1 suitable for beginners?",
    answer:
      "Yes. Every business is unique, so we don't believe in \"one-size-fits-all\" solutions. We analyze your industry, audience, and goals to create tailored strategies—whether it's performance marketing, website optimization, automation tools, or CRM integration.",
  },
  {
    id: "item-5",
    question: "What are Battlepass Rewards?",
    answer:
      "Yes. Every business is unique, so we don't believe in \"one-size-fits-all\" solutions. We analyze your industry, audience, and goals to create tailored strategies—whether it's performance marketing, website optimization, automation tools, or CRM integration.",
  },
  {
    id: "item-6",
    question: "Do I get a certificate after completing a roadmap or project?",
    answer:
      "Yes. Every business is unique, so we don't believe in \"one-size-fits-all\" solutions. We analyze your industry, audience, and goals to create tailored strategies—whether it's performance marketing, website optimization, automation tools, or CRM integration.",
  },
  {
    id: "item-7",
    question: "Can I access Ladder1 on mobile devices?",
    answer:
      "Yes. Every business is unique, so we don't believe in \"one-size-fits-all\" solutions. We analyze your industry, audience, and goals to create tailored strategies—whether it's performance marketing, website optimization, automation tools, or CRM integration.",
  },
];

export const ServicesSection = (): JSX.Element => {
  const leftColumnItems = faqItems.slice(0, 3);
  const rightColumnItems = faqItems.slice(3);

  return (
    <section className="w-full bg-black py-[136px] px-[98px]">
      <div className="max-w-[1244px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-8">
          <div className="flex flex-col">
            <h2 className="bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(104,104,104,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'DM_Sans',Helvetica] font-bold text-[60.7px] tracking-[-1.82px] leading-[91.1px]">
              Ladder1
              <br />
              FAQs
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-0">
            <Accordion type="single" collapsible className="w-full">
              {leftColumnItems.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="border-b-0"
                >
                  <div className="flex flex-col gap-[13.3px] py-4">
                    <div className="flex items-start gap-[9.49px]">
                      <div className="flex items-center justify-center w-[41px] h-[43px] [font-family:'Inter',Helvetica] font-medium text-[#58b368] text-[60.7px] leading-[43px] shrink-0">
                        +
                      </div>
                      <AccordionTrigger className="flex-1 text-left hover:no-underline p-0 [&[data-state=open]>div]:hidden">
                        <div className="[font-family:'Inter',Helvetica] font-medium text-white text-[34.2px] leading-normal">
                          {item.question}
                        </div>
                      </AccordionTrigger>
                    </div>
                    <AccordionContent className="pb-0">
                      <div className="pl-[55px]">
                        <p className="[font-family:'Inter',Helvetica] font-normal text-white text-[19px] leading-normal max-w-[498px]">
                          {item.answer}
                        </p>
                      </div>
                    </AccordionContent>
                    <img
                      className="ml-[55px] w-[574px] h-[4.74px]"
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
                      <div className="flex items-center justify-center w-[41px] h-[43px] [font-family:'Inter',Helvetica] font-medium text-[#58b368] text-[60.7px] leading-[43px] shrink-0">
                        +
                      </div>
                      <AccordionTrigger className="flex-1 text-left hover:no-underline p-0 [&[data-state=open]>div]:hidden">
                        <div className="[font-family:'Inter',Helvetica] font-medium text-white text-[34.2px] leading-normal">
                          {item.question}
                        </div>
                      </AccordionTrigger>
                    </div>
                    <AccordionContent className="pb-0">
                      <div className="pl-[55px]">
                        <p className="[font-family:'Inter',Helvetica] font-normal text-white text-[19px] leading-normal max-w-[498px]">
                          {item.answer}
                        </p>
                      </div>
                    </AccordionContent>
                    <img
                      className="ml-[45.5px] w-[574px] h-[4.74px]"
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
