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

/** Controls */
const STAGE_H = 880 // pinned stage height (≈ tallest card)
const STEP = 1000 // px scroll per card handoff
const ENTER_Y = 500 // px start offset of incoming card
const PIN_TOP = 40 // px offset for sticky header
const SCALE_STEP = 0.05 // depth scale
const FADE_STEP = 0.99 // depth opacity

export const FeaturesSection = (): JSX.Element => {
  const pinRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".contact-feature-card")
      if (!cards.length) return

      // Wait for images (avoid mis-measured pin/ends)
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
        // INITIAL: card #1 on top; others slightly below and hidden
        cards.forEach((card, i) => {
          const z = 100 + (cards.length - i) // #1 highest
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
            .to(curr, { y: 0, opacity: 100 }, "<")
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
    <section className="relative w-full bg-white py-[80px] sm:py-[110px]">
      <div className="container mx-auto max-w-[1400px] px-4">
        {/* Header */}
        <header className="flex flex-col items-center gap-4 sm:gap-6 max-w-[877px] mx-auto text-center">
          <Badge 
      className="inline-flex items-center justify-center px-[26px] py-[9px] rounded-[15px] border border-solid border-[#58b368] bg-[#B5E8BE] hover:bg-[#D1F3D0]">
        <span className="[font-family:'Sora',Helvetica] font-bold text-[#2d5735] text-xl tracking-[-0.60px] leading-[normal]">
                  Features
                </span>
              </Badge>
              <br /><br />

          <h2 className="[font-family:'Sora',Helvetica] text-[clamp(28px,6vw,64px)] leading-[1.05]">
            <span className="font-extrabold text-black">Smarter Tools for </span>
            <span className="font-extrabold text-[#58b368]">Learning &amp; Upskilling</span>
          </h2>
        </header>

        {/* Pinned Stage */}
        <div ref={pinRef} className="relative w-full mt-20 sm:mt-[120px] overflow-hidden" style={{ height: STAGE_H }}>
          <div className="absolute inset-0 pointer-events-none">
            {features.map((f) => (
              <article
                key={f.number}
                className="contact-feature-card absolute w-full max-w-auto bg-white rounded-[20px] sm:rounded-[28px] shadow-[0_18px_60px_rgba(0,0,0,0.12)] ring-1 ring-black/5 pointer-events-auto overflow-hidden"
                style={{ minHeight: STAGE_H }}
              >
                <div
                  className={`flex flex-col xl:flex-row items-stretch gap-6 xl:gap-[48px] p-6 sm:p-8 xl:p-[48px] ${
                    f.imagePosition === "left" ? "xl:flex-row-reverse" : ""
                  }`}
                >
                  {/* Text */}
                  <div className="flex flex-col gap-4 sm:gap-6 relative xl:w-[520px]">
                    <div className="flex items-center">
                      <span className="[font-family:'Sora',Helvetica] font-extrabold text-black text-[72px] sm:text-[112px] leading-none">
                        {f.number}
                      </span>
                    </div>

                    <div className="pt-1 sm:pt-2">
                      <p className="[font-family:'Lato',Helvetica] text-[#454545] text-base sm:text-lg">{f.subtitle}</p>
                    </div>

                    <Separator className="bg-[#454545]/80 w-[160px] sm:w-[220px]" />

                    <h3 className="[font-family:'Sora',Helvetica] font-bold text-[28px] sm:text-[38px] leading-tight">
                      <span className="text-[#40934f]">{f.title.green}</span>
                      <span className="text-black">{f.title.black}</span>
                    </h3>

                    <p className="[font-family:'Lato',Helvetica] text-[#454545] text-base sm:text-lg leading-relaxed">
                      {f.description}
                    </p>
                  </div>

                  {/* Image */}
                  <div className="flex items-center justify-center xl:justify-end flex-1">
                    <img
                      className={`w-full max-w-[710px] h-auto sm:h-[620px] lg:h-[720px] object-cover ${
                        f.imagePosition === "left" ? "-rotate-0" : ""
                      }`}
                      alt={`Feature ${f.number}`}
                      src={f.image || "/placeholder.svg"}
                      loading="lazy"
                      decoding="async"
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
