"use client"

import { motion, useAnimationControls } from "motion/react"
import { PartyPopper, Sparkles } from "lucide-react"
import { useState } from "react"

export default function Button05() {
  const [isActive, setIsActive] = useState(false)
  const controls = useAnimationControls()

  const handleClick = async () => {
    if (isActive) return

    setIsActive(true)

    // Animate with more dynamic effects
    await controls.start({
      scale: [1, 1.1, 0.95, 1.02, 1],
      rotateZ: [0, -2, 2, -1, 0],
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    })

    // Reset after animation
    setTimeout(() => {
      setIsActive(false)
    }, 4000)
  }

  // Enhanced confetti colors with neon vibes
  const confettiColors = [
    "bg-gradient-to-r from-pink-400 to-rose-500",
    "bg-gradient-to-r from-purple-400 to-indigo-500", 
    "bg-gradient-to-r from-yellow-300 to-orange-400",
    "bg-gradient-to-r from-blue-400 to-cyan-500",
    "bg-gradient-to-r from-green-400 to-emerald-500",
    "bg-gradient-to-r from-red-400 to-pink-500",
    "bg-gradient-to-r from-orange-400 to-yellow-500",
    "bg-gradient-to-r from-teal-400 to-blue-500",
    "bg-gradient-to-r from-violet-400 to-purple-500",
    "bg-gradient-to-r from-lime-400 to-green-500"
  ]

  const solidColors = [
    "bg-pink-400", "bg-purple-400", "bg-yellow-400", "bg-blue-400", 
    "bg-green-400", "bg-red-400", "bg-orange-400", "bg-teal-400",
    "bg-violet-400", "bg-lime-400", "bg-cyan-400", "bg-rose-400"
  ]

  return (
    <div>
      <motion.div className="relative" animate={controls}>
        <motion.button
          className="relative min-w-40 h-10 px-6 overflow-visible rounded-xl
                     bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600
                     hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500
                     text-white font-semibold text-sm
                     shadow-lg shadow-purple-500/25
                     border border-white/10
                     backdrop-blur-sm
                     transition-all duration-200
                     hover:shadow-purple-500/40
                     active:scale-95"
          onClick={handleClick}
          whileHover={{ 
            scale: 1.03,
            boxShadow: "0 0 20px rgba(168, 85, 247, 0.4)"
          }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Animated background glow */}
          <motion.div
            className="absolute inset-0 rounded-xl opacity-60"
            animate={{
              background: isActive 
                ? [
                    "linear-gradient(45deg, #4f46e5, #7c3aed, #ec4899)",
                    "linear-gradient(90deg, #ec4899, #4f46e5, #7c3aed)", 
                    "linear-gradient(135deg, #7c3aed, #ec4899, #4f46e5)",
                    "linear-gradient(180deg, #4f46e5, #7c3aed, #ec4899)"
                  ]
                : "linear-gradient(45deg, #4f46e5, #7c3aed, #ec4899)"
            }}
            transition={{ duration: 2, repeat: isActive ? Infinity : 0 }}
          />

          {/* Button content */}
          <span className="relative flex items-center justify-center gap-2 z-10">
            <motion.div
              animate={{
                rotate: isActive ? [0, 20, -20, 15, -15, 0] : 0,
                scale: isActive ? [1, 1.2, 1.1, 1.1, 1] : 1,
              }}
              transition={{ duration: 0.8 }}
            >
            </motion.div>
            <motion.span
              animate={{
                scale: isActive ? [1, 1.05, 1] : 1,
              }}
              transition={{ duration: 0.4 }}
            >
              {isActive ? "Hooray!" : "Celebrate"}
            </motion.span>
          </span>

          {/* Pulse effect */}
          {isActive && (
            <motion.div
              className="absolute inset-0 rounded-xl bg-white"
              initial={{ opacity: 0.2, scale: 1 }}
              animate={{ 
                opacity: [0.2, 0, 0.1, 0],
                scale: [1, 1.3, 1.8, 2] 
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          )}

          {/* Enhanced confetti particles */}
          {isActive && (
            <>
              {/* Explosive burst particles */}
              {Array.from({ length: 25 }).map((_, i) => {
                const size = Math.random() * 8 + 3
                const angle = (360 / 25) * i + Math.random() * 20
                const distance = Math.random() * 80 + 50
                const x = Math.cos(angle * Math.PI / 180) * distance
                const y = Math.sin(angle * Math.PI / 180) * distance
                const delay = Math.random() * 0.2
                const duration = Math.random() * 0.6 + 1
                const colorIndex = Math.floor(Math.random() * confettiColors.length)

                return (
                  <motion.div
                    key={`burst-${i}`}
                    className={`absolute top-1/2 left-1/2 rounded-full ${confettiColors[colorIndex]} shadow-lg`}
                    initial={{
                      x: 0,
                      y: 0,
                      opacity: 1,
                      scale: 0,
                      rotate: 0,
                    }}
                    animate={{
                      x,
                      y,
                      opacity: [1, 1, 0],
                      scale: [0, 1, 0.3],
                      rotate: Math.random() * 360,
                    }}
                    transition={{
                      duration,
                      delay,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    style={{ width: size, height: size }}
                  />
                )
              })}

              {/* Floating hearts */}
              {Array.from({ length: 5 }).map((_, i) => {
                const x = (Math.random() - 0.5) * 120
                const y = -Math.random() * 100 - 30
                const delay = Math.random() * 0.3
                const duration = Math.random() * 0.8 + 1.5

                return (
                  <motion.div
                    key={`heart-${i}`}
                    className="absolute top-1/2 left-1/2 text-red-400 text-lg"
                    initial={{
                      x: 0,
                      y: 0,
                      opacity: 1,
                      scale: 0,
                    }}
                    animate={{
                      x,
                      y,
                      opacity: [1, 1, 0],
                      scale: [0, 1, 0.5],
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration,
                      delay,
                      ease: "easeOut",
                    }}
                  >
                    💖
                  </motion.div>
                )
              })}

              {/* Star particles */}
              {Array.from({ length: 8 }).map((_, i) => {
                const angle = Math.random() * 360
                const distance = Math.random() * 70 + 40
                const x = Math.cos(angle * Math.PI / 180) * distance
                const y = Math.sin(angle * Math.PI / 180) * distance
                const delay = Math.random() * 0.3
                const duration = Math.random() * 0.8 + 1.2

                return (
                  <motion.div
                    key={`star-${i}`}
                    className="absolute top-1/2 left-1/2 text-yellow-300 text-base"
                    initial={{
                      x: 0,
                      y: 0,
                      opacity: 1,
                      scale: 0,
                      rotate: 0,
                    }}
                    animate={{
                      x,
                      y,
                      opacity: [1, 1, 0],
                      scale: [0, 1.2, 0],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration,
                      delay,
                      ease: "easeOut",
                    }}
                  >
                    ⭐
                  </motion.div>
                )
              })}

              {/* Glowing orbs */}
              {Array.from({ length: 15 }).map((_, i) => {
                const size = Math.random() * 6 + 2
                const angle = Math.random() * 360
                const distance = Math.random() * 90 + 50
                const x = Math.cos(angle * Math.PI / 180) * distance
                const y = Math.sin(angle * Math.PI / 180) * distance
                const delay = Math.random() * 0.4
                const duration = Math.random() * 1 + 1.5
                const colorIndex = Math.floor(Math.random() * solidColors.length)

                return (
                  <motion.div
                    key={`orb-${i}`}
                    className={`absolute top-1/2 left-1/2 rounded-full ${solidColors[colorIndex]} shadow-lg`}
                    style={{
                      boxShadow: `0 0 ${size * 2}px currentColor`,
                      filter: 'blur(0.5px)',
                      width: size, height: size,
                    }}
                    initial={{
                      x: 0,
                      y: 0,
                      opacity: 1,
                      scale: 0,
                    }}
                    animate={{
                      x,
                      y,
                      opacity: [1, 0.8, 0],
                      scale: [0, 1, 0.2],
                    }}
                    transition={{
                      duration,
                      delay,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                  />
                )
              })}

              {/* Spiral confetti */}
              {Array.from({ length: 8 }).map((_, i) => {
                const spiralAngle = (i / 8) * 360 * 2 // 2 full rotations
                const radius = 40 + (i / 8) * 50
                const x = Math.cos(spiralAngle * Math.PI / 180) * radius
                const y = Math.sin(spiralAngle * Math.PI / 180) * radius
                const delay = i * 0.08
                const duration = 1.5
                const colorIndex = Math.floor(Math.random() * solidColors.length)

                return (
                  <motion.div
                    key={`spiral-${i}`}
                    className={`absolute top-1/2 left-1/2 w-2 h-6 ${solidColors[colorIndex]} rounded-full`}
                    initial={{
                      x: 0,
                      y: 0,
                      opacity: 1,
                      scale: 0,
                      rotate: 0,
                    }}
                    animate={{
                      x,
                      y,
                      opacity: [1, 1, 0],
                      scale: [0, 1, 0.3],
                      rotate: spiralAngle + 180,
                    }}
                    transition={{
                      duration,
                      delay,
                      ease: "easeOut",
                    }}
                  />
                )
              })}
            </>
          )}
        </motion.button>

        {/* Ambient glow effect */}
        <motion.div
          className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500/15 via-purple-500/15 to-pink-500/15 blur-lg -z-10"
          animate={{
            scale: isActive ? [1, 1.2, 1.1] : 1,
            opacity: isActive ? [0.3, 0.5, 0.2] : 0.3,
          }}
          transition={{ duration: 0.8 }}
        />
      </motion.div>
    </div>
  )
}