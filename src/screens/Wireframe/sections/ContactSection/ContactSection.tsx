import React from "react";
import { Badge } from "../../../../components/ui/badge";

export const ContactSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-white overflow-hidden py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-8">
            <Badge className="border border-solid border-[#58b368] bg-[linear-gradient(0deg,rgba(90,203,110,0.45)_0%,rgba(90,203,110,0.45)_100%)] text-[#397c45] font-bold text-xl tracking-[-0.60px] w-fit px-[26px] py-[9px] rounded-[15px] h-auto">
              AI Roadmaps
            </Badge>

            <h2 className="[font-family:'Sora',Helvetica] font-extrabold text-[64px] leading-[85.1px] tracking-[-0.82px]">
              <span className="text-black">Your AI-Powered Path to </span>
              <span className="text-[#58b368]">Mastery</span>
            </h2>

            <p className="[font-family:'Basier_Circle-Regular',Helvetica] font-normal text-black text-xl leading-[30px]">
              Stop guessing what to learn next. Ladder1&apos;s intelligent AI
              creates personalized learning roadmaps tailored to your skill
              level, helping you move confidently from beginner to expert — one
              guided step at a time.
            </p>
          </div>

          <div className="relative h-[600px] flex items-center justify-center">
            <img
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[264px] h-[542px]"
              alt="Vector"
              src="/vector-9.svg"
            />

            <div className="absolute top-[102px] left-0 w-[352px] h-[394px]">
              <img
                className="absolute w-[81.23%] h-[80.03%] top-[8.02%] left-[-14.18%] object-cover"
                alt="Test"
                src="/test-1.png"
              />

              <div className="absolute w-[85.57%] h-[84.31%] top-0 left-[14.43%]">
                <img
                  className="absolute w-full h-full top-[-14.93%] left-[-17.46%] object-cover"
                  alt="Test"
                  src="/test-1.png"
                />
              </div>
            </div>

            <div className="absolute top-[-101px] left-[19px] w-[378px] h-[396px]">
              <div className="w-full h-full relative rotate-180">
                <img
                  className="absolute w-[77.61%] h-[81.69%] top-[-19.73%] left-[2.77%] -rotate-180 object-cover"
                  alt="Test"
                  src="/test-7.png"
                />

                <img
                  className="absolute w-[77.61%] h-[81.69%] top-0 left-[-19.62%] -rotate-180 object-cover"
                  alt="Test"
                  src="/test-7.png"
                />
              </div>
            </div>

            <div className="absolute top-[-50px] right-0 w-[303px] h-[312px]">
              <img
                className="absolute w-[84.99%] h-[78.45%] top-0 left-[-8.21%] object-cover"
                alt="Test"
                src="/test-5.png"
              />

              <img
                className="absolute w-[84.99%] h-[78.45%] top-[-21.28%] left-[-23.22%] object-cover"
                alt="Test"
                src="/test-5.png"
              />
            </div>

            <div className="absolute bottom-0 right-[33px] w-[229px] h-60">
              <img
                className="absolute w-[77.61%] h-[81.69%] top-0 left-[3.63%] object-cover"
                alt="Test"
                src="/test-7.png"
              />

              <img
                className="absolute w-[77.61%] h-[81.69%] top-[-16.89%] left-[-18.76%] object-cover"
                alt="Test"
                src="/test-7.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
