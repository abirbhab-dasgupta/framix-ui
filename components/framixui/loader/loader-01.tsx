"use client"

import { motion } from "motion/react"

export default function Loader01() {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="relative w-24 h-24">
        {/* Main morphing shape */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
          animate={{
            borderRadius: [
              "50% 50% 50% 50%",
              "60% 40% 60% 40%",
              "60% 60% 40% 40%",
              "40% 60% 60% 40%",
              "50% 50% 50% 50%",
            ],
            rotate: [0, 90, 180, 270, 360],
            scale: [1, 1.1, 0.9, 1.1, 1],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {/* Inner morphing element */}
        <motion.div
          className="absolute inset-3 bg-gradient-to-l from-orange-400 via-red-400 to-pink-400 rounded-full opacity-80"
          animate={{
            borderRadius: ["50% 50% 50% 50%", "40% 60% 40% 60%", "60% 40% 60% 40%", "50% 50% 50% 50%"],
            rotate: [360, 270, 180, 90, 0],
            scale: [1, 0.8, 1.2, 0.9, 1],
          }}
          transition={{
            duration: 2.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {/* Core dot */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-3 h-3 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2 shadow-lg"
          animate={{
            scale: [1, 1.5, 0.5, 1.2, 1],
            opacity: [1, 0.8, 1, 0.9, 1],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  )
}
