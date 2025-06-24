"use client"

import { cn } from "@/lib/utils"
import { motion, useAnimationControls } from "motion/react"
import { Download, Check } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function Button01() {
  const [downloadState, setDownloadState] = useState<"idle" | "downloading" | "complete">("idle")
  const progressControls = useAnimationControls()

  const handleClick = async () => {
    if (downloadState !== "idle") return

    setDownloadState("downloading")

    // Animate progress bar
    await progressControls.start({
      width: "100%",
      transition: { duration: 2.5, ease: "easeInOut" },
    })

    setDownloadState("complete")

    // Reset after 2 seconds
    setTimeout(() => {
      progressControls.start({ width: "0%" })
      setDownloadState("idle")
    }, 2000)
  }

  return (
    <Button
      className={cn(
        "relative overflow-hidden min-w-40",
        "bg-emerald-100 dark:bg-emerald-900",
        "hover:bg-emerald-200 dark:hover:bg-emerald-800",
        "text-emerald-600 dark:text-emerald-300",
        "border border-emerald-300 dark:border-emerald-700",
        downloadState === "complete" && "bg-emerald-200 dark:bg-emerald-800",
      )}
      onClick={handleClick}
      disabled={downloadState !== "idle"}
    >
      {/* Progress bar */}
      <motion.div
        initial={{ width: "0%" }}
        animate={progressControls}
        className={cn(
          "absolute left-0 bottom-0 h-1",
          "bg-emerald-500 dark:bg-emerald-400",
          downloadState === "idle" && "opacity-0",
        )}
      />

      {/* Button content */}
      <span className="relative flex items-center justify-center gap-2">
        {downloadState === "complete" ? (
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="flex items-center gap-2">
            <Check className="w-4 h-4" />
            Downloaded
          </motion.div>
        ) : (
          <>
            <motion.div
              animate={{
                rotate: downloadState === "downloading" ? 360 : 0,
              }}
              transition={{
                repeat: downloadState === "downloading" ? Number.POSITIVE_INFINITY : 0,
                duration: 1.5,
                ease: "linear",
              }}
            >
              <Download className="w-4 h-4" />
            </motion.div>
            {downloadState === "downloading" ? "Downloading..." : "Download"}
          </>
        )}
      </span>
    </Button>
  )
}
