"use client"

import { motion } from "motion/react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Github, Twitter, Linkedin, Globe, MapPin, Calendar, Star, MessageCircle, Verified } from "lucide-react"

export default function SleekProfileCard() {
  const skills = ["React", "TypeScript", "Next.js", "UI/UX", "Figma"]
  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Globe, href: "#", label: "Website" },
  ]

  return (
    <div className="w-full max-w-sm mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative"
      >
        <Card className="overflow-hidden border border-zinc-200/50 dark:border-zinc-800/50 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl shadow-xl dark:shadow-2xl shadow-zinc-200/20 dark:shadow-black/20">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-30 dark:opacity-20">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-purple-50 dark:from-blue-950/30 dark:via-transparent dark:to-purple-950/30" />
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-100/50 dark:from-blue-900/30 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-100/50 dark:from-purple-900/30 rounded-full blur-2xl" />
          </div>

          <div className="relative z-10 p-6">
            {/* Header */}
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-700 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center text-xl font-bold text-zinc-700 dark:text-zinc-200 shadow-lg">
                    JD
                  </div>
                  {/* Status indicator */}
                  <motion.div
                    className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white dark:border-zinc-900 flex items-center justify-center"
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </motion.div>
                </motion.div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Jordan Davis</h3>
                    <Verified className="w-4 h-4 text-blue-500" />
                  </div>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">Full Stack Developer</p>
                </div>
              </div>

             
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-6 p-4 rounded-xl bg-zinc-50/80 dark:bg-zinc-800/50 border border-zinc-200/50 dark:border-zinc-700/50">
              {[
                { label: "Projects", value: "127" },
                { label: "Rating", value: "4.9", icon: Star },
                { label: "Followers", value: "2.1k" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-lg font-bold text-zinc-900 dark:text-zinc-100 flex items-center justify-center gap-1">
                    {stat.value}
                    {stat.icon && <stat.icon className="w-3 h-3 text-yellow-500 fill-current" />}
                  </div>
                  <div className="text-xs text-zinc-500 dark:text-zinc-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Bio */}
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
              Passionate about creating beautiful, functional web experiences. Always learning, always building. 
            </p>

            {/* Skills */}
            <div className="mb-6">
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Badge
                      variant="secondary"
                      className="text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border-zinc-200 dark:border-zinc-700 hover:bg-zinc-200 dark:hover:bg-zinc-700"
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Location and availability */}
            <div className="flex items-center justify-between mb-6 text-sm">
              <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
                <MapPin className="w-4 h-4" />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center gap-2 px-2 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300">
                <Calendar className="w-3 h-3" />
                <span className="text-xs">Available</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex gap-3 mb-6">
              <motion.div className="flex-1" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button className="w-full bg-zinc-900 dark:bg-zinc-100 hover:bg-zinc-800 dark:hover:bg-zinc-200 text-white dark:text-zinc-900 border-0">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Message
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-700"
                >
                  <Star className="w-4 h-4" />
                </Button>
              </motion.div>
            </div>

            {/* Social links */}
            <div className="flex justify-center gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-9 h-9 rounded-lg bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  )
}
