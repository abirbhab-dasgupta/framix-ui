"use client"

import { useState } from "react"

export default function Card05() {
  // All data defined directly in the component
  const job = {
    title: "Senior Frontend Developer",
    company: "TechCorp Solutions",
    location: "San Francisco, CA (Remote)",
    logo: "",
    tags: ["Full-time", "Remote", "Senior Level"],
    postedDate: "Posted 2 days ago",
    salary: "$120k - $150k",
    isNew: true,
  }

  // State for saved status and hover effect
  const [isSaved, setIsSaved] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  // Toggle saved state
  const handleSave = () => {
    setIsSaved(!isSaved)
  }

  // Utility function for conditional class names
  const cn = (...classes: (string | boolean | undefined)[]) => {
    return classes.filter(Boolean).join(" ")
  }

  // Get icon for tag
  const getTagIcon = (tag: string) => {
    switch (tag) {
      case "Full-time":
        return (
          <svg
            className="w-3 h-3 mr-1 text-zinc-500 dark:text-zinc-400"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
        )
      case "Remote":
        return (
          <svg
            className="w-3 h-3 mr-1 text-zinc-500 dark:text-zinc-400"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 7h-9"></path>
            <path d="M14 17H5"></path>
            <circle cx="17" cy="17" r="3"></circle>
            <circle cx="7" cy="7" r="3"></circle>
          </svg>
        )
      case "Senior Level":
        return (
          <svg
            className="w-3 h-3 mr-1 text-zinc-500 dark:text-zinc-400"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        )
      case "Hybrid":
        return (
          <svg
            className="w-3 h-3 mr-1 text-zinc-500 dark:text-zinc-400"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          </svg>
        )
      case "Mid-Level":
        return (
          <svg
            className="w-3 h-3 mr-1 text-zinc-500 dark:text-zinc-400"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
        )
      case "On-site":
        return (
          <svg
            className="w-3 h-3 mr-1 text-zinc-500 dark:text-zinc-400"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl rounded-xl shadow-sm border border-zinc-200/50 dark:border-zinc-800/50 overflow-hidden transition-all duration-300 hover:shadow-md hover:border-zinc-300/50 dark:hover:border-zinc-700/50">
        <div className="p-5 sm:p-6">
          {/* Desktop layout - side by side */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            {/* Logo */}
            <div className="flex-shrink-0">
              {job.logo ? (
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-zinc-100 dark:bg-zinc-800 rounded-lg flex items-center justify-center text-zinc-900 dark:text-zinc-100 font-semibold text-lg ring-2 ring-zinc-100 dark:ring-zinc-800">
                  {job.logo}
                </div>
              ) : (
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-zinc-100 dark:bg-zinc-800 rounded-lg flex items-center justify-center text-zinc-500 dark:text-zinc-400 ring-2 ring-zinc-100 dark:ring-zinc-800">
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                    <path d="M7 7h.01"></path>
                    <path d="M17 7h.01"></path>
                    <path d="M7 17h.01"></path>
                    <path d="M17 17h.01"></path>
                  </svg>
                </div>
              )}
            </div>

            {/* Job details */}
            <div className="flex-grow">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                <div>
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                    {job.title}
                    {job.isNew && (
                      <span className="inline-flex items-center rounded-full bg-emerald-50 dark:bg-emerald-900/20 px-1.5 py-0.5 text-xs font-medium text-emerald-700 dark:text-emerald-400">
                        New
                      </span>
                    )}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-300 mt-0.5 flex items-center gap-1.5">
                    <svg
                      className="w-4 h-4 text-zinc-500 dark:text-zinc-400"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                      <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                      <line x1="12" y1="22.08" x2="12" y2="12"></line>
                    </svg>
                    {job.company}
                  </p>
                  <div className="flex items-center gap-1.5 mt-1.5 text-zinc-500 dark:text-zinc-400 text-sm">
                    <svg
                      className="w-4 h-4"
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
                    <span>{job.location}</span>
                  </div>
                </div>

                {/* Salary - visible on desktop */}
                <div className="hidden sm:block text-right">
                  <div className="text-zinc-900 dark:text-zinc-100 font-medium flex items-center justify-end gap-1.5">
                    <svg
                      className="w-4 h-4 text-zinc-500 dark:text-zinc-400"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path>
                      <path d="M12 18V6"></path>
                    </svg>
                    {job.salary}
                  </div>
                  <div className="text-zinc-500 dark:text-zinc-400 text-sm flex items-center justify-end gap-1.5">
                    <svg
                      className="w-3.5 h-3.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" x2="16" y1="2" y2="6"></line>
                      <line x1="8" x2="8" y1="2" y2="6"></line>
                      <line x1="3" x2="21" y1="10" y2="10"></line>
                    </svg>
                    {job.postedDate}
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-3">
                {job.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200"
                  >
                    {getTagIcon(tag)}
                    {tag}
                  </span>
                ))}
              </div>

              {/* Salary - visible on mobile */}
              <div className="sm:hidden mt-3">
                <div className="text-zinc-900 dark:text-zinc-100 font-medium flex items-center gap-1.5">
                  <svg
                    className="w-4 h-4 text-zinc-500 dark:text-zinc-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path>
                    <path d="M12 18V6"></path>
                  </svg>
                  {job.salary}
                </div>
                <div className="text-zinc-500 dark:text-zinc-400 text-sm flex items-center gap-1.5">
                  <svg
                    className="w-3.5 h-3.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" x2="16" y1="2" y2="6"></line>
                    <line x1="8" x2="8" y1="2" y2="6"></line>
                    <line x1="3" x2="21" y1="10" y2="10"></line>
                  </svg>
                  {job.postedDate}
                </div>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="mt-5 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => {}}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              className="flex-1 px-4 py-2.5 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-lg font-medium text-sm hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-500 dark:focus:ring-zinc-400 focus:ring-opacity-50 flex items-center justify-center"
            >
              <svg
                className={`w-4 h-4 mr-2 transition-transform duration-300 ${isHovering ? "translate-x-0.5" : ""}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
              Apply Now
            </button>
            <button
              onClick={handleSave}
              className={cn(
                "flex-1 px-4 py-2.5 rounded-lg font-medium text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-500 dark:focus:ring-zinc-400 focus:ring-opacity-50 flex items-center justify-center gap-2",
                isSaved
                  ? "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100"
                  : "border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800/50",
              )}
            >
              <svg
                className={cn(
                  "w-4 h-4 transition-all duration-300",
                  isSaved ? "fill-zinc-900 dark:fill-zinc-100" : "fill-none",
                )}
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
              </svg>
              <span>{isSaved ? "Saved" : "Save"}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
