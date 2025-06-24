"use client"

import { motion } from "motion/react"

export default function Loader05() {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="relative w-28 h-28">
        {/* Animated strokes */}
        {[0, 1, 2, 3].map((index) => (
          <motion.div
            key={index}
            className="absolute top-1/2 left-1/2 origin-center"
            style={{
              width: "2px",
              height: "28px",
              background: `linear-gradient(to bottom, ${
                index === 0
                  ? "#3b82f6, #1d4ed8"
                  : index === 1
                    ? "#8b5cf6, #7c3aed"
                    : index === 2
                      ? "#ec4899, #db2777"
                      : "#f97316, #ea580c"
              })`,
              borderRadius: "1px",
              transform: `translate(-50%, -50%) rotate(${index * 90}deg) translateY(-35px)`,
            }}
            animate={{
              scaleY: [1, 1.5, 0.5, 1.2, 1],
              opacity: [0.4, 1, 0.6, 0.9, 0.4],
            }}
            transition={{
              duration: 1.2,
              repeat: Number.POSITIVE_INFINITY,
              delay: index * 0.15,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Diagonal strokes */}
        {[0, 1, 2, 3].map((index) => (
          <motion.div
            key={`diagonal-${index}`}
            className="absolute top-1/2 left-1/2 origin-center"
            style={{
              width: "1.5px",
              height: "22px",
              background: `linear-gradient(to bottom, ${
                index === 0
                  ? "#06b6d4, #0891b2"
                  : index === 1
                    ? "#10b981, #059669"
                    : index === 2
                      ? "#f59e0b, #d97706"
                      : "#ef4444, #dc2626"
              })`,
              borderRadius: "1px",
              transform: `translate(-50%, -50%) rotate(${45 + index * 90}deg) translateY(-28px)`,
            }}
            animate={{
              scaleY: [0.5, 1.2, 0.8, 1, 0.5],
              opacity: [0.3, 0.8, 0.5, 0.7, 0.3],
            }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              delay: 0.6 + index * 0.1,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Central pulse */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-3 h-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transform -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: [1, 1.5, 1],
            boxShadow: [
              "0 0 0 0 rgba(99, 102, 241, 0.4)",
              "0 0 0 12px rgba(99, 102, 241, 0)",
              "0 0 0 0 rgba(99, 102, 241, 0)",
            ],
          }}
          transition={{
            duration: 1.8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  )
}
