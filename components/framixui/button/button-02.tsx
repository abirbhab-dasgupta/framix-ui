"use client"

import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "motion/react"
import { Bell } from "lucide-react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function Button02() {
  const [hasNotification, setHasNotification] = useState(true)
  const [isHovered, setIsHovered] = useState(false)

  // Reset notification after some time
  useEffect(() => {
    if (!hasNotification) {
      const timer = setTimeout(() => {
        setHasNotification(true)
      }, 5000)

      return () => clearTimeout(timer)
    }
  }, [hasNotification])

  return (
    <Button
      className={cn(
        "relative min-w-40",
        "bg-blue-100 dark:bg-blue-900",
        "hover:bg-blue-200 dark:hover:bg-blue-800",
        "text-blue-600 dark:text-blue-300",
        "border border-blue-300 dark:border-blue-700",
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setHasNotification(false)}
    >
      <span className="relative flex items-center justify-center gap-2">
        <motion.div
          animate={{
            rotate: isHovered && hasNotification ? [0, -10, 10, -10, 10, 0] : 0,
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          className="relative"
        >
          <Bell className="w-4 h-4" />

          <AnimatePresence>
            {hasNotification && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: 1,
                  opacity: 1,
                }}
                exit={{ scale: 0, opacity: 0 }}
                className={cn(
                  "absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full",
                  "bg-red-500 dark:bg-red-400",
                  "ring-2 ring-blue-100 dark:ring-blue-900",
                )}
              >
                <motion.div
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [1, 0.8, 1],
                  }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 2,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 rounded-full bg-red-500 dark:bg-red-400 opacity-60"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {hasNotification ? "New Notification" : "No Notifications"}
      </span>
    </Button>
  )
}
