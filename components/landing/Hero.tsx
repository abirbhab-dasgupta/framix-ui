"use client"
import { motion, useMotionValue, useSpring } from "motion/react"
import React from "react"

import { useEffect, useState } from "react"
import TailwindCSS from "../icons/tailwindcss"
import { TechIcons } from "./tech-icons"
import { cn } from "@/lib/utils"

// Custom hook for responsive values
function useResponsiveOrbitSizes() {
  const [sizes, setSizes] = useState({
    outerIconSize: 50,
    outerRadius: 200,
    middleIconSize: 45,
    middleRadius: 150,
    innerIconSize: 40,
    innerRadius: 100,
  })

  useEffect(() => {
    function updateSizes() {
      const width = window.innerWidth
      if (width < 375) {
        setSizes({
          outerIconSize: 28,
          outerRadius: 90,
          middleIconSize: 24,
          middleRadius: 65,
          innerIconSize: 20,
          innerRadius: 45,
        })
      } else if (width < 480) {
        setSizes({
          outerIconSize: 32,
          outerRadius: 110,
          middleIconSize: 28,
          middleRadius: 80,
          innerIconSize: 24,
          innerRadius: 55,
        })
      } else if (width < 640) {
        setSizes({
          outerIconSize: 35,
          outerRadius: 120,
          middleIconSize: 30,
          middleRadius: 90,
          innerIconSize: 25,
          innerRadius: 60,
        })
      } else if (width < 768) {
        setSizes({
          outerIconSize: 40,
          outerRadius: 150,
          middleIconSize: 35,
          middleRadius: 110,
          innerIconSize: 30,
          innerRadius: 75,
        })
      } else if (width < 1024) {
        setSizes({
          outerIconSize: 45,
          outerRadius: 180,
          middleIconSize: 40,
          middleRadius: 130,
          innerIconSize: 35,
          innerRadius: 85,
        })
      } else {
        setSizes({
          outerIconSize: 50,
          outerRadius: 200,
          middleIconSize: 45,
          middleRadius: 150,
          innerIconSize: 40,
          innerRadius: 100,
        })
      }
    }

    updateSizes()
    window.addEventListener('resize', updateSizes)
    return () => window.removeEventListener('resize', updateSizes)
  }, [])

  return sizes
}

// Orbiting Circles Component (based on your reference)
export interface OrbitingCirclesProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  children?: React.ReactNode
  reverse?: boolean
  duration?: number
  delay?: number
  radius?: number
  path?: boolean
  iconSize?: number
  speed?: number
}

export function OrbitingCircles({
  className,
  children,
  reverse,
  duration = 20,
  radius = 160,
  path = true,
  iconSize = 30,
  speed = 1,
  delay = 0,
  ...props
}: OrbitingCirclesProps) {
  const calculatedDuration = duration / speed
  return (
    <>
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="pointer-events-none absolute inset-0 size-full"
        >
          <circle
            className="stroke-black/40 stroke-1 dark:stroke-white/40"
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
            strokeDasharray="4 4"
          />
        </svg>
      )}
      {React.Children.map(children, (child, index) => {
        const angle = (360 / React.Children.count(children)) * index
        return (
          <div
            key={index}
            style={
              {
                "--duration": `${calculatedDuration}s`,
                "--radius": `${radius}px`,
                "--angle": `${angle}deg`,
                "--icon-size": `${iconSize}px`,
                animationDelay: `${delay}s`,
              } as React.CSSProperties
            }
            className={cn(
              `absolute flex size-[var(--icon-size)] transform-gpu animate-orbit items-center justify-center rounded-full bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm border border-zinc-200/50 dark:border-zinc-700/50 shadow-lg hover:shadow-xl transition-all duration-300`,
              { "[animation-direction:reverse]": reverse },
              className,
            )}
            {...props}
          >
            <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6">{child}</div>
          </div>
        )
      })}
    </>
  )
}

const HeroSection = () => {
  const [isTouchDevice, setIsTouchDevice] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const orbitSizes = useResponsiveOrbitSizes()

  const springX = useSpring(mouseX, { stiffness: 150, damping: 15 })
  const springY = useSpring(mouseY, { stiffness: 150, damping: 15 })

  useEffect(() => {
    // Detect touch device
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0)

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      mouseX.set(clientX)
      mouseY.set(clientY)
    }

    // Only add mouse events for non-touch devices
    if (!isTouchDevice) {
      window.addEventListener("mousemove", handleMouseMove)
      return () => window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [mouseX, mouseY, isTouchDevice])

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-white dark:bg-black/5">
      {/* Add the orbit animation CSS */}
      <style jsx global>{`
        @keyframes orbit {
          0% {
            transform: rotate(var(--angle)) translateX(var(--radius)) rotate(calc(-1 * var(--angle)));
          }
          100% {
            transform: rotate(calc(var(--angle) + 360deg)) translateX(var(--radius)) rotate(calc(-1 * (var(--angle) + 360deg)));
          }
        }
        
        .animate-orbit {
          animation: orbit var(--duration) linear infinite;
        }
      `}</style>

      {/* Mouse Following Blue Light - Only on non-touch devices */}
      {!isTouchDevice && (
        <motion.div
          className="fixed w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 pointer-events-none z-50 mix-blend-screen"
          style={{
            x: springX,
            y: springY,
            translateX: "-50%",
            translateY: "-50%",
          }}
        >
          <div className="w-full h-full bg-gradient-to-r from-sky-400 to-cyan-500 rounded-full blur-sm opacity-60 animate-pulse"></div>
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-sky-300 to-cyan-400 rounded-full blur-lg opacity-20"></div>
        </motion.div>
      )}

      {/* Enhanced Grid Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Main Grid Pattern */}
        <div className="absolute inset-0">
          {/* Light mode grid */}
          <div className="absolute inset-0 dark:hidden bg-[linear-gradient(rgba(0,0,0,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.08)_1px,transparent_1px)] bg-[size:20px_20px] sm:bg-[size:30px_30px] md:bg-[size:40px_40px]" />

          {/* Dark mode grid */}
          <div className="absolute inset-0 hidden dark:block bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] sm:bg-[size:30px_30px] md:bg-[size:40px_40px]" />
        </div>

        {/* Subtle dot pattern overlay */}
        <div className="absolute inset-0">
          {/* Light mode dots */}
          <div className="absolute inset-0 dark:hidden bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15)_1px,transparent_1px)] bg-[size:40px_40px] sm:bg-[size:60px_60px] md:bg-[size:80px_80px]" />

          {/* Dark mode dots */}
          <div className="absolute inset-0 hidden dark:block bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.2)_1px,transparent_1px)] bg-[size:40px_40px] sm:bg-[size:60px_60px] md:bg-[size:80px_80px]" />
        </div>

        {/* Gradient fade at edges */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-transparent to-white/80 dark:from-black/80 dark:via-transparent dark:to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white/60 dark:from-black/60 dark:via-transparent dark:to-black/60" />

        {/* Strategic Gradient Orbs */}
        <div className="absolute top-1/4 left-1/5 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-gradient-to-r from-sky-400/8 to-cyan-500/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 sm:w-36 sm:h-36 md:w-48 md:h-48 bg-gradient-to-l from-blue-500/6 to-sky-400/6 rounded-full blur-3xl"></div>

        {/* Enhanced Accent Elements */}
        <div className="absolute top-10 right-10 sm:top-16 sm:right-16 md:top-20 md:right-20 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-sky-400/40 rounded-full animate-ping"></div>
        <div className="absolute bottom-16 left-16 sm:bottom-24 sm:left-24 md:bottom-32 md:left-32 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-cyan-500/50 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 right-1/3 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-blue-400/40 rounded-full animate-bounce"></div>

        {/* Additional subtle accent dots */}
        <div
          className="absolute top-1/3 left-1/4 w-1 h-1 bg-sky-300/30 rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-1/4 right-1/5 w-1.5 h-1.5 bg-cyan-400/25 rounded-full animate-ping"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Responsive CSS for extra small screens */}
      <style jsx>{`
        @media (max-width: 480px) {
          .hero-container {
            padding: 1rem 0.75rem !important;
          }
          .hero-title {
            font-size: 1.5rem !important;
            line-height: 1.1 !important;
          }
          .hero-description {
            font-size: 0.875rem !important;
            line-height: 1.4 !important;
          }
        }
        @media (max-width: 375px) {
          .hero-container {
            padding: 0.75rem 0.5rem !important;
          }
          .hero-title {
            font-size: 1.375rem !important;
            line-height: 1.15 !important;
          }
          .hero-description {
            font-size: 0.8rem !important;
            line-height: 1.4 !important;
          }
        }
        @media (max-width: 320px) {
          .hero-container {
            padding: 0.5rem 0.375rem !important;
          }
          .hero-title {
            font-size: 1.25rem !important;
            line-height: 1.2 !important;
          }
          .hero-description {
            font-size: 0.75rem !important;
            line-height: 1.4 !important;
          }
          .hero-badge {
            font-size: 0.625rem !important;
            padding: 0.25rem 0.5rem !important;
          }
          .hero-tech-tags {
            font-size: 0.625rem !important;
            padding: 0.125rem 0.375rem !important;
          }
        }
        @media (min-width: 1024px) and (max-width: 1365px) {
          .hero-title {
            font-size: 3rem !important;
            line-height: 1.1 !important;
          }
          .hero-description {
            font-size: 1rem !important;
            line-height: 1.5 !important;
          }
        }
        @media (min-width: 1366px) and (max-width: 1535px) {
          .hero-title {
            font-size: 3.5rem !important;
            line-height: 1.1 !important;
          }
          .hero-description {
            font-size: 1.125rem !important;
            line-height: 1.5 !important;
          }
        }
        @media (min-width: 1536px) {
          .hero-title {
            font-size: 4rem !important;
            line-height: 1.1 !important;
          }
        }
      `}</style>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto hero-container px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20">
        {/* Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-12 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-center min-h-[calc(100vh-8rem)] sm:min-h-[calc(100vh-8rem)] lg:min-h-[calc(100vh-10rem)]">
          {/* Left Content - Enhanced Typography */}
          <div className="lg:col-span-1 xl:col-span-6 space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-8 xl:space-y-10 order-1 lg:order-1 text-center lg:text-left w-full max-w-full">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="space-y-4 sm:space-y-6 lg:space-y-6 xl:space-y-8 w-full"
            >
              {/* Small Badge */}
              <div className="inline-flex items-center justify-center lg:justify-start gap-1 sm:gap-1.5 md:gap-2 px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-full bg-gradient-to-r from-sky-50/80 to-blue-50/80 dark:from-sky-950/50 dark:to-blue-950/50 border border-sky-200/50 dark:border-sky-800/50 backdrop-blur-xl shadow-md">
                <div className="p-0.5 sm:p-1 rounded-full shadow-sm">
                  <TailwindCSS className="h-2 w-2 sm:h-2.5 sm:w-2.5 md:h-3 md:w-3 text-white" />
                </div>
                <span className="hero-badge text-[9px] sm:text-[10px] md:text-xs font-medium text-sky-700 dark:text-sky-300 whitespace-nowrap">
                  Updated with Tailwind CSS 4.0!
                </span>
                <span className="hero-badge px-1 sm:px-1.5 md:px-2 py-0.5 text-[8px] sm:text-[9px] md:text-xs font-bold text-white bg-gradient-to-r from-sky-500 to-cyan-500 rounded-full shadow-sm">
                  New
                </span>
              </div>

              {/* Main Headline */}
              <div className="relative">
                <h1 className="hero-title text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold tracking-tight leading-[1.1] sm:leading-[1.05] md:leading-[1.0] lg:leading-[1.1] xl:leading-[1.05]">
                  <span className="block text-zinc-900 dark:text-white mb-1 sm:mb-2">
                    Pixel-
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-cyan-500 to-blue-600">
                      Perfect
                    </span>
                  </span>
                  <span className="block text-zinc-900 dark:text-white mb-1 sm:mb-2">Components.</span>
                  <span className="block text-zinc-900 dark:text-white mb-1 sm:mb-2">Clean and</span>
                  <span className="block bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-cyan-500 to-blue-600">
                    Customizable.
                  </span>
                </h1>

                {/* Decorative Elements */}
                <div className="absolute -right-3 sm:-right-4 md:-right-6 top-1/4 w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 border-2 border-sky-400/30 rounded-full animate-spin"></div>
                <div className="absolute -left-4 sm:-left-6 md:-left-8 bottom-1/4 w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-bounce"></div>
              </div>

              {/* Enhanced Description */}
              <div className="space-y-3 sm:space-y-4">
                <p className="hero-description text-sm sm:text-base md:text-lg lg:text-base xl:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-full lg:max-w-2xl xl:max-w-3xl">
                  Build modern, responsive interfaces with numerous handcrafted UI components powered by{" "}
                  <span className="text-cyan-500 font-medium">Tailwind CSS</span> and{" "}
                  <span className="text-cyan-500 font-medium">shadcn/ui</span>— perfect for React and Next.js projects.
                </p>

                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-1 sm:gap-1.5 md:gap-2">
                  <span className="text-[10px] sm:text-xs md:text-sm text-zinc-500 dark:text-zinc-500">Powered by:</span>
                  {["Tailwind CSS", "shadcn/ui", "TypeScript", "React"].map((tech) => (
                    <span
                      key={tech}
                      className="hero-tech-tags px-1.5 sm:px-2 md:px-3 py-0.5 sm:py-1 text-[9px] sm:text-[10px] md:text-xs font-medium bg-sky-50 dark:bg-sky-950/50 text-sky-700 dark:text-sky-300 rounded-full border border-sky-200/50 dark:border-sky-800/50 hover:bg-sky-100 dark:hover:bg-sky-900/50 transition-colors duration-200 cursor-pointer whitespace-nowrap"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Atomic Orbits */}
          <div className="lg:col-span-1 xl:col-span-6 relative order-2 lg:order-2">
            <div className="relative h-[280px] xs:h-[320px] sm:h-[380px] md:h-[450px] lg:h-[480px] xl:h-[550px] 2xl:h-[650px] flex items-center justify-center overflow-hidden mx-auto max-w-[90vw] lg:max-w-none">
              {/* Outer Orbit - GitHub & LinkedIn */}
              <OrbitingCircles 
                iconSize={orbitSizes.outerIconSize} 
                radius={orbitSizes.outerRadius} 
                duration={25} 
                speed={1}
              >
                <div className="text-gray-800 dark:text-gray-200">{TechIcons.github()}</div>
                <div className="text-blue-600">{TechIcons.react()}</div>
                <div className="text-blue-600">{TechIcons.typescript()}</div>
              </OrbitingCircles>

              {/* Middle Orbit - Tailwind & Framer Motion */}
              <OrbitingCircles 
                iconSize={orbitSizes.middleIconSize} 
                radius={orbitSizes.middleRadius} 
                duration={20} 
                reverse 
                speed={1.2}
              >
                <div className="text-cyan-500">{TechIcons.tailwind()}</div>
                <div className="text-pink-500">{TechIcons.framerMotion()}</div>
              </OrbitingCircles>

              {/* Inner Orbit - shadcn/ui */}
              <OrbitingCircles 
                iconSize={orbitSizes.innerIconSize} 
                radius={orbitSizes.innerRadius} 
                duration={15} 
                speed={1.5}
              >
                <div className="text-gray-700 dark:text-gray-300">{TechIcons.shadcn()}</div>
              </OrbitingCircles>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
