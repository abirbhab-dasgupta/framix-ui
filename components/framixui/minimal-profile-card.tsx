"use client"

import { motion } from "motion/react"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, Dot, Sparkles, Coffee, Code, Palette } from "lucide-react"

export default function MinimalProfileCard() {
  const interests = [
    { icon: Code, label: "Development" },
    { icon: Palette, label: "Design" },
    { icon: Coffee, label: "Coffee" },
  ]

  return (
    <div className="w-full max-w-sm mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative group"
      >
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm hover:shadow-lg transition-all duration-300">
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 dark:from-blue-950/20 dark:via-transparent dark:to-purple-950/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <div className="relative z-10">
            {/* Header */}
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-3">
                <motion.div
                  className="relative"
                  whileHover={{ rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300 flex items-center justify-center">
                    <span className="text-white dark:text-slate-900 font-bold text-lg">M</span>
                  </div>
                  <motion.div
                    className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  >
                    <Sparkles className="w-2 h-2 text-white" />
                  </motion.div>
                </motion.div>

                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100">Maya Chen</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Frontend Engineer</p>
                </div>
              </div>

              <motion.div
                className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <Dot className="w-4 h-4 text-green-500 animate-pulse" />
                Online
              </motion.div>
            </div>

            {/* Bio */}
            <motion.p
              className="text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Building delightful user experiences with clean code and thoughtful design. Currently exploring the
              intersection of AI and creativity.
            </motion.p>

            {/* Interests */}
            <div className="mb-6">
              <motion.div
                className="flex gap-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {interests.map((interest, index) => (
                  <motion.div
                    key={interest.label}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-full text-xs text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <interest.icon className="w-3 h-3" />
                    {interest.label}
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Stats */}
            <motion.div
              className="flex justify-between items-center mb-6 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="text-center">
                <div className="text-lg font-semibold text-slate-900 dark:text-slate-100">42</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">Projects</div>
              </div>
              <div className="w-px h-8 bg-slate-200 dark:bg-slate-700" />
              <div className="text-center">
                <div className="text-lg font-semibold text-slate-900 dark:text-slate-100">1.2k</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">Followers</div>
              </div>
              <div className="w-px h-8 bg-slate-200 dark:bg-slate-700" />
              <div className="text-center">
                <div className="text-lg font-semibold text-slate-900 dark:text-slate-100">4.8</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">Rating</div>
              </div>
            </motion.div>

            {/* Action button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button className="w-full bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-200 group">
                View Portfolio
                <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
