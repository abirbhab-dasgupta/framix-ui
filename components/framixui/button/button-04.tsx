"use client"

import type React from "react"
import { motion, useAnimationControls } from "motion/react"
import { MousePointer, Sparkles } from "lucide-react"
import { useState, useEffect } from "react"

export default function Button04() {
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([])
  const [isHovered, setIsHovered] = useState(false)
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; delay: number }[]>([])
  const buttonControls = useAnimationControls()

  // Generate floating particles
  useEffect(() => {
    if (isHovered) {
      const newParticles = Array.from({ length: 8 }, (_, i) => ({
        id: Date.now() + i,
        x: Math.random() * 160,
        y: Math.random() * 48,
        delay: Math.random() * 0.5
      }))
      setParticles(newParticles)
    } else {
      setParticles([])
    }
  }, [isHovered])

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget
    const rect = button.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const newRipple = {
      id: Date.now(),
      x,
      y,
    }

    setRipples([...ripples, newRipple])

    setTimeout(() => {
      setRipples((current) => current.filter((ripple) => ripple.id !== newRipple.id))
    }, 1500)

    buttonControls.start({
      scale: [1, 0.95, 1.05, 1],
      rotateX: [0, -5, 5, 0],
      transition: { duration: 0.4, ease: "easeInOut" },
    })
  }

  return (
    <div >
      {/* Ambient background effects */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <motion.div 
        animate={buttonControls}
        style={{ perspective: 1000 }}
      >
        <motion.button
          className="relative min-w-40 h-12 px-6 overflow-hidden group cursor-pointer"
          onClick={handleClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          whileHover={{ 
            scale: 1.05,
            rotateY: 5,
            z: 50
          }}
          whileTap={{ 
            scale: 0.95,
            rotateX: -10
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          style={{
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%)",
            backgroundSize: "300% 300%",
            transformStyle: "preserve-3d"
          }}
        >
          {/* Animated gradient background */}
          <motion.div
            className="absolute inset-0 opacity-80"
            animate={{
              backgroundPosition: isHovered ? ["0% 0%", "100% 100%"] : ["100% 100%", "0% 0%"]
            }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
            style={{
              background: "linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #ffeaa7, #dda0dd)",
              backgroundSize: "400% 400%",
              borderRadius: "12px"
            }}
          />

          {/* Glassmorphism overlay */}
          <div className="absolute inset-0 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl shadow-2xl" />

          {/* Holographic effect */}
          <motion.div
            className="absolute inset-0 rounded-xl"
            animate={{
              background: isHovered 
                ? ["linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)",
                   "linear-gradient(225deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)"]
                : "transparent"
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />

          {/* Dynamic ripple effects */}
          {ripples.map((ripple) => (
            <motion.div
              key={ripple.id}
              className="absolute rounded-full pointer-events-none"
              initial={{
                width: 0,
                height: 0,
                x: ripple.x,
                y: ripple.y,
                opacity: 1,
              }}
              animate={{
                width: [0, 100, 200],
                height: [0, 100, 200],
                x: ripple.x - 100,
                y: ripple.y - 100,
                opacity: [1, 0.6, 0],
              }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              style={{
                background: "radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.4) 30%, rgba(255,255,255,0.1) 60%, transparent 100%)",
                filter: "blur(1px)"
              }}
            />
          ))}

          {/* Floating particles */}
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute w-1 h-1 pointer-events-none"
              style={{
                left: particle.x,
                top: particle.y,
                background: "radial-gradient(circle, #fff 0%, transparent 70%)"
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                y: [0, -20],
                x: [0, Math.random() * 20 - 10]
              }}
              transition={{
                duration: 2,
                delay: particle.delay,
                repeat: Infinity,
              }}
            />
          ))}

          {/* Neon glow effect */}
          <div 
            className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              boxShadow: "inset 0 0 20px rgba(255,255,255,0.2), 0 0 40px rgba(138, 43, 226, 0.4), 0 0 80px rgba(138, 43, 226, 0.2)"
            }}
          />

          {/* Content */}
          <span className="relative flex items-center justify-center gap-3 font-semibold text-white text-sm tracking-wider z-10">
            <motion.div
              animate={isHovered ? {
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              } : {}}
              transition={{
                duration: 2,
                repeat: isHovered ? Infinity : 0,
                ease: "linear"
              }}
            >
              <div className="relative">
                <MousePointer className="w-4 h-4 drop-shadow-lg" />
                {isHovered && (
                  <motion.div
                    className="absolute -top-1 -right-1"
                    animate={{
                      scale: [0, 1, 0],
                      rotate: [0, 180, 360]
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: 0.5
                    }}
                  >
                    <Sparkles className="w-2 h-2 text-yellow-300" />
                  </motion.div>
                )}
              </div>
            </motion.div>
            
            <motion.span
              animate={{
                textShadow: isHovered 
                  ? ["0 0 10px rgba(255,255,255,0.8)", "0 0 20px rgba(255,255,255,0.4)", "0 0 10px rgba(255,255,255,0.8)"]
                  : "0 0 5px rgba(255,255,255,0.3)"
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              CLICK ME
            </motion.span>
          </span>

          {/* Edge lighting */}
          <motion.div
            className="absolute inset-0 rounded-xl border-2 border-transparent"
            animate={{
              borderImage: isHovered
                ? "linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #ffeaa7) 1"
                : "none"
            }}
            style={{
              borderImageSlice: 1,
            }}
          />

          {/* Corner accents */}
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 border-2 border-white/50"
              style={{
                top: i < 2 ? -1 : "auto",
                bottom: i >= 2 ? -1 : "auto",
                left: i % 2 === 0 ? -1 : "auto",
                right: i % 2 === 1 ? -1 : "auto",
                borderRadius: i % 2 === 0 ? "0 0 4px 0" : "0 0 0 4px"
              }}
              animate={{
                opacity: isHovered ? [0.5, 1, 0.5] : 0.3,
                scale: isHovered ? [1, 1.5, 1] : 1
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          ))}
        </motion.button>
      </motion.div>
    </div>
  )
}