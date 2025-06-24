"use client"

import { motion } from "motion/react"

export default function Loader02() {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="relative w-28 h-28">
        {/* Liquid drops */}
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className="absolute w-5 h-5 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full"
            style={{
              left: "50%",
              top: "50%",
              transformOrigin: "center",
            }}
            animate={{
              x: [
                0,
                Math.cos((index * 120 * Math.PI) / 180) * 35,
                Math.cos(((index * 120 + 180) * Math.PI) / 180) * 35,
                0,
              ],
              y: [
                0,
                Math.sin((index * 120 * Math.PI) / 180) * 35,
                Math.sin(((index * 120 + 180) * Math.PI) / 180) * 35,
                0,
              ],
              scale: [1, 1.5, 0.8, 1.2, 1],
              borderRadius: ["50%", "60% 40%", "40% 60%", "50%"],
            }}
            transition={{
              duration: 2.5,
              repeat: Number.POSITIVE_INFINITY,
              delay: index * 0.3,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Central liquid blob */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-10 h-10 bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500 transform -translate-x-1/2 -translate-y-1/2"
          animate={{
            borderRadius: ["50%", "60% 40% 60% 40%", "40% 60% 40% 60%", "60% 40% 60% 40%", "50%"],
            scale: [1, 1.2, 0.8, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {/* Ripple effect */}
        <motion.div
          className="absolute top-1/2 left-1/2 border-2 border-cyan-300 rounded-full transform -translate-x-1/2 -translate-y-1/2"
          animate={{
            width: [0, 80, 0],
            height: [0, 80, 0],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeOut",
          }}
        />
      </div>
    </div>
  )
}
