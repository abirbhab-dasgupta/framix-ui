"use client"

import { cn } from "@/lib/utils"
import { motion } from "motion/react"
import { CheckCircle, ShoppingBag, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function Alert01() {
  const [visible, setVisible] = useState(true)

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
          "bg-gradient-to-b from-green-50 to-white dark:from-green-900/20 dark:to-zinc-950",
          "border border-green-100 dark:border-green-800/40",
          "shadow-[0_1px_6px_0_rgba(34,197,94,0.1)] dark:shadow-[0_1px_6px_0_rgba(34,197,94,0.03)]",
          "rounded-xl p-4",
        )}
      >
        <div className="flex items-start gap-4">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          >
            <div
              className={cn(
                "p-2 rounded-full",
                "bg-gradient-to-br from-green-500 to-emerald-600",
                "dark:from-green-600 dark:to-emerald-700",
              )}
            >
              <CheckCircle className="h-5 w-5 text-white" />
            </div>
          </motion.div>

          <div className="space-y-1 flex-1">
            <motion.h3
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className={cn("font-medium", "text-green-900 dark:text-green-100")}
            >
              Order Confirmed!
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className={cn("text-sm", "text-green-600 dark:text-green-300")}
            >
              Your order #ORD-12345 has been confirmed and will be shipped soon.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex gap-2 pt-2"
            >
              <Button
                size="sm"
                variant="outline"
                className="text-xs h-8 border-green-200 dark:border-green-800/60 text-green-700 dark:text-green-300 hover:bg-green-50 dark:hover:bg-green-900/30"
              >
                <ShoppingBag className="mr-1 h-3 w-3" />
                Track Order
              </Button>
            </motion.div>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6 rounded-full absolute top-3 right-3 text-green-700 dark:text-green-300 hover:bg-green-100 dark:hover:bg-green-900/50"
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
