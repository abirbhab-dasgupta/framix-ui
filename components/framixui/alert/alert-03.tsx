"use client"

import { cn } from "@/lib/utils"
import { motion } from "motion/react"
import { CloudLightning, MapPin, AlertCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function Alert03() {
  const [visible, setVisible] = useState(true)
  const timeRemaining = 45 // in minutes

  if (!visible) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="w-full max-w-xl mx-auto"
    >
      <div
        className={cn(
          "relative overflow-hidden",
          "bg-gradient-to-b from-amber-50 to-white dark:from-amber-900/20 dark:to-zinc-950",
          "border border-amber-100 dark:border-amber-800/40",
          "shadow-[0_1px_6px_0_rgba(245,158,11,0.1)] dark:shadow-[0_1px_6px_0_rgba(245,158,11,0.03)]",
          "rounded-xl p-4",
        )}
      >
        {/* Progress bar */}
        <motion.div
          className="absolute top-0 left-0 w-full h-1 bg-amber-300 dark:bg-amber-600"
          initial={{ width: "100%" }}
          animate={{ width: "0%" }}
          transition={{ duration: timeRemaining * 0.1, ease: "linear" }}
        />

        {/* Close button - positioned absolutely */}
        <Button
          variant="ghost"
          size="icon"
          className="h-6 w-6 rounded-full absolute top-3 right-3 text-amber-700 dark:text-amber-300 hover:bg-amber-100 dark:hover:bg-amber-900/50 z-10"
          onClick={() => setVisible(false)}
        >
          <X className="h-3 w-3" />
          <span className="sr-only">Close</span>
        </Button>

        <div className="flex items-start gap-4">
          {/* Icon */}
          <motion.div
            initial={{ rotate: 0, scale: 0.5 }}
            animate={{
              rotate: [0, -10, 10, -10, 0],
              scale: 1,
            }}
            transition={{
              rotate: {
                repeat: Number.POSITIVE_INFINITY,
                repeatDelay: 5,
                duration: 0.5,
              },
              scale: {
                type: "spring",
                stiffness: 300,
                damping: 20,
              },
            }}
          >
            <div
              className={cn(
                "p-2 rounded-full",
                "bg-gradient-to-br from-amber-500 to-orange-600",
                "dark:from-amber-600 dark:to-orange-700",
              )}
            >
              <CloudLightning className="h-5 w-5 text-white" />
            </div>
          </motion.div>

          {/* Content - with right padding to avoid overlap with close button */}
          <div className="space-y-2 flex-1 pr-6">
            {/* Header section */}
            <div>
              <motion.h3
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className={cn("font-medium", "text-amber-900 dark:text-amber-100")}
              >
                Severe Thunderstorm Warning
              </motion.h3>

              <div className="flex items-center justify-between mt-1">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center text-sm text-amber-600 dark:text-amber-300"
                >
                  <MapPin className="h-3 w-3 mr-1" />
                  San Francisco, CA
                </motion.div>

                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                    delay: 0.3,
                  }}
                  className={cn(
                    "text-[11px] font-medium",
                    "px-2 py-0.5 rounded-full",
                    "bg-amber-100 dark:bg-amber-900/50",
                    "text-amber-700 dark:text-amber-200",
                    "ring-1 ring-amber-500/20 dark:ring-amber-400/20",
                  )}
                >
                  Severity 8/10
                </motion.div>
              </div>
            </div>

            {/* Warning message */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-sm text-amber-700 dark:text-amber-300"
            >
              <AlertCircle className="h-3.5 w-3.5 inline-block mr-1 mb-0.5" />
              Take necessary precautions. Warning expires in {timeRemaining} minutes.
            </motion.div>

            {/* Action buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex gap-2 pt-2"
            >
              <Button
                size="sm"
                className="text-xs h-8 bg-amber-600 hover:bg-amber-700 dark:bg-amber-700 dark:hover:bg-amber-800 text-white"
              >
                View Details
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="text-xs h-8 border-amber-200 dark:border-amber-800/60 text-amber-700 dark:text-amber-300 hover:bg-amber-50 dark:hover:bg-amber-900/30"
              >
                Safety Tips
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
