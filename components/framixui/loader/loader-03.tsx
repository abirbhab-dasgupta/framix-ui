"use client"

import { motion } from "motion/react"

export default function Loader03() {
  const particles = Array.from({ length: 12 }, (_, i) => i)

  return (
    <div className="flex items-center justify-center p-8">
      <div className="relative w-32 h-32">
        {particles.map((particle) => (
          <motion.div
            key={particle}
            className="absolute w-2 h-2 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full"
            style={{
              left: "50%",
              top: "50%",
              transformOrigin: "center",
            }}
            animate={{
              x: [
                0,
                Math.cos((particle * 30 * Math.PI) / 180) * 45,
                Math.cos(((particle * 30 + 180) * Math.PI) / 180) * 28,
                0,
              ],
              y: [
                0,
                Math.sin((particle * 30 * Math.PI) / 180) * 45,
                Math.sin(((particle * 30 + 180) * Math.PI) / 180) * 28,
                0,
              ],
              scale: [0, 1, 1.5, 0.5, 0],
              opacity: [0, 1, 0.8, 0.4, 0],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: particle * 0.1,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Central energy core */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-4 h-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 shadow-lg"
          animate={{
            scale: [1, 1.3, 0.7, 1],
            boxShadow: [
              "0 0 0 0 rgba(139, 92, 246, 0.7)",
              "0 0 0 10px rgba(139, 92, 246, 0)",
              "0 0 0 0 rgba(139, 92, 246, 0)",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {/* Orbital rings */}
        {[0, 1].map((ring) => (
          <motion.div
            key={ring}
            className="absolute top-1/2 left-1/2 border border-purple-300 rounded-full transform -translate-x-1/2 -translate-y-1/2"
            style={{
              width: 50 + ring * 25,
              height: 50 + ring * 25,
            }}
            animate={{
              rotate: ring % 2 === 0 ? [0, 360] : [360, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 4 + ring,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </div>
    </div>
  )
}
