import { cn } from "@/lib/utils";

interface ProjectCard3DProps {
  src: string;
  alt: string;
  index: number;
  className?: string;
}

export function ProjectCard3D({ src, alt, index, className }: ProjectCard3DProps) {
  const getTransform = () => {
    switch (index) {
      case 0: // Left card
        return {
          transform: "translateX(-120%) rotateY(25deg) scale(0.85)",
          opacity: 0.7,
          zIndex: 1,
        };
      case 1: // Center card
        return {
          transform: "translateX(0) rotateY(0deg) scale(1)",
          opacity: 1,
          zIndex: 10,
        };
      case 2: // Right card
        return {
          transform: "translateX(120%) rotateY(-25deg) scale(0.85)",
          opacity: 0.7,
          zIndex: 1,
        };
      default:
        return {
          transform: "translateX(0) rotateY(0deg) scale(1)",
          opacity: 1,
          zIndex: 1,
        };
    }
  };

  const cardStyle = getTransform();

  return (
    <div
      className={cn(
        "absolute rounded-2xl overflow-hidden bg-card shadow-2xl transition-all duration-700 ease-out",
        className
      )}
      style={{
        ...cardStyle,
        transformStyle: "preserve-3d",
        boxShadow: index === 1 
          ? "0 30px 80px -20px rgba(0, 0, 0, 0.4)" 
          : "0 20px 60px -15px rgba(0, 0, 0, 0.3)",
      }}
    >
      <div className="relative w-full h-full">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          style={{
            transformStyle: "preserve-3d",
          }}
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
          style={{
            transformStyle: "preserve-3d",
          }}
        />
      </div>
    </div>
  );
}
