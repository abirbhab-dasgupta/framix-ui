"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"

export default function Card04() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(37)
  const [isShuffle, setIsShuffle] = useState(false)
  const [isRepeat, setIsRepeat] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const [volume, setVolume] = useState(70)
  const [showVolumeSlider, setShowVolumeSlider] = useState(false)
  const progressBarRef = useRef<HTMLDivElement>(null)

  // Format time from seconds to MM:SS
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  // Handle progress bar click to update position
  const handleProgressBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (progressBarRef.current) {
      const rect = progressBarRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const width = rect.width
      const percentage = (x / width) * 100
      setProgress(Math.min(Math.max(percentage, 0), 100))
    }
  }

  // Simulate progress when playing
  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isPlaying && progress < 100) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setIsPlaying(false)
            return 100
          }
          return prev + 0.5
        })
      }, 1000)
    }

    return () => clearInterval(interval)
  }, [isPlaying, progress])

  // Utility function for conditional class names
  const classNames = (...classes: (string | boolean | undefined)[]) => {
    return classes.filter(Boolean).join(" ")
  }

  // Current and total time in seconds (for a 3:42 song)
  const totalDuration = 222
  const currentTime = Math.floor((progress / 100) * totalDuration)

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm overflow-hidden">
        {/* Album art */}
        <div className="relative aspect-square bg-zinc-100 dark:bg-zinc-800 overflow-hidden">
          {/* Album cover image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://placeholder.svg?height=400&width=400&text=M83+-+Midnight+City')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>

          {/* Overlay with play button when not playing */}
          <div
            className={classNames(
              "absolute inset-0 flex items-center justify-center cursor-pointer transition-opacity duration-300",
              isPlaying ? "bg-black/0 opacity-0" : "bg-black/40 opacity-100",
            )}
            onClick={() => setIsPlaying(true)}
          >
            <div className="w-16 h-16 rounded-full bg-white dark:bg-zinc-100 flex items-center justify-center shadow-lg transform transition-transform hover:scale-105 active:scale-95">
              <svg className="w-8 h-8 text-black dark:text-zinc-900 ml-1" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z"></path>
              </svg>
            </div>
          </div>
        </div>

        {/* Song info */}
        <div className="p-4 border-b border-zinc-100 dark:border-zinc-800">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-medium text-zinc-900 dark:text-zinc-100 text-lg">Midnight City</h3>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm">M83 • Hurry Up, We're Dreaming</p>
            </div>
            <button
              onClick={() => setIsLiked(!isLiked)}
              className={classNames(
                "p-2 rounded-full transition-colors",
                isLiked
                  ? "text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-500"
                  : "text-zinc-400 hover:text-zinc-600 dark:text-zinc-500 dark:hover:text-zinc-300",
              )}
            >
              <svg
                className={classNames(
                  "w-5 h-5 transition-transform duration-200",
                  isLiked ? "fill-current" : "fill-none",
                )}
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Progress bar - now clickable */}
        <div className="px-4 pt-3">
          <div
            ref={progressBarRef}
            className="relative h-1 bg-zinc-200 dark:bg-zinc-700 rounded-full cursor-pointer group"
            onClick={handleProgressBarClick}
          >
            <div
              className="absolute top-0 left-0 h-full bg-zinc-500 dark:bg-zinc-400 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
            <div
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-white dark:bg-zinc-100 border border-zinc-500 dark:border-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ left: `${progress}%` }}
            ></div>
          </div>

          {/* Time indicators */}
          <div className="flex justify-between mt-1 text-xs text-zinc-500 dark:text-zinc-400">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(totalDuration)}</span>
          </div>
        </div>

        {/* Controls */}
        <div className="px-4 py-3 flex items-center justify-between">
          {/* Left controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsShuffle(!isShuffle)}
              className={classNames(
                "p-1.5 rounded-full transition-colors",
                isShuffle
                  ? "text-zinc-900 dark:text-zinc-100"
                  : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200",
              )}
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="16 3 21 3 21 8"></polyline>
                <line x1="4" y1="20" x2="21" y2="3"></line>
                <polyline points="21 16 21 21 16 21"></polyline>
                <line x1="15" y1="15" x2="21" y2="21"></line>
                <line x1="4" y1="4" x2="9" y2="9"></line>
              </svg>
            </button>

            {/* Previous button */}
            <button className="p-1.5 text-zinc-700 dark:text-zinc-200 hover:text-zinc-900 dark:hover:text-white transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 20L9 12l10-8v16zM5 4v16h2V4H5z"></path>
              </svg>
            </button>
          </div>

          {/* Play/Pause button */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-10 h-10 rounded-full bg-white dark:bg-zinc-100 text-black dark:text-zinc-900 flex items-center justify-center shadow-sm hover:shadow transition-shadow transform hover:scale-105 active:scale-95"
          >
            {isPlaying ? (
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"></path>
              </svg>
            ) : (
              <svg className="w-5 h-5 ml-0.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z"></path>
              </svg>
            )}
          </button>

          {/* Right controls */}
          <div className="flex items-center gap-3">
            {/* Next button */}
            <button className="p-1.5 text-zinc-700 dark:text-zinc-200 hover:text-zinc-900 dark:hover:text-white transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M5 4l10 8-10 8V4zm14 0v16h-2V4h2z"></path>
              </svg>
            </button>

            {/* Repeat button - now black/white */}
            <button
              onClick={() => setIsRepeat(!isRepeat)}
              className={classNames(
                "p-1.5 rounded-full transition-colors",
                isRepeat
                  ? "text-zinc-900 dark:text-zinc-100"
                  : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200",
              )}
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="17 1 21 5 17 9"></polyline>
                <path d="M3 11V9a4 4 0 0 1 4-4h14"></path>
                <polyline points="7 23 3 19 7 15"></polyline>
                <path d="M21 13v2a4 4 0 0 1-4 4H3"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Volume control - now black/white */}
        <div className="px-4 pb-4 flex items-center gap-2">
          <div className="relative">
            <button
              className="p-1.5 text-zinc-700 dark:text-zinc-200 hover:text-zinc-900 dark:hover:text-white transition-colors"
              onClick={() => setShowVolumeSlider(!showVolumeSlider)}
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {volume > 60 ? (
                  <>
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                  </>
                ) : volume > 0 ? (
                  <>
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                    <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                  </>
                ) : (
                  <>
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                    <line x1="23" y1="9" x2="17" y2="15"></line>
                    <line x1="17" y1="9" x2="23" y2="15"></line>
                  </>
                )}
              </svg>
            </button>

            {/* Volume slider popup */}
            {showVolumeSlider && (
              <div className="absolute bottom-full left-0 mb-2 p-3 bg-white dark:bg-zinc-800 rounded-lg shadow-lg border border-zinc-200 dark:border-zinc-700 w-40">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={volume}
                  onChange={(e) => setVolume(Number.parseInt(e.target.value))}
                  className="w-full h-1.5 bg-zinc-200 dark:bg-zinc-700 rounded-full appearance-none cursor-pointer"
                  style={{
                    backgroundImage: `linear-gradient(to right, rgb(113 113 122 / var(--tw-bg-opacity)) 0%, rgb(113 113 122 / var(--tw-bg-opacity)) ${volume}%, rgb(228 228 231 / var(--tw-bg-opacity)) ${volume}%)`,
                  }}
                />
              </div>
            )}
          </div>

          {/* Device selection */}
          <button className="p-1.5 text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors ml-auto">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
              <line x1="8" y1="21" x2="16" y2="21"></line>
              <line x1="12" y1="17" x2="12" y2="21"></line>
            </svg>
          </button>

          {/* Queue button */}
          <button className="p-1.5 text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="8" y1="6" x2="21" y2="6"></line>
              <line x1="8" y1="12" x2="21" y2="12"></line>
              <line x1="8" y1="18" x2="21" y2="18"></line>
              <line x1="3" y1="6" x2="3.01" y2="6"></line>
              <line x1="3" y1="12" x2="3.01" y2="12"></line>
              <line x1="3" y1="18" x2="3.01" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
