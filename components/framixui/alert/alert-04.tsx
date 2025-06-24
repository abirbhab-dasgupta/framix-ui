"use client"

import { cn } from "@/lib/utils"
import { motion } from "motion/react"
import { Shield, CreditCard, ExternalLink, ThumbsUp, ThumbsDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function Alert04() {
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="w-full max-w-xl mx-auto"
    >
      <div
        className={cn(
          "relative overflow-hidden",
          "bg-gradient-to-b from-blue-50 to-white dark:from-blue-900/20 dark:to-zinc-950",
          "border border-blue-100 dark:border-blue-800/40",
          "shadow-[0_1px_6px_0_rgba(59,130,246,0.1)] dark:shadow-[0_1px_6px_0_rgba(59,130,246,0.03)]",
          "rounded-xl p-4",
        )}
      >
        <motion.div
          className="absolute top-0 left-0 h-1 bg-blue-500/70 dark:bg-blue-600"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        <div className="flex items-start gap-4">
          <motion.div
            initial={{ scale: 0.5 }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{
              scale: {
                repeat: Number.POSITIVE_INFINITY,
                repeatDelay: 3,
                duration: 1,
                times: [0, 0.5, 1],
              },
            }}
          >
            <div
              className={cn(
                "p-2 rounded-full",
                "bg-gradient-to-br from-blue-500 to-cyan-600",
                "dark:from-blue-600 dark:to-cyan-700",
              )}
            >
              <Shield className="h-5 w-5 text-white" />
            </div>
          </motion.div>

          <div className="space-y-2 flex-1">
            <motion.h3
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className={cn("font-medium", "text-blue-900 dark:text-blue-100")}
            >
              Unusual Transaction Detected
            </motion.h3>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-blue-50/80 dark:bg-blue-900/30 rounded-md p-3 border border-blue-100 dark:border-blue-800/40"
            >
              <div className="flex items-center text-sm text-blue-700 dark:text-blue-300 mb-1">
                <CreditCard className="h-3.5 w-3.5 mr-1.5" />
                <span className="font-medium">Card ending in 4321</span>
              </div>
              <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs text-blue-600 dark:text-blue-400 mt-1">
                <div>Merchant:</div>
                <div className="font-medium">Unusual Merchant Inc.</div>
                <div>Amount:</div>
                <div className="font-medium">$499.99</div>
                <div>Time:</div>
                <div className="font-medium">Today, 2:15 PM</div>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className={cn("text-sm", "text-blue-600 dark:text-blue-300")}
            >
              Was this transaction made by you?
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex gap-2 pt-1"
            >
              <Button
                size="sm"
                className="text-xs h-8 bg-blue-600 hover:bg-blue-700 text-white flex-1"
                onClick={() => setVisible(false)}
              >
                <ThumbsUp className="mr-1 h-3 w-3" />
                Yes, it was me
              </Button>
              <Button size="sm" variant="destructive" className="text-xs h-8 flex-1" onClick={() => setVisible(false)}>
                <ThumbsDown className="mr-1 h-3 w-3" />
                No, block card
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex justify-end"
            >
              <Button variant="link" size="sm" className="text-xs h-6 text-blue-600 dark:text-blue-400 p-0">
                View all recent transactions
                <ExternalLink className="ml-1 h-3 w-3" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
