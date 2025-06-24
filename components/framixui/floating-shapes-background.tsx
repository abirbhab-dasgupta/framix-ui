"use client"

import { motion } from "motion/react"

export default function FloatingShapesBackground() {
  const shapes = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    size: Math.random() * 60 + 20,
    x: Math.random() * 100,
    y: Math.random() * 100,
    rotation: Math.random() * 360,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }))

  return (
    <div className=" inset-0 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            "radial-gradient(circle at 20% 80%, #3b82f6 0%, transparent 50%)",
            "radial-gradient(circle at 80% 20%, #8b5cf6 0%, transparent 50%)",
            "radial-gradient(circle at 40% 40%, #06b6d4 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      {/* Floating shapes */}
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute"
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            width: shape.size,
            height: shape.size,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            rotate: [shape.rotation, shape.rotation + 180, shape.rotation + 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: shape.duration,
            repeat: Number.POSITIVE_INFINITY,
            delay: shape.delay,
            ease: "easeInOut",
          }}
        >
          {shape.id % 3 === 0 && (
            <div className="w-full h-full bg-gradient-to-br from-blue-400/20 to-purple-600/20 dark:from-blue-400/10 dark:to-purple-600/10 rounded-full backdrop-blur-sm border border-white/20 dark:border-white/10" />
          )}
          {shape.id % 3 === 1 && (
            <div className="w-full h-full bg-gradient-to-br from-cyan-400/20 to-teal-600/20 dark:from-cyan-400/10 dark:to-teal-600/10 rounded-lg backdrop-blur-sm border border-white/20 dark:border-white/10 rotate-45" />
          )}
          {shape.id % 3 === 2 && (
            <div
              className="w-full h-full bg-gradient-to-br from-violet-400/20 to-pink-600/20 dark:from-violet-400/10 dark:to-pink-600/10 backdrop-blur-sm border border-white/20 dark:border-white/10 transform rotate-12"
              style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
            />
          )}
        </motion.div>
      ))}

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/50 via-transparent to-white/30 dark:from-slate-900/50 dark:via-transparent dark:to-slate-900/30" />
    </div>
  )
}
