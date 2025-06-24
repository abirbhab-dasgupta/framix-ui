"use client"

import { cn } from "@/lib/utils"
import { motion } from "motion/react"
import { AlertTriangle, Copy, Terminal, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function Alert02() {
  const [visible, setVisible] = useState(true)
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(`Error 404: Resource not found at /api/users/123`)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  if (!visible) return null

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="w-full max-w-xl mx-auto"
    >
      <div
        className={cn(
          "relative overflow-hidden",
          "bg-gradient-to-b from-red-50 to-white dark:from-red-900/20 dark:to-zinc-950",
          "border border-red-100 dark:border-red-800/40",
          "shadow-[0_1px_6px_0_rgba(239,68,68,0.1)] dark:shadow-[0_1px_6px_0_rgba(239,68,68,0.03)]",
          "rounded-xl p-4",
        )}
      >
        <div className="flex items-start gap-3">
          <motion.div
            initial={{ rotate: 45, scale: 0.5 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          >
            <div
              className={cn(
                "p-2 rounded-full",
                "bg-gradient-to-br from-red-500 to-rose-600",
                "dark:from-red-600 dark:to-rose-700",
              )}
            >
              <AlertTriangle className="h-5 w-5 text-white" />
            </div>
          </motion.div>

          <div className="space-y-2 flex-1">
            <div>
              <motion.h3
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className={cn("font-medium", "text-red-900 dark:text-red-100")}
              >
                API Error 404
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className={cn("text-sm", "text-red-600 dark:text-red-300")}
              >
                Resource not found
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-red-50/80 dark:bg-red-900/30 rounded-md p-2 border border-red-100 dark:border-red-800/40"
            >
              <div className="flex items-center text-xs text-red-700 dark:text-red-300 font-mono">
                <Terminal className="h-3 w-3 mr-1.5" />
                <span className="flex-1 truncate">/api/users/123</span>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-5 w-5 rounded-full text-red-700 dark:text-red-300 hover:bg-red-100 dark:hover:bg-red-900/50"
                  onClick={copyToClipboard}
                >
                  <Copy className="h-3 w-3" />
                  <span className="sr-only">Copy error</span>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex justify-between items-center pt-1"
            >
              <span className="text-xs text-red-600 dark:text-red-400">
                {copied ? "Copied!" : "Check logs for more details"}
              </span>
              <Button
                size="sm"
                variant="outline"
                className="text-xs h-7 border-red-200 dark:border-red-800 text-red-700 dark:text-red-300"
              >
                View Logs
              </Button>
            </motion.div>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6 rounded-full absolute top-3 right-3 text-red-700 dark:text-red-300 hover:bg-red-100 dark:hover:bg-red-900/50"
            onClick={() => setVisible(false)}
          >
            <X className="h-3 w-3" />
            <span className="sr-only">Close</span>
          </Button>
        </div>
      </div>
    </motion.div>
  )
}
