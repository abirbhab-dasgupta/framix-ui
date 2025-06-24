"use client"

import { motion } from "motion/react"

export default function FlowingCurvesBackground() {
  return (
    <div className=" inset-0 overflow-hidden bg-gradient-to-br from-white via-slate-50 to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">
      {/* Animated SVG curves */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="curve1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0.1" />
            <stop offset="100%" stopColor="rgb(139, 92, 246)" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient id="curve2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgb(6, 182, 212)" stopOpacity="0.08" />
            <stop offset="100%" stopColor="rgb(16, 185, 129)" stopOpacity="0.04" />
          </linearGradient>
          <linearGradient id="curve3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgb(236, 72, 153)" stopOpacity="0.06" />
            <stop offset="100%" stopColor="rgb(245, 101, 101)" stopOpacity="0.03" />
          </linearGradient>
        </defs>

        {/* First flowing curve */}
        <motion.path
          d="M0,400 Q300,200 600,400 T1200,400 L1200,800 L0,800 Z"
          fill="url(#curve1)"
          animate={{
            d: [
              "M0,400 Q300,200 600,400 T1200,400 L1200,800 L0,800 Z",
              "M0,350 Q300,150 600,350 T1200,350 L1200,800 L0,800 Z",
              "M0,450 Q300,250 600,450 T1200,450 L1200,800 L0,800 Z",
              "M0,400 Q300,200 600,400 T1200,400 L1200,800 L0,800 Z",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {/* Second flowing curve */}
        <motion.path
          d="M0,500 Q400,300 800,500 T1200,500 L1200,800 L0,800 Z"
          fill="url(#curve2)"
          animate={{
            d: [
              "M0,500 Q400,300 800,500 T1200,500 L1200,800 L0,800 Z",
              "M0,550 Q400,350 800,550 T1200,550 L1200,800 L0,800 Z",
              "M0,450 Q400,250 800,450 T1200,450 L1200,800 L0,800 Z",
              "M0,500 Q400,300 800,500 T1200,500 L1200,800 L0,800 Z",
            ],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        {/* Third flowing curve */}
        <motion.path
          d="M0,600 Q200,400 400,600 T800,600 T1200,600 L1200,800 L0,800 Z"
          fill="url(#curve3)"
          animate={{
            d: [
              "M0,600 Q200,400 400,600 T800,600 T1200,600 L1200,800 L0,800 Z",
              "M0,650 Q200,450 400,650 T800,650 T1200,650 L1200,800 L0,800 Z",
              "M0,550 Q200,350 400,550 T800,550 T1200,550 L1200,800 L0,800 Z",
              "M0,600 Q200,400 400,600 T800,600 T1200,600 L1200,800 L0,800 Z",
            ],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </svg>

      {/* Floating orbs */}
      {Array.from({ length: 6 }, (_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-xl"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + (i % 2) * 40}%`,
            width: `${60 + i * 20}px`,
            height: `${60 + i * 20}px`,
            background: `radial-gradient(circle, ${
              i % 3 === 0
                ? "rgba(59, 130, 246, 0.1)"
                : i % 3 === 1
                  ? "rgba(139, 92, 246, 0.1)"
                  : "rgba(6, 182, 212, 0.1)"
            } 0%, transparent 70%)`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 6 + i,
            repeat: Number.POSITIVE_INFINITY,
            delay: i * 0.5,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5QzkyQUMiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxLjUiLz48L2c+PC9nPjwvc3ZnPg==')]" />
    </div>
  )
}
