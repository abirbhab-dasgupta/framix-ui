"use client"
import { motion, useMotionValue, useSpring } from "motion/react"
import React from "react"

import { useEffect, useState } from "react"
import TailwindCSS from "../icons/tailwindcss"
import { TechIcons } from "./tech-icons"
import { cn } from "@/lib/utils"

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
            <div className="w-6 h-6">{child}</div>
          </div>
        )
      })}
    </>
  )
}

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springX = useSpring(mouseX, { stiffness: 150, damping: 15 })
  const springY = useSpring(mouseY, { stiffness: 150, damping: 15 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      mouseX.set(clientX)
      mouseY.set(clientY)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

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

      {/* Mouse Following Blue Light */}
      <motion.div
        className="fixed w-5 h-5 pointer-events-none z-50 mix-blend-screen"
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

      {/* Enhanced Grid Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Main Grid Pattern */}
        <div className="absolute inset-0">
          {/* Light mode grid */}
          <div className="absolute inset-0 dark:hidden bg-[linear-gradient(rgba(0,0,0,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.08)_1px,transparent_1px)] bg-[size:40px_40px]" />

          {/* Dark mode grid */}
          <div className="absolute inset-0 hidden dark:block bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        {/* Subtle dot pattern overlay */}
        <div className="absolute inset-0">
          {/* Light mode dots */}
          <div className="absolute inset-0 dark:hidden bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15)_1px,transparent_1px)] bg-[size:80px_80px]" />

          {/* Dark mode dots */}
          <div className="absolute inset-0 hidden dark:block bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.2)_1px,transparent_1px)] bg-[size:80px_80px]" />
        </div>

        {/* Gradient fade at edges */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-transparent to-white/80 dark:from-black/80 dark:via-transparent dark:to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white/60 dark:from-black/60 dark:via-transparent dark:to-black/60" />

        {/* Strategic Gradient Orbs */}
        <div className="absolute top-1/4 left-1/5 w-64 h-64 bg-gradient-to-r from-sky-400/8 to-cyan-500/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-gradient-to-l from-blue-500/6 to-sky-400/6 rounded-full blur-3xl"></div>

        {/* Enhanced Accent Elements */}
        <div className="absolute top-20 right-20 w-2 h-2 bg-sky-400/40 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 left-32 w-1.5 h-1.5 bg-cyan-500/50 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-blue-400/40 rounded-full animate-bounce"></div>

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

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Hero Layout */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Content - Enhanced Typography */}
          <div className="xl:col-span-6 space-y-8 lg:space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Small Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-sky-50/80 to-blue-50/80 dark:from-sky-950/50 dark:to-blue-950/50 border border-sky-200/50 dark:border-sky-800/50 backdrop-blur-xl shadow-md">
                <div className="p-1 rounded-full shadow-sm">
                  <TailwindCSS className="h-3 w-3 text-white" />
                </div>
                <span className="text-xs font-medium text-sky-700 dark:text-sky-300">
                  Updated with Tailwind CSS 4.0!
                </span>
                <span className="px-2 py-0.5 text-xs font-bold text-white bg-gradient-to-r from-sky-500 to-cyan-500 rounded-full shadow-sm">
                  New
                </span>
              </div>

              {/* Main Headline */}
              <div className="relative">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl font-bold tracking-tight leading-[0.9]">
                  <span className="block text-zinc-900 dark:text-white mb-2">
                    Pixel-
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-cyan-500 to-blue-600">
                      Perfect
                    </span>
                  </span>
                  <span className="block text-zinc-900 dark:text-white mb-2">Components.</span>
                  <span className="block text-zinc-900 dark:text-white mb-2">Clean and</span>
                  <span className="block bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-cyan-500 to-blue-600">
                    Customizable.
                  </span>
                </h1>

                {/* Decorative Elements */}
                <div className="absolute -right-6 top-1/4 w-8 h-8 border-2 border-sky-400/30 rounded-full animate-spin"></div>
                <div className="absolute -left-8 bottom-1/4 w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-bounce"></div>
              </div>

              {/* Enhanced Description */}
              <div className="space-y-4">
                <p className="text-lg sm:text-md text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl">
                  Build modern, responsive interfaces with numerous handcrafted UI components powered by{" "}
                  <span className="text-cyan-500 font-medium">Tailwind CSS</span> and{" "}
                  <span className="text-cyan-500 font-medium">shadcn/ui</span>— perfect for React and Next.js projects.
                </p>

                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-sm text-zinc-500 dark:text-zinc-500">Powered by:</span>
                  {["Tailwind CSS", "shadcn/ui", "TypeScript", "React"].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-sky-50 dark:bg-sky-950/50 text-sky-700 dark:text-sky-300 rounded-full border border-sky-200/50 dark:border-sky-800/50 hover:bg-sky-100 dark:hover:bg-sky-900/50 transition-colors duration-200 cursor-pointer"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Atomic Orbits */}
          <div className="xl:col-span-6 relative">
            <div className="relative h-[700px] lg:h-[800px] flex items-center justify-center overflow-hidden">
              {/* Outer Orbit - GitHub & LinkedIn */}
              <OrbitingCircles iconSize={50} radius={200} duration={25} speed={1}>
                <div className="text-gray-800 dark:text-gray-200">{TechIcons.github()}</div>
                <div className="text-blue-600">{TechIcons.react()}</div>
                <div className="text-blue-600">{TechIcons.typescript()}</div>
              </OrbitingCircles>

              {/* Middle Orbit - Tailwind & Framer Motion */}
              <OrbitingCircles iconSize={45} radius={150} duration={20} reverse speed={1.2}>
                <div className="text-cyan-500">{TechIcons.tailwind()}</div>
                <div className="text-pink-500">{TechIcons.framerMotion()}</div>
              </OrbitingCircles>

              {/* Inner Orbit - shadcn/ui */}
              <OrbitingCircles iconSize={40} radius={100} duration={15} speed={1.5}>
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
