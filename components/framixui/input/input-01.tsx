"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Search, X, ShoppingBag, Clock, TrendingUp } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Input01() {
  const [query, setQuery] = useState("")
  const [isFocused, setIsFocused] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Mock suggestions based on query
  const suggestions = [
    { id: 1, text: "Wireless headphones", type: "trending" },
    { id: 2, text: "Smart watches", type: "trending" },
    { id: 3, text: "Bluetooth speakers", type: "recent" },
    { id: 4, text: "Laptop accessories", type: "recent" },
    { id: 5, text: "Fitness trackers", type: "product" },
    { id: 6, text: "Mechanical keyboards", type: "product" },
  ].filter((item) => query && item.text.toLowerCase().includes(query.toLowerCase()))

  // Handle click outside to close suggestions
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsFocused(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleClear = () => {
    setQuery("")
    inputRef.current?.focus()
  }

  const getIcon = (type: string) => {
    switch (type) {
      case "trending":
        return <TrendingUp className="h-3.5 w-3.5" />
      case "recent":
        return <Clock className="h-3.5 w-3.5" />
      case "product":
        return <ShoppingBag className="h-3.5 w-3.5" />
      default:
        return <Search className="h-3.5 w-3.5" />
    }
  }

  return (
    <div className="w-full max-w-md mx-auto" ref={containerRef}>
      <div className="relative">
        <motion.div
          className={cn(
            "relative rounded-lg",
            "border border-input",
            "bg-background",
            "shadow-sm",
            isFocused && "ring-2 ring-ring ring-offset-2 ring-offset-background",
          )}
          animate={{
            scale: isFocused ? 1.02 : 1,
          }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex items-center px-3">
            <Search className="h-4 w-4 text-muted-foreground mr-2" />
            <Input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setIsFocused(true)}
              placeholder="Search products..."
              className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 p-0 h-10 text-sm"
            />
            <AnimatePresence>
              {query && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.15 }}
                >
                  <Button type="button" variant="ghost" size="icon" className="h-6 w-6" onClick={handleClear}>
                    <X className="h-3.5 w-3.5" />
                    <span className="sr-only">Clear search</span>
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        <AnimatePresence>
          {isFocused && suggestions.length > 0 && (
            <motion.div
              className="absolute left-0 right-0 mt-2 py-2 bg-background border rounded-lg shadow-md z-10"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <div className="max-h-60 overflow-y-auto">
                {suggestions.map((suggestion, index) => (
                  <motion.div
                    key={suggestion.id}
                    className="px-3 py-1.5 hover:bg-muted flex items-center cursor-pointer"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                    onClick={() => {
                      setQuery(suggestion.text)
                      setIsFocused(false)
                    }}
                  >
                    <span className="mr-2 text-muted-foreground">{getIcon(suggestion.type)}</span>
                    <span className="text-sm">{suggestion.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
