"use client"

import { cn } from "@/lib/utils"
import { motion } from "motion/react"
import { MessageSquare, User, Heart, Reply, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useState } from "react"

export default function Alert05() {
  const [visible, setVisible] = useState(true)
  const username = "Alex Johnson"
  const userAvatar = "/placeholder.svg?height=40&width=40"
  const message =
    "Hey there! Just wanted to check in and see how you're doing with the new project. Let me know if you need any help!"
  const timeAgo = "5m ago"

  const initials = username
    .split(" ")
    .map((name) => name[0])
    .join("")
    .toUpperCase()

  if (!visible) return null

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="w-full max-w-xl mx-auto"
    >
      <div
        className={cn(
          "relative overflow-hidden",
          "bg-gradient-to-b from-purple-50 to-white dark:from-purple-900/20 dark:to-zinc-950",
          "border border-purple-100 dark:border-purple-800/40",
          "shadow-[0_1px_6px_0_rgba(168,85,247,0.1)] dark:shadow-[0_1px_6px_0_rgba(168,85,247,0.03)]",
          "rounded-xl p-4",
        )}
      >
        {/* Close button - positioned absolutely */}
        <Button
          variant="ghost"
          size="icon"
          className="h-6 w-6 rounded-full absolute top-3 right-3 text-purple-700 dark:text-purple-300 hover:bg-purple-100 dark:hover:bg-purple-900/50 z-10"
          onClick={() => setVisible(false)}
        >
          <X className="h-3 w-3" />
          <span className="sr-only">Close</span>
        </Button>

        <div className="flex gap-3">
          {/* Avatar */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          >
            <Avatar className="h-10 w-10 border-2 border-purple-200 dark:border-purple-800/60">
              <AvatarImage src={userAvatar || "/placeholder.svg"} alt={username} />
              <AvatarFallback className="bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300">
                {initials}
              </AvatarFallback>
            </Avatar>
          </motion.div>

          {/* Content - with right padding to avoid overlap with close button */}
          <div className="space-y-2 flex-1 pr-6">
            {/* Header section */}
            <div className="flex items-center justify-between">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="flex items-center"
              >
                <span className={cn("font-medium", "text-purple-900 dark:text-purple-100")}>{username}</span>
                <span className="text-xs text-purple-500 dark:text-purple-400 ml-2">{timeAgo}</span>
              </motion.div>
            </div>

            {/* Badge - moved below username */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                delay: 0.2,
              }}
              className="flex"
            >
              <span
                className={cn(
                  "text-[11px] font-medium",
                  "px-2 py-0.5 rounded-full",
                  "bg-purple-100 dark:bg-purple-900/50",
                  "text-purple-700 dark:text-purple-200",
                  "ring-1 ring-purple-500/20 dark:ring-purple-400/20",
                  "inline-flex items-center",
                )}
              >
                <MessageSquare className="h-2.5 w-2.5 mr-0.5" />
                New Message
              </span>
            </motion.div>

            {/* Message */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className={cn("text-sm", "text-purple-700 dark:text-purple-300")}
            >
              {message}
            </motion.p>

            {/* Action buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-2 pt-1"
            >
              <Button
                size="sm"
                variant="outline"
                className="text-xs h-8 border-purple-200 dark:border-purple-800/60 text-purple-700 dark:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-900/30"
              >
                <Reply className="mr-1 h-3 w-3" />
                Reply
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="text-xs h-8 border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-300"
              >
                <Heart className="mr-1 h-3 w-3" />
                Like
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="text-xs h-8 border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-300"
              >
                <User className="mr-1 h-3 w-3" />
                Profile
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
