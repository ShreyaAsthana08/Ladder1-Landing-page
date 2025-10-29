"use client";
import { useState } from "react";
import { ProjectCard3D } from "@/components/ui/projectCard3D";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Index = () => {
  const projects = [
    {
      src: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Social Media Project",
    },
    {
      src: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Development Project",
    },
    {
      src: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "AI/Robotics Project",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const getVisibleProjects = () => {
    const visible = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + projects.length) % projects.length;
      visible.push({ ...projects[index], displayIndex: i + 1 });
    }
    return visible;
  };

  const visibleProjects = getVisibleProjects();

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center py-20 px-4">
       <div className="flex flex-col gap-8">
                   <Badge className="border border-solid border-[#58b368] bg-[#B5E8BE] text-green-700 hover:bg-[#A3D9A5] font-bold text-xl tracking-[-0.60px] w-fit px-[26px] py-[9px] rounded-[15px] h-auto [font-family:'Sora',Helvetica]">
                     Projects
                   </Badge>
                   </div>
<br /><br />
      
         <h2 className="[font-family:Sora] text-[clamp(28px,6vw,60px)] leading-[1.05]">
            <span className="font-extrabold text-black">Build Real Skills with </span>
            <span className="font-extrabold text-[#58b368]">Real &amp; Projects</span>
          </h2>
      
      <br /><br />
      <div
        className="relative w-full max-w-6xl h-[400px] flex items-center justify-center"
        style={{
          perspective: "1500px",
          perspectiveOrigin: "center center",
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center gap-8">
          {visibleProjects.map((project, index) => (
            <ProjectCard3D
              key={`${currentIndex}-${index}`}
              src={project.src}
              alt={project.alt}
              index={project.displayIndex}
              className="w-80 h-96"
            />
          ))}
        </div>
      </div>

      <div className="flex gap-4 mt-16">
        <button
          onClick={handlePrevious}
          className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg"
          aria-label="Previous"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={handleNext}
          className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg"
          aria-label="Next"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Index;
