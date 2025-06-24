"use client"

import { cn } from "@/lib/utils"
import { motion, useAnimationControls, AnimatePresence } from "motion/react"
import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function CosmicPortalButton() {
  const [isHovered, setIsHovered] = useState(false)
  const [isEnteringPortal, setIsEnteringPortal] = useState(false)
  const [portalActive, setPortalActive] = useState(false)
  const buttonControls = useAnimationControls()
  const buttonRef = useRef<HTMLButtonElement>(null)

  // Generate stars
  const starCount = 30
  const stars = Array.from({ length: starCount }).map((_, i) => {
    const size = Math.random() * 2 + 1
    const angle = Math.random() * Math.PI * 2
    const distance = Math.random() * 20 + 5
    const delay = Math.random() * 3
    const duration = Math.random() * 3 + 3

    return {
      id: i,
      size,
      angle,
      distance,
      delay,
      duration,
      x: Math.cos(angle) * distance,
      y: Math.sin(angle) * distance,
    }
  })

  // Generate orbital particles
  const particleCount = 3
  const particles = Array.from({ length: particleCount }).map((_, i) => {
    const size = 4 + i * 1.5
    const delay = i * 0.2
    const duration = 3 + i * 0.5
    const offset = (i * Math.PI * 2) / particleCount

    return {
      id: i,
      size,
      delay,
      duration,
      offset,
    }
  })

  // Generate warp speed stars (contained within button)
  const warpStarCount = 40
  const warpStars = Array.from({ length: warpStarCount }).map((_, i) => {
    const size = Math.random() * 2 + 1
    const angle = Math.random() * Math.PI * 2
    const startDistance = Math.random() * 5 + 2
    const endDistance = Math.random() * 15 + 20
    const delay = Math.random() * 0.5

    return {
      id: i,
      size,
      angle,
      delay,
      x: Math.cos(angle) * startDistance,
      y: Math.sin(angle) * startDistance,
      endX: Math.cos(angle) * endDistance,
      endY: Math.sin(angle) * endDistance,
    }
  })

  const handleClick = async () => {
    if (portalActive) return

    setPortalActive(true)

    // Initial pulse animation
    await buttonControls.start({
      scale: [1, 0.97, 1.03, 1],
      transition: { duration: 0.5 },
    })

    // Start portal entry animation
    setIsEnteringPortal(true)

    // Reset after portal animation completes
    setTimeout(() => {
      setIsEnteringPortal(false)
      setPortalActive(false)
    }, 4000) // Total animation time (slightly longer than visible effects)
  }

  // Reset animation if component unmounts during animation
  useEffect(() => {
    return () => {
      setIsEnteringPortal(false)
      setPortalActive(false)
    }
  }, [])

  return (
    <motion.div
      className="relative"
      animate={buttonControls}
      onHoverStart={() => !portalActive && setIsHovered(true)}
      onHoverEnd={() => !portalActive && setIsHovered(false)}
    >
      <Button
        ref={buttonRef}
        className={cn(
          "relative min-w-48 h-14 overflow-hidden rounded-2xl border-0",
          "bg-transparent",
          "transition-all duration-500",
        )}
        onClick={handleClick}
        disabled={portalActive}
      >
        {/* Cosmic background with animated gradient */}
        <motion.div
          className={cn(
            "absolute inset-0 rounded-2xl",
            "bg-gradient-to-br from-indigo-950 via-violet-900 to-fuchsia-950",
            "dark:from-indigo-900 dark:via-violet-800 dark:to-fuchsia-900",
          )}
          animate={
            isEnteringPortal
              ? {
                  opacity: [1, 0.8, 0.6, 0.4, 0.2],
                }
              : {}
          }
          transition={
            isEnteringPortal
              ? {
                  duration: 3,
                  times: [0, 0.2, 0.4, 0.6, 1],
                }
              : {}
          }
        >
          {/* Animated nebula effect */}
          <motion.div
            className={cn(
              "absolute inset-0",
              "bg-[radial-gradient(ellipse_at_center,_rgba(156,39,176,0.3)_0%,_rgba(0,0,0,0)_70%)]",
              "dark:bg-[radial-gradient(ellipse_at_center,_rgba(186,104,200,0.3)_0%,_rgba(0,0,0,0)_70%)]",
            )}
            animate={{
              scale: isHovered || isEnteringPortal ? [1, 1.2, 1.1] : 1,
              opacity: isHovered || isEnteringPortal ? [0.5, 0.7, 0.6] : 0.5,
            }}
            transition={{
              duration: 3,
              repeat: isHovered || isEnteringPortal ? Number.POSITIVE_INFINITY : 0,
              repeatType: "reverse",
            }}
          />
        </motion.div>

        {/* Portal effect - contained within button */}
        <motion.div
          className={cn(
            "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
            "w-16 h-16 rounded-full",
            "bg-transparent",
            "flex items-center justify-center",
          )}
          animate={
            isEnteringPortal
              ? {
                  width: ["4rem", "5rem", "6rem", "7rem", "8rem"],
                  height: ["4rem", "5rem", "6rem", "7rem", "8rem"],
                }
              : {}
          }
          transition={
            isEnteringPortal
              ? {
                  duration: 3,
                  times: [0, 0.2, 0.4, 0.6, 1],
                }
              : {}
          }
        >
          {/* Outer glow ring */}
          <motion.div
            className={cn(
              "absolute w-full h-full rounded-full",
              "bg-transparent",
              "border-2 border-violet-300 dark:border-violet-400",
              "shadow-[0_0_15px_5px_rgba(139,92,246,0.3)] dark:shadow-[0_0_15px_5px_rgba(167,139,250,0.3)]",
            )}
            animate={
              isEnteringPortal
                ? {
                    rotate: [0, 720],
                    opacity: [0.9, 1, 0.8, 0.6, 0.4],
                    borderWidth: ["2px", "3px", "2px", "1px", "0px"],
                    boxShadow: [
                      "0 0 15px 5px rgba(139,92,246,0.3)",
                      "0 0 20px 8px rgba(139,92,246,0.4)",
                      "0 0 15px 5px rgba(139,92,246,0.3)",
                      "0 0 10px 3px rgba(139,92,246,0.2)",
                      "0 0 5px 2px rgba(139,92,246,0.1)",
                    ],
                  }
                : {
                    rotate: 360,
                    scale: isHovered ? [1, 1.05, 1] : 1,
                    opacity: isHovered ? 0.9 : 0.7,
                  }
            }
            transition={
              isEnteringPortal
                ? {
                    duration: 3,
                    times: [0, 0.2, 0.4, 0.7, 1],
                  }
                : {
                    rotate: { duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                    scale: { duration: 2, repeat: isHovered ? Number.POSITIVE_INFINITY : 0, repeatType: "reverse" },
                  }
            }
          />

          {/* Inner portal */}
          <motion.div
            className={cn(
              "absolute w-3/4 h-3/4 rounded-full",
              "bg-gradient-to-br from-violet-600/80 to-fuchsia-600/80",
              "dark:from-violet-500/80 dark:to-fuchsia-500/80",
              "shadow-[inset_0_0_15px_5px_rgba(139,92,246,0.3)] dark:shadow-[inset_0_0_15px_5px_rgba(167,139,250,0.3)]",
              "flex items-center justify-center",
            )}
            animate={
              isEnteringPortal
                ? {
                    scale: [1, 1.1, 1.2, 1.1, 1],
                    opacity: [0.8, 0.9, 1, 0.9, 0.8],
                    background: [
                      "linear-gradient(to bottom right, rgba(124, 58, 237, 0.8), rgba(192, 38, 211, 0.8))",
                      "linear-gradient(to bottom right, rgba(139, 92, 246, 0.9), rgba(217, 70, 239, 0.9))",
                      "linear-gradient(to bottom right, rgba(167, 139, 250, 1), rgba(232, 121, 249, 1))",
                      "linear-gradient(to bottom right, rgba(139, 92, 246, 0.9), rgba(217, 70, 239, 0.9))",
                      "linear-gradient(to bottom right, rgba(124, 58, 237, 0.8), rgba(192, 38, 211, 0.8))",
                    ],
                    boxShadow: [
                      "inset 0 0 15px 5px rgba(139,92,246,0.3)",
                      "inset 0 0 20px 8px rgba(139,92,246,0.4)",
                      "inset 0 0 25px 10px rgba(139,92,246,0.5)",
                      "inset 0 0 20px 8px rgba(139,92,246,0.4)",
                      "inset 0 0 15px 5px rgba(139,92,246,0.3)",
                    ],
                  }
                : {
                    scale: isHovered ? [1, 1.1, 1.05] : 1,
                    filter: isHovered ? "brightness(1.2)" : "brightness(1)",
                  }
            }
            transition={
              isEnteringPortal
                ? {
                    duration: 3,
                    times: [0, 0.25, 0.5, 0.75, 1],
                  }
                : {
                    duration: 2,
                    repeat: isHovered ? Number.POSITIVE_INFINITY : 0,
                    repeatType: "reverse",
                  }
            }
          >
            {/* Portal core */}
            <motion.div
              className={cn(
                "w-1/2 h-1/2 rounded-full",
                "bg-white dark:bg-violet-200",
                "shadow-[0_0_20px_10px_rgba(255,255,255,0.5)] dark:shadow-[0_0_20px_10px_rgba(237,233,254,0.5)]",
              )}
              animate={
                isEnteringPortal
                  ? {
                      scale: [1, 1.3, 1.5, 1.3, 1],
                      opacity: [0.7, 0.8, 1, 0.8, 0.7],
                      boxShadow: [
                        "0 0 20px 10px rgba(255,255,255,0.5)",
                        "0 0 25px 12px rgba(255,255,255,0.6)",
                        "0 0 30px 15px rgba(255,255,255,0.7)",
                        "0 0 25px 12px rgba(255,255,255,0.6)",
                        "0 0 20px 10px rgba(255,255,255,0.5)",
                      ],
                    }
                  : {
                      scale: isHovered ? [1, 1.2, 1] : 1,
                      opacity: isHovered ? 0.9 : 0.7,
                    }
              }
              transition={
                isEnteringPortal
                  ? {
                      duration: 3,
                      times: [0, 0.25, 0.5, 0.75, 1],
                    }
                  : {
                      duration: 2,
                      repeat: isHovered ? Number.POSITIVE_INFINITY : 0,
                      repeatType: "reverse",
                    }
              }
            />
          </motion.div>

          {/* Orbital particles */}
          {particles.map((particle) => (
            <motion.div
              key={`particle-${particle.id}`}
              className={cn(
                "absolute rounded-full",
                "bg-violet-300 dark:bg-violet-200",
                "shadow-[0_0_10px_2px_rgba(139,92,246,0.5)] dark:shadow-[0_0_10px_2px_rgba(167,139,250,0.5)]",
              )}
              animate={
                isEnteringPortal
                  ? {
                      rotate: [0, 360, 720, 1080],
                      scale: [1, 1.2, 1, 0.8, 1],
                      opacity: [1, 0.8, 1, 0.8, 1],
                      boxShadow: [
                        "0 0 10px 2px rgba(139,92,246,0.5)",
                        "0 0 15px 3px rgba(139,92,246,0.6)",
                        "0 0 10px 2px rgba(139,92,246,0.5)",
                        "0 0 5px 1px rgba(139,92,246,0.4)",
                        "0 0 10px 2px rgba(139,92,246,0.5)",
                      ],
                    }
                  : {
                      rotate: 360,
                      scale: isHovered ? [1, 1.2, 1] : 1,
                    }
              }
              transition={
                isEnteringPortal
                  ? {
                      duration: 3,
                      times: [0, 0.25, 0.5, 0.75, 1],
                    }
                  : {
                      rotate: {
                        duration: particle.duration,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                        delay: particle.delay,
                      },
                      scale: {
                        duration: 2,
                        repeat: isHovered ? Number.POSITIVE_INFINITY : 0,
                        repeatType: "reverse",
                      },
                    }
              }
              style={{
                width: particle.size,
                height: particle.size,
                transformOrigin: "center",
                offsetPath: `path("M 0,0 m -25,0 a 25,25 0 1,0 50,0 a 25,25 0 1,0 -50,0")`,
                offsetDistance: `${(particle.offset * 100) % 100}%`,
              }}
            />
          ))}
        </motion.div>

        {/* Stars */}
        {stars.map((star) => (
          <motion.div
            key={`star-${star.id}`}
            className={cn(
              "absolute left-1/2 top-1/2 rounded-full",
              "bg-white dark:bg-violet-100",
              "shadow-[0_0_5px_2px_rgba(255,255,255,0.3)] dark:shadow-[0_0_5px_2px_rgba(237,233,254,0.3)]",
            )}
            style={{ width: star.size, height: star.size }}
            initial={{
              x: 0,
              y: 0,
              opacity: 0,
              scale: 0,
            }}
            animate={
              isHovered || isEnteringPortal
                ? {
                    x: star.x,
                    y: star.y,
                    opacity: [0, 0.8, 0],
                    scale: [0, 1, 0],
                  }
                : {
                    x: 0,
                    y: 0,
                    opacity: 0,
                    scale: 0,
                  }
            }
            transition={
              isHovered || isEnteringPortal
                ? {
                    duration: star.duration,
                    delay: star.delay,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                  }
                : {
                    duration: 0.3,
                  }
            }
          />
        ))}

        {/* Warp speed effect (only visible during portal entry) */}
        <AnimatePresence>
          {isEnteringPortal && (
            <>
              {warpStars.map((star) => (
                <motion.div
                  key={`warp-${star.id}`}
                  className={cn(
                    "absolute left-1/2 top-1/2 rounded-full",
                    "bg-white dark:bg-violet-100",
                    "shadow-[0_0_3px_1px_rgba(255,255,255,0.5)] dark:shadow-[0_0_3px_1px_rgba(237,233,254,0.5)]",
                  )}
                  initial={{
                    x: star.x,
                    y: star.y,
                    opacity: 0,
                    scale: 0,
                  }}
                  animate={{
                    x: star.endX,
                    y: star.endY,
                    opacity: [0, 0.9, 0],
                    scale: [0, 1, 0],
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0,
                  }}
                  transition={{
                    duration: 1.5,
                    delay: star.delay,
                    repeat: 2,
                    repeatType: "loop",
                    times: [0, 0.1, 1],
                    ease: "easeOut",
                  }}
                  style={{ width: star.size, height: star.size }}
                />
              ))}
            </>
          )}
        </AnimatePresence>

        {/* Cosmic energy waves (only during portal entry) */}
        <AnimatePresence>
          {isEnteringPortal && (
            <>
              {[1, 2, 3].map((wave) => (
                <motion.div
                  key={`wave-${wave}`}
                  className={cn(
                    "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full",
                    "border border-violet-300/30 dark:border-violet-200/30",
                  )}
                  initial={{
                    width: 0,
                    height: 0,
                    opacity: 0,
                  }}
                  animate={{
                    width: ["0%", "150%", "0%"],
                    height: ["0%", "150%", "0%"],
                    opacity: [0, 0.5, 0],
                  }}
                  exit={{
                    opacity: 0,
                    width: 0,
                    height: 0,
                  }}
                  transition={{
                    duration: 2,
                    delay: wave * 0.5,
                    repeat: 1,
                    repeatType: "loop",
                    times: [0, 0.5, 1],
                    ease: "easeInOut",
                  }}
                />
              ))}
            </>
          )}
        </AnimatePresence>

        {/* Text with glow effect */}
        <motion.span
          className={cn(
            "relative z-10 font-semibold text-white dark:text-white",
            "text-shadow-[0_0_10px_rgba(255,255,255,0.5)] dark:text-shadow-[0_0_10px_rgba(255,255,255,0.5)]",
            "tracking-wider",
          )}
          animate={
            isEnteringPortal
              ? {
                  opacity: [1, 0.8, 0.6, 0.4, 0.2],
                  textShadow: [
                    "0 0 10px rgba(255,255,255,0.5)",
                    "0 0 15px rgba(255,255,255,0.7), 0 0 30px rgba(139,92,246,0.7)",
                    "0 0 20px rgba(255,255,255,0.9), 0 0 40px rgba(139,92,246,0.9)",
                    "0 0 15px rgba(255,255,255,0.7), 0 0 30px rgba(139,92,246,0.7)",
                    "0 0 10px rgba(255,255,255,0.5)",
                  ],
                }
              : {
                  textShadow: isHovered
                    ? "0 0 10px rgba(255,255,255,0.8), 0 0 20px rgba(139,92,246,0.6)"
                    : "0 0 10px rgba(255,255,255,0.5)",
                }
          }
          transition={
            isEnteringPortal
              ? {
                  duration: 3,
                  times: [0, 0.25, 0.5, 0.75, 1],
                }
              : {}
          }
        >
          EXPLORE COSMOS
        </motion.span>
      </Button>

      {/* Bottom reflection/glow */}
      <motion.div
        className={cn(
          "absolute -bottom-4 left-1/2 -translate-x-1/2",
          "w-3/4 h-3 rounded-full blur-md",
          "bg-violet-500/30 dark:bg-violet-400/30",
        )}
        animate={
          isEnteringPortal
            ? {
                width: ["75%", "85%", "90%", "85%", "75%"],
                opacity: [0.3, 0.4, 0.5, 0.4, 0.3],
                height: [3, 4, 5, 4, 3],
              }
            : {
                width: isHovered ? "80%" : "75%",
                opacity: isHovered ? 0.5 : 0.3,
              }
        }
        transition={
          isEnteringPortal
            ? {
                duration: 3,
                times: [0, 0.25, 0.5, 0.75, 1],
              }
            : { duration: 1 }
        }
      />
    </motion.div>
  )
}
