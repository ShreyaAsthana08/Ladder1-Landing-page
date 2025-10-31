"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Badge } from "./ui/badge"
import { Separator } from "./ui/separator"
import type { JSX } from "react/jsx-runtime"

gsap.registerPlugin(ScrollTrigger)

type Feature = {
  number: string
  subtitle: string
  title: { green: string; black: string }
  description: string
  image: string
  imagePosition: "left" | "right"
}

const features: Feature[] = [
  {
    number: "1",
    subtitle: "Chart Your Journey",
    title: { green: "AI Roadmaps", black: " — Custom Paths to Mastery" },
    description:
      "Ladder1's AI Roadmaps guide you step by step through your coding journey. Each path adapts to your skills and progress, ensuring you learn efficiently from fundamentals to advanced mastery.",
    image: "/rectangle-21982-1.svg",
    imagePosition: "right",
  },
  {
    number: "2",
    subtitle: "AI Projects Hub",
    title: { green: "Experience-First ", black: "Learning for Future-Ready Skills" },
    description:
      "Turn your learning into action with AI-curated projects that simulate real-world challenges. Projects adapt to your level with personalized feedback and growth insights.",
    image: "/rectangle-21982-5.svg",
    imagePosition: "left",
  },
  {
    number: "3",
    subtitle: "Decode Smarter",
    title: { green: "AI Analyzer ", black: "— Code Understanding at Scale" },
    description:
      "The AI Analyzer scans submissions, detects logic gaps, and provides instant, human-like feedback so you write cleaner, optimized, industry-ready code.",
    image: "/rectangle-21982-3.svg",
    imagePosition: "right",
  },
  {
    number: "4",
    subtitle: "Learn. Test. Improve.",
    title: { green: "AI Quiz", black: " — Smart Learning with Real-Time Insights" },
    description:
      "Adaptive quizzes evolve based on your answers, helping you spot weak areas instantly and sharpen concepts with precision.",
    image: "/rectangle-21982.svg",
    imagePosition: "left",
  },
  {
    number: "5",
    subtitle: "Conquer the MAANG Path",
    title: { green: "Maangic Mountains ", black: "— Curated MAANG Company Problems" },
    description:
      "Solve handpicked coding problems inspired by real MAANG challenges and boost your confidence for high-impact interviews.",
    image: "/rectangle-21982-6.svg",
    imagePosition: "right",
  },
  {
    number: "6",
    subtitle: "Prove Your Mastery",
    title: { green: "Certifications", black: " — Industry Recognition" },
    description:
      "Earn verifiable certifications that showcase your skills and stand out to recruiters and tech companies.",
    image: "/rectangle-21982-2.svg",
    imagePosition: "left",
  },
  {
    number: "7",
    subtitle: "Level Up & Earn",
    title: { green: "Battlepass Rewards ", black: "— Unlock Premium Perks" },
    description:
      "Complete tasks, earn XP, and unlock rewards — turning your coding journey into a gamified experience that celebrates progress.",
    image: "/rectangle-21982-4.svg",
    imagePosition: "right",
  },
]

// Controls
const STAGE_H = 850
const STEP = 950
const ENTER_Y = 500
const PIN_TOP = 40
const SCALE_STEP = 0.05
const FADE_STEP = 0.15

export const FeaturesSection = (): JSX.Element => {
  const pinRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".contact-feature-card")
      if (!cards.length) return

      const imgs = Array.from(document.images)
      const ready = imgs.length
        ? Promise.allSettled(
            imgs.map((img) =>
              img.complete
                ? Promise.resolve(1)
                : new Promise((res) => {
                    img.addEventListener("load", () => res(1), { once: true })
                    img.addEventListener("error", () => res(1), { once: true })
                  }),
            ),
          )
        : Promise.resolve(1)

      ready.then(() => {
        cards.forEach((card, i) => {
          const z = 100 + (cards.length - i)
          gsap.set(card, {
            position: "absolute",
            left: "50%",
            top: 0,
            xPercent: -50,
            y: i === 0 ? 0 : ENTER_Y,
            scale: 1,
            opacity: i === 0 ? 1 : 0,
            zIndex: z,
            transformOrigin: "center top",
          })
        })

        const TOTAL_SCROLL = (cards.length - 1) * STEP

        const tl = gsap.timeline({
          defaults: { ease: "power2.inOut", duration: 1 },
          scrollTrigger: {
            trigger: pinRef.current,
            start: `top+=${PIN_TOP} top`,
            end: `+=${TOTAL_SCROLL}`,
            scrub: true,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        })

        for (let i = 1; i < cards.length; i++) {
          const curr = cards[i]

          tl.set(curr, { zIndex: 1000 + i }, "+=0")
            .to(curr, { y: 0, opacity: 1 }, "<")
            .to(
              cards.slice(0, i),
              {
                scale: (index, el) => {
                  const k = cards.indexOf(el as HTMLElement)
                  const depth = i - 1 - k
                  return 1 - depth * SCALE_STEP
                },
                opacity: (index, el) => {
                  const k = cards.indexOf(el as HTMLElement)
                  const depth = i - 1 - k
                  return 1 - depth * FADE_STEP
                },
              },
              "<",
            )
        }

        ScrollTrigger.refresh()
      })
    }, pinRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="relative w-full bg-white py-16 sm:py-24 md:py-32">
      <div className="container mx-auto max-w-[1400px] px-4">
        {/* Header */}
        <header className="flex flex-col items-center gap-4 sm:gap-6 max-w-[877px] mx-auto text-center">
          <Badge className="inline-flex items-center justify-center px-6 py-2 rounded-[15px] border border-[#58b368] bg-[#B5E8BE] hover:bg-[#D1F3D0]">
            <span className="font-sora font-bold text-[#2d5735] text-lg sm:text-xl">
              Features
            </span>
          </Badge>

          <h2 className="font-sora font-extrabold text-[clamp(28px,5vw,58px)] leading-tight text-black">
            Smarter Tools for{" "}
            <span className="text-[#58b368]">Learning & Upskilling</span>
          </h2>
        </header>

        {/* Pinned Cards Section */}
        <div
          ref={pinRef}
          className="relative w-full mt-16 sm:mt-24 md:mt-32 overflow-hidden"
          style={{ height: STAGE_H }}
        >
          <div className="absolute inset-0 pointer-events-none">
            {features.map((f) => (
              <article
                key={f.number}
                className="contact-feature-card absolute w-full bg-white rounded-[20px] sm:rounded-[24px] shadow-[0_18px_60px_rgba(0,0,0,0.1)] ring-1 ring-black/5 pointer-events-auto overflow-hidden"
                style={{ minHeight: STAGE_H }}
              >
                <div
                  className={`flex flex-col-reverse lg:flex-row ${
                    f.imagePosition === "left" ? "lg:flex-row-reverse" : ""
                  } items-center gap-6 sm:gap-8 lg:gap-12 xl:gap-16 p-6 sm:p-8 lg:p-12`}
                >
                  {/* Text Content */}
                  <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8 text-center lg:text-left lg:w-[520px]">
                    <span className="font-sora font-extrabold text-[56px] sm:text-[80px] md:text-[112px] leading-none text-black">
                      {f.number}
                    </span>
                    <p className="font-sora text-[#454545] text-sm sm:text-base md:text-lg">
                      {f.subtitle}
                    </p>
                    <Separator className="bg-[#454545]/80 w-[120px] sm:w-[180px] md:w-[220px] mx-auto lg:mx-0" />
                    <h3 className="font-sora font-bold text-2xl sm:text-3xl md:text-[38px] leading-tight">
                      <span className="text-[#40934f]">{f.title.green}</span>
                      <span className="text-black">{f.title.black}</span>
                    </h3>
                    <p className="font-sora text-[#454545] text-sm sm:text-base md:text-lg leading-relaxed">
                      {f.description}
                    </p>
                  </div>

                  {/* Image */}
                  <div className="flex items-center justify-center w-full lg:w-auto">
                    <img
                      src={f.image || "/placeholder.svg"}
                      alt={`Feature ${f.number}`}
                      loading="lazy"
                      decoding="async"
                      className="w-full max-w-[480px] sm:max-w-[600px] md:max-w-[710px] h-auto object-contain"
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
