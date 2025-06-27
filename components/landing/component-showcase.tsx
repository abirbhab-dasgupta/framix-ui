"use client"

import { motion } from "motion/react"
import { Code2, Palette, Zap, Shield } from "lucide-react"
import PaymentSuccess from "../framixui/payment-success"

const features = [
  {
    icon: Code2,
    text: "TypeScript Ready",
  },
  {
    icon: Palette,
    text: "Fully Customizable",
  },
  {
    icon: Zap,
    text: "Lightning Fast",
  },
  {
    icon: Shield,
    text: "Accessible",
  },
]

export default function ComponentShowcase() {
  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-16">
      {/* Section Header */}
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
            Beautiful Components
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-gray-600 dark:text-gray-400 mb-2"
        >
          Copy-paste components built with modern web standards
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm text-gray-500 dark:text-gray-500"
        >
          components / payment-success
        </motion.p>
      </div>

      {/* Component Showcase */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative mb-16"
      >
        {/* Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-3xl blur-xl" />

        {/* Component Container */}
        <div className="relative bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-8 md:p-12 border border-gray-200 dark:border-gray-800">
          <PaymentSuccess />
        </div>
      </motion.div>

      {/* Features */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="flex flex-wrap justify-center gap-6 md:gap-8"
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
            className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400"
          >
            <feature.icon className="w-4 h-4" />
            <span>{feature.text}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
