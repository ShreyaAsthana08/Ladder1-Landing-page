"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { useRef } from "react";

interface ProjectCard3DProps {
  src: string;
  alt: string;
  index: number;
  className?: string;
}

export function ProjectCard3D({ src, alt, index, className }: ProjectCard3DProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Mouse tracking for tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [0, 1], [15, -15]);
  const rotateY = useTransform(x, [0, 1], [-15, 15]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;

    const posX = (e.clientX - rect.left) / rect.width;
    const posY = (e.clientY - rect.top) / rect.height;

    x.set(posX);
    y.set(posY);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  const getTransform = () => {
    switch (index) {
      case 0:
        return {
          x: "-120%",
          rotateY: 25,
          scale: 0.85,
          opacity: 0.7,
          zIndex: 1,
        };
      case 1:
        return {
          x: "0%",
          rotateY: 0,
          scale: 1,
          opacity: 1,
          zIndex: 10,
        };
      case 2:
        return {
          x: "120%",
          rotateY: -25,
          scale: 0.85,
          opacity: 0.7,
          zIndex: 1,
        };
      default:
        return {
          x: "0%",
          rotateY: 0,
          scale: 1,
          opacity: 1,
          zIndex: 1,
        };
    }
  };

  const transform = getTransform();

  return (
    <motion.div
      ref={ref}
      className={cn(
        "absolute rounded-2xl overflow-hidden bg-card ",
        className
      )}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1200px",
      }}
      animate={{
        x: transform.x,
        rotateY: transform.rotateY,
        scale: transform.scale,
        opacity: transform.opacity,
      }}
      transition={{
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1.0],
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        transition={{ type: "spring", stiffness: 120, damping: 15 }}
        className="relative w-full h-full"
      >
        <motion.img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          style={{
            transformStyle: "preserve-3d",
          }}
          whileHover={{
            scale: 1.05,
          }}
          transition={{ type: "spring", stiffness: 150, damping: 15 }}
        />

        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
          initial={{ opacity: 0.5 }}
          whileHover={{ opacity: 0.7 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
}
