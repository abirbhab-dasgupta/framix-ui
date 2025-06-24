"use client"

import { motion } from "motion/react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, MessageSquare, Share2, MapPin, Briefcase, Clock, TrendingUp, Award } from "lucide-react"

export default function EnhancedGlassmorphismProfileCard() {
  const achievements = [
    { icon: Award, label: "Top Contributor", color: "text-yellow-500" },
    { icon: TrendingUp, label: "Rising Star", color: "text-green-500" },
    { icon: Heart, label: "Community Favorite", color: "text-red-500" },
  ]

  return (
    <div className="w-full max-w-sm mx-auto min-h-screen flex items-center justify-center p-4">
      {/* Background pattern for better glassmorphism visibility */}
      <div className="inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(59,130,246,0.1),transparent_70%)] dark:bg-[radial-gradient(circle_at_25%_25%,rgba(59,130,246,0.05),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(168,85,247,0.1),transparent_70%)] dark:bg-[radial-gradient(circle_at_75%_75%,rgba(168,85,247,0.05),transparent_70%)]" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10"
      >
        {/* Enhanced background with multiple gradient layers */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-violet-500/30 via-purple-500/20 to-pink-500/30 blur-2xl animate-pulse" />
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-tl from-cyan-500/20 via-blue-500/10 to-indigo-500/20 blur-xl" />

        {/* Main card with enhanced glassmorphism */}
        <div className="relative backdrop-blur-2xl bg-white/30 dark:bg-black/20 border border-white/40 dark:border-white/10 rounded-3xl p-6 shadow-2xl shadow-black/10 dark:shadow-black/40">
          {/* Enhanced floating elements */}
          <motion.div
            className="absolute top-4 right-4 w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-sm"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="absolute bottom-6 left-4 w-3 h-3 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full blur-sm"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [1, 0.4, 1],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 1,
            }}
          />

          <motion.div
            className="absolute top-1/2 left-2 w-2 h-2 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full blur-sm"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 0.9, 0.5],
            }}
            transition={{
              duration: 2.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />

          {/* Profile header */}
          <div className="text-center mb-6">
            <motion.div
              className="relative inline-block mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-violet-500 via-purple-500 to-pink-500 p-1 shadow-lg">
                <div className="w-full h-full rounded-full backdrop-blur-xl bg-white/40 dark:bg-black/30 border border-white/30 dark:border-white/10 flex items-center justify-center">
                  <span className="text-2xl font-bold bg-gradient-to-br from-violet-600 to-pink-600 bg-clip-text text-transparent">
                    SM
                  </span>
                </div>
              </div>

              {/* Enhanced online indicator */}
              <motion.div
                className="absolute bottom-1 right-1 w-6 h-6 bg-green-500 rounded-full border-3 border-white/50 dark:border-black/30 backdrop-blur-sm flex items-center justify-center shadow-lg"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                <div className="w-2 h-2 bg-white rounded-full" />
              </motion.div>
            </motion.div>

            <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-1 drop-shadow-sm">Sarah Mitchell</h2>
            <p className="text-slate-600 dark:text-slate-300 mb-2">Creative Director & UI Designer</p>

            {/* Enhanced status badge */}
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              <Badge className="backdrop-blur-xl bg-green-500/20 dark:bg-green-500/15 text-green-700 dark:text-green-300 border-green-500/40 dark:border-green-500/25 shadow-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
                Available for projects
              </Badge>
            </motion.div>
          </div>

          {/* Enhanced info grid */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <motion.div
              className="backdrop-blur-xl bg-white/25 dark:bg-white/5 rounded-xl p-3 border border-white/30 dark:border-white/10 shadow-lg"
              whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.35)" }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-center gap-2 mb-1">
                <MapPin className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                <span className="text-xs text-slate-500 dark:text-slate-400">Location</span>
              </div>
              <p className="text-sm font-medium text-slate-800 dark:text-white">New York</p>
            </motion.div>

            <motion.div
              className="backdrop-blur-xl bg-white/25 dark:bg-white/5 rounded-xl p-3 border border-white/30 dark:border-white/10 shadow-lg"
              whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.35)" }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-center gap-2 mb-1">
                <Briefcase className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                <span className="text-xs text-slate-500 dark:text-slate-400">Experience</span>
              </div>
              <p className="text-sm font-medium text-slate-800 dark:text-white">8+ Years</p>
            </motion.div>

            <motion.div
              className="backdrop-blur-xl bg-white/25 dark:bg-white/5 rounded-xl p-3 border border-white/30 dark:border-white/10 shadow-lg"
              whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.35)" }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-1">
                <Clock className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                <span className="text-xs text-slate-500 dark:text-slate-400">Response</span>
              </div>
              <p className="text-sm font-medium text-slate-800 dark:text-white">&lt; 2 hours</p>
            </motion.div>

            <motion.div
              className="backdrop-blur-xl bg-white/25 dark:bg-white/5 rounded-xl p-3 border border-white/30 dark:border-white/10 shadow-lg"
              whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.35)" }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
            >
              <div className="flex items-center gap-2 mb-1">
                <TrendingUp className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                <span className="text-xs text-slate-500 dark:text-slate-400">Success Rate</span>
              </div>
              <p className="text-sm font-medium text-slate-800 dark:text-white">98%</p>
            </motion.div>
          </div>

          {/* Enhanced achievements */}
          <div className="mb-6">
            <h4 className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">Achievements</h4>
            <div className="flex justify-between">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <div
                    className={`w-8 h-8 rounded-full backdrop-blur-xl bg-white/25 dark:bg-white/5 border border-white/30 dark:border-white/10 flex items-center justify-center mb-1 shadow-lg ${achievement.color}`}
                  >
                    <achievement.icon className="w-4 h-4" />
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 max-w-16 leading-tight">
                    {achievement.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Enhanced action buttons */}
          <div className="flex gap-2">
            <motion.div className="flex-1" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button className="w-full bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white border-0 shadow-lg backdrop-blur-xl">
                <MessageSquare className="w-4 h-4 mr-2" />
                Connect
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="icon"
                className="backdrop-blur-xl bg-white/25 dark:bg-white/5 border-white/30 dark:border-white/10 hover:bg-white/35 dark:hover:bg-white/10 shadow-lg"
              >
                <Heart className="w-4 h-4 text-slate-600 dark:text-slate-300" />
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="icon"
                className="backdrop-blur-xl bg-white/25 dark:bg-white/5 border-white/30 dark:border-white/10 hover:bg-white/35 dark:hover:bg-white/10 shadow-lg"
              >
                <Share2 className="w-4 h-4 text-slate-600 dark:text-slate-300" />
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}