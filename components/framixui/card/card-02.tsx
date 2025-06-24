"use client"

import { useState, useEffect } from "react"

// Self-contained component with no external imports
export default function Card02() {
  const [progress, setProgress] = useState(45)
  const [isHovering, setIsHovering] = useState(false)
  const [currentTime, setCurrentTime] = useState(new Date())

  // Update time every minute
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date())
    }, 60000)
    return () => clearInterval(interval)
  }, [])

  // Format time to 12-hour format
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    })
  }

  // Utility function for conditional class names (replacing cn from @/lib/utils)
  const classNames = (...classes: (string | boolean | undefined)[]) => {
    return classes.filter(Boolean).join(" ")
  }

  return (
    <div className="w-full max-w-sm">
      <div className="overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-md transition-all duration-300 hover:shadow-lg">
        {/* Header */}
        <div className="px-6 pt-6 pb-5 border-b border-zinc-100 dark:border-zinc-800">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="rounded-full p-2.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 2v4"></path>
                  <path d="M8 2v4"></path>
                  <path d="M3 10h18"></path>
                  <rect width="18" height="16" x="3" y="6" rx="2"></rect>
                  <path d="M8 14h.01"></path>
                  <path d="M12 14h.01"></path>
                  <path d="M16 14h.01"></path>
                  <path d="M8 18h.01"></path>
                  <path d="M12 18h.01"></path>
                  <path d="M16 18h.01"></path>
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Yoga Session</h2>
            </div>
            <div className="flex items-center">
              <div className="h-2 w-2 rounded-full bg-emerald-500 mr-2 animate-pulse"></div>
              <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">CONFIRMED</span>
            </div>
          </div>

          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            <span className="inline-flex items-center">
              <svg
                className="mr-1.5 w-3.5 h-3.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              Serenity Wellness Studio, 789 Zen Way
            </span>
          </p>
        </div>

        {/* Instructor info */}
        <div className="px-6 py-4 border-b border-zinc-100 dark:border-zinc-800">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center border-2 border-white dark:border-zinc-700">
                <svg
                  className="w-6 h-6 text-zinc-500 dark:text-zinc-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center border-2 border-white dark:border-zinc-700">
                <svg
                  className="w-3 h-3 text-zinc-600 dark:text-zinc-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
            </div>
            <div>
              <div className="text-sm font-medium text-zinc-900 dark:text-zinc-100">Emma Anderson</div>
              <div className="text-xs text-zinc-500 dark:text-zinc-400 flex items-center">
                <svg
                  className="mr-1 w-3 h-3"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="1"></circle>
                </svg>
                Senior Yoga Instructor
              </div>
            </div>
          </div>
        </div>

        {/* Session details */}
        <div className="px-6 pt-4 pb-2">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="p-3 rounded-lg bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700">
              <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">Date & Time</span>
              <div className="mt-1.5">
                <div className="text-sm font-medium text-zinc-900 dark:text-zinc-100 flex items-center">
                  <svg
                    className="mr-1.5 w-3.5 h-3.5 text-zinc-500 dark:text-zinc-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                    <line x1="16" x2="16" y1="2" y2="6"></line>
                    <line x1="8" x2="8" y1="2" y2="6"></line>
                    <line x1="3" x2="21" y1="10" y2="10"></line>
                  </svg>
                  {currentTime.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })}
                </div>
                <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5 ml-5">
                  {formatTime(new Date(currentTime.getTime() + 40 * 60000))} - 60 min
                </div>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700">
              <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">Class Type</span>
              <div className="mt-1.5">
                <div className="text-sm font-medium text-zinc-900 dark:text-zinc-100 flex items-center">
                  <svg
                    className="mr-1.5 w-3.5 h-3.5 text-zinc-500 dark:text-zinc-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z"></path>
                    <path d="M15 3v6h6"></path>
                  </svg>
                  Hatha Yoga
                </div>
                <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5 ml-5">All skill levels</div>
              </div>
            </div>
          </div>

          {/* Progress - Custom implementation */}
          <div className="space-y-2 mb-5">
            <div className="flex justify-between items-center">
              <div className="text-xs font-medium text-zinc-500 dark:text-zinc-400">Preparation Progress</div>
              <div className="text-xs font-medium text-zinc-700 dark:text-zinc-300">{progress}%</div>
            </div>
            <div className="w-full h-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
              <div className="h-full bg-zinc-400 dark:bg-zinc-500 rounded-full" style={{ width: `${progress}%` }}></div>
            </div>
            <div className="pt-0.5 flex justify-between text-[10px] text-zinc-400 dark:text-zinc-500">
              <span>Check-in</span>
              <span>Preparation</span>
              <span>Session</span>
            </div>
          </div>

          {/* Actions - Custom buttons */}
          <div className="grid grid-cols-2 gap-3 pb-5">
            {/* Custom outline button */}
            <button className="h-9 rounded-md border border-zinc-200 dark:border-zinc-700 bg-transparent hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-sm font-medium flex items-center justify-center transition-all duration-200">
              <svg
                className="w-4 h-4 mr-2 text-zinc-500 dark:text-zinc-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z"></path>
                <path d="M15 3v6h6"></path>
              </svg>
              Details
            </button>

            {/* Custom primary button */}
            <button
              className={classNames(
                "h-9 rounded-md text-sm font-medium flex items-center justify-center transition-all duration-200",
                isHovering
                  ? "bg-zinc-700 hover:bg-zinc-800 dark:bg-zinc-200 dark:hover:bg-zinc-300 text-white dark:text-zinc-900"
                  : "bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-zinc-200 text-white dark:text-zinc-900",
              )}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <svg
                className="w-4 h-4 mr-1.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {isHovering ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </>
                ) : (
                  <>
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </>
                )}
              </svg>
              {isHovering ? "Cancel Session" : "Check In"}
            </button>
          </div>

          <div className="py-3 px-4 mb-1 bg-zinc-50 dark:bg-zinc-800 rounded-md border border-zinc-200 dark:border-zinc-700 flex items-center text-xs">
            <svg
              className="flex-shrink-0 w-4 h-4 mr-2 text-zinc-500 dark:text-zinc-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" x2="12" y1="8" y2="12"></line>
              <line x1="12" x2="12.01" y1="16" y2="16"></line>
            </svg>
            <span className="text-zinc-600 dark:text-zinc-300">
              Please arrive 10 minutes before your session begins
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
