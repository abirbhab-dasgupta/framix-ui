"use client"

import { Link } from "next-view-transitions"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion } from "motion/react"
import { ArrowRight } from "lucide-react"

export function BrowseComponentsButton() {
  return (
    <Link href="/docs/components/particle-background" className="group block">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { duration: 0.3, ease: "easeOut" } }}
        whileHover={{
          scale: 1.02,
          transition: { duration: 0.2, ease: "easeInOut" },
        }}
        whileTap={{ scale: 0.98 }}
      >
        <Button
          className={cn(
            "relative overflow-hidden",
            "h-12 px-6 min-w-72 md:min-w-56",
            "rounded-2xl font-semibold text-base",
            "bg-black dark:bg-white",
            "text-white dark:text-black",
            "border border-blue-500/30 dark:border-blue-400/30",
            "shadow-[0_4px_20px_-4px_rgba(56,189,248,0.25),0_8px_25px_-5px_rgba(37,99,235,0.25)]",
            "dark:shadow-[0_4px_20px_-4px_rgba(56,189,248,0.2),0_8px_25px_-5px_rgba(37,99,235,0.2)]",
            "transition-all duration-300 ease-out",
            "group-hover:shadow-[0_8px_30px_-4px_rgba(56,189,248,0.4),0_12px_35px_-5px_rgba(37,99,235,0.4)]",
            "dark:group-hover:shadow-[0_8px_30px_-4px_rgba(56,189,248,0.3),0_12px_35px_-5px_rgba(37,99,235,0.3)]",
            "group-hover:border-blue-500/50 dark:group-hover:border-blue-400/50",
          )}
        >
          {/* Background gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <div className="relative flex items-center justify-between w-full">
            <span className="font-medium tracking-wide">Browse Components</span>

            <motion.div
              className="flex items-center justify-center w-6 h-6"
              animate={{
                x: 0,
                transition: { duration: 0.3 },
              }}
              whileHover={{
                x: 4,
                transition: { duration: 0.2 },
              }}
            >
              <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </motion.div>
          </div>
        </Button>
      </motion.div>
    </Link>
  )
}
