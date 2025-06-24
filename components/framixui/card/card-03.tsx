"use client"

import { useState } from "react"

export default function Card03() {
  const [isLiked, setIsLiked] = useState(false)
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [likeCount, setLikeCount] = useState(42)

  // Toggle like state and update count
  const handleLike = () => {
    setIsLiked(!isLiked)
    setLikeCount((prev) => (isLiked ? prev - 1 : prev + 1))
  }

  // Toggle bookmark state
  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked)
  }

  // Utility function for conditional class names
  const classNames = (...classes: (string | boolean | undefined)[]) => {
    return classes.filter(Boolean).join(" ")
  }

  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
        {/* Header with author info */}
        <div className="p-5 flex items-start justify-between">
          <div className="flex gap-3">
            <div className="relative">
              {/* Avatar */}
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-700 dark:to-zinc-800 flex items-center justify-center overflow-hidden">
                <svg
                  className="w-full h-full text-zinc-400 dark:text-zinc-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>

              {/* Online indicator */}
              <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-white dark:border-zinc-900"></div>
            </div>

            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="font-medium text-zinc-900 dark:text-zinc-100">Alex Morgan</h3>
                <svg className="w-4 h-4 text-sky-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-9.618 5.04L12 20.58l9.618-12.596A11.955 11.955 0 0112 2.944z"></path>
                </svg>
              </div>
              <div className="flex items-center text-xs text-zinc-500 dark:text-zinc-400">
                <span>@alexmorgan</span>
                <span className="mx-1.5">·</span>
                <span>3h ago</span>
              </div>
            </div>
          </div>

          {/* More options button */}
          <button className="p-1.5 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
            <svg
              className="w-5 h-5 text-zinc-500 dark:text-zinc-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="1"></circle>
              <circle cx="19" cy="12" r="1"></circle>
              <circle cx="5" cy="12" r="1"></circle>
            </svg>
          </button>
        </div>

        {/* Tweet content */}
        <div className="px-5 pb-3">
          <p className="text-zinc-800 dark:text-zinc-200 text-[15px] leading-relaxed mb-3">
            Just released our new design system for our product! It's been months of work, but I'm really proud of what
            we've accomplished. Check it out and let me know what you think! 🎨 ✨
          </p>

          {/* Attached link/card */}
          <div className="mb-4 rounded-lg border border-zinc-200 dark:border-zinc-700 overflow-hidden hover:border-zinc-300 dark:hover:border-zinc-600 transition-colors">
            <div className="h-40 bg-zinc-100 dark:bg-zinc-800 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-zinc-300 dark:text-zinc-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                  <circle cx="9" cy="9" r="2"></circle>
                  <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
                </svg>
              </div>
            </div>
            <div className="p-3 bg-white dark:bg-zinc-900">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100 text-sm">Horizon Design System</h4>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                A comprehensive design system for modern web applications
              </p>
            </div>
          </div>
        </div>

        {/* Engagement metrics */}
        <div className="px-2 py-2 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between">
          {/* Left side actions */}
          <div className="flex items-center">
            {/* Like button */}
            <button
              onClick={handleLike}
              className={classNames(
                "flex items-center gap-1.5 p-2 rounded-full transition-colors",
                isLiked
                  ? "text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-900/20"
                  : "text-zinc-500 dark:text-zinc-400 hover:text-rose-600 hover:bg-zinc-100 dark:hover:bg-zinc-800",
              )}
            >
              <svg
                className={classNames(
                  "w-5 h-5 transition-transform duration-200 hover:scale-110 active:scale-95",
                  isLiked && "fill-rose-600",
                )}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
              <span className="text-xs font-medium">{likeCount}</span>
            </button>

            {/* Comment button */}
            <button className="flex items-center gap-1.5 p-2 rounded-full text-zinc-500 dark:text-zinc-400 hover:text-sky-500 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
              <svg
                className="w-5 h-5 transition-transform duration-200 hover:scale-110 active:scale-95"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
              <span className="text-xs font-medium">18</span>
            </button>

            {/* Share button */}
            <button className="flex items-center gap-1.5 p-2 rounded-full text-zinc-500 dark:text-zinc-400 hover:text-emerald-500 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
              <svg
                className="w-5 h-5 transition-transform duration-200 hover:scale-110 active:scale-95"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="18" cy="5" r="3"></circle>
                <circle cx="6" cy="12" r="3"></circle>
                <circle cx="18" cy="19" r="3"></circle>
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
              </svg>
              <span className="text-xs font-medium">7</span>
            </button>
          </div>

          {/* Right side actions */}
          <div>
            {/* Bookmark button */}
            <button
              onClick={handleBookmark}
              className={classNames(
                "p-2 rounded-full transition-colors",
                isBookmarked
                  ? "text-zinc-900 dark:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                  : "text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800",
              )}
            >
              <svg
                className={classNames(
                  "w-5 h-5 transition-transform duration-200 hover:scale-110 active:scale-95",
                  isBookmarked && "fill-current",
                )}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
