"use client";
import React, { useRef, useEffect, useState } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

export const MobileContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const scaleDimensions = () => (isMobile ? [0.85, 1] : [1, 1.05]);

  const rotate = useTransform(scrollYProgress, [0, 1], [25, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <div
      ref={containerRef}
      className="h-[40vh] flex items-center justify-center relative py-12"
    >
      <div
        className="relative w-full flex items-center justify-center"
        style={{
          perspective: "1000px",
        }}
      >
        <MobileHeader translate={translate} titleComponent={titleComponent} />
        <MobileFrame rotate={rotate} scale={scale}>
          {children}
        </MobileFrame>
      </div>
    </div>
  );
};

export const MobileHeader = ({
  translate,
  titleComponent,
}: {
  translate: MotionValue<number>;
  titleComponent: React.ReactNode;
}) => (
  <motion.div
    style={{ translateY: translate }}
    className="text-center mb-6 md:mb-10"
  >
    {titleComponent}
  </motion.div>
);

export const MobileFrame = ({
  rotate,
  scale,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          "0 4px 8px rgba(0,0,0,0.25), 0 15px 25px rgba(0,0,0,0.3), 0 40px 50px rgba(0,0,0,0.2)",
      }}
      className="relative w-[280px] h-[550px] bg-black rounded-[40px] border-[6px] border-gray-800 shadow-xl overflow-hidden flex flex-col items-center justify-center"
    >
      {/* Camera Dot */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-gray-900 rounded-full flex items-center justify-center">
        <div className="w-2 h-2 bg-gray-600 rounded-full" />
      </div>

      {/* Screen */}
      <div className="mt-6 mb-4 w-[94%] h-[90%] rounded-[32px] bg-gray-100 dark:bg-zinc-900 overflow-hidden shadow-inner">
        {children}
      </div>
    </motion.div>
  );
};
