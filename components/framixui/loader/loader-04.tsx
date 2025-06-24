"use client"

import { motion } from "motion/react"

export default function Loader04() {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="relative w-24 h-24">
        {/* Main gradient ring */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: "conic-gradient(from 0deg, #3b82f6, #8b5cf6, #ec4899, #f97316, #3b82f6)",
            padding: "4px",
          }}
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          <div className="w-full h-full bg-white dark:bg-gray-900 rounded-full" />
        </motion.div>

        {/* Inner rotating ring */}
        <motion.div
          className="absolute inset-2 rounded-full"
          style={{
            background: "conic-gradient(from 180deg, #06b6d4, #10b981, #f59e0b, #ef4444, #06b6d4)",
            padding: "3px",
          }}
          animate={{
            rotate: [360, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          <div className="w-full h-full bg-white dark:bg-gray-900 rounded-full" />
        </motion.div>

        {/* Pulsing center */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-5 h-5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transform -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 1,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {/* Outer glow effect */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-sm"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.8, 0.5],
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
