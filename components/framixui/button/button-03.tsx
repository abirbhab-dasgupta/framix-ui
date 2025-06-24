"use client"

import { cn } from "@/lib/utils"
import { motion } from "motion/react"
import { Send, Loader2 } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function Button03() {
  const [state, setState] = useState<"idle" | "loading" | "success">("idle")

  const handleClick = () => {
    if (state !== "idle") return

    setState("loading")

    // Simulate API call
    setTimeout(() => {
      setState("success")

      // Reset after 2 seconds
      setTimeout(() => {
        setState("idle")
      }, 2000)
    }, 2000)
  }

  return (
    <Button
      className={cn(
        "relative min-w-40 overflow-hidden",
        "bg-indigo-100 dark:bg-indigo-900",
        "hover:bg-indigo-200 dark:hover:bg-indigo-800",
        "text-indigo-600 dark:text-indigo-300",
        "border border-indigo-300 dark:border-indigo-700",
        state === "success" && "bg-indigo-200 dark:bg-indigo-800",
      )}
      onClick={handleClick}
      disabled={state !== "idle"}
    >
      <motion.div
        className="w-full flex items-center justify-center gap-2"
        animate={{
          width: state === "loading" ? 40 : "100%",
        }}
        transition={{
          duration: 0.3,
        }}
      >
        {state === "loading" ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
          >
            <Loader2 className="w-4 h-4 animate-spin" />
          </motion.div>
        ) : state === "success" ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 500, damping: 15 }}
            >
              <svg
                className="w-4 h-4 text-indigo-600 dark:text-indigo-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </motion.div>
            Sent!
          </motion.div>
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2">
            <Send className="w-4 h-4" />
            Submit
          </motion.div>
        )}
      </motion.div>
    </Button>
  )
}
