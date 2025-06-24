"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import { MapPin, X, Navigation, Clock, Search, Loader2 } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Input05() {
  const [query, setQuery] = useState("")
  const [isFocused, setIsFocused] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Mock location suggestions
  const mockLocations = [
    { id: 1, name: "New York City, NY, USA", type: "city" },
    { id: 2, name: "Los Angeles, CA, USA", type: "city" },
    { id: 3, name: "San Francisco, CA, USA", type: "city" },
    { id: 4, name: "Central Park, New York, NY, USA", type: "place" },
    { id: 5, name: "Times Square, New York, NY, USA", type: "place" },
    { id: 6, name: "Golden Gate Park, San Francisco, CA, USA", type: "place" },
  ]

  // Recent locations
  const recentLocations = [
    { id: 101, name: "Home", address: "123 Main St, Anytown, USA", type: "recent" },
    { id: 102, name: "Work", address: "456 Office Blvd, Worktown, USA", type: "recent" },
    { id: 103, name: "Gym", address: "789 Fitness Ave, Healthville, USA", type: "recent" },
  ]

  // Filter locations based on query
  const filteredLocations = query
    ? mockLocations.filter((location) => location.name.toLowerCase().includes(query.toLowerCase()))
    : []

  // Simulate loading state when typing
  useEffect(() => {
    if (query) {
      setIsLoading(true)
      const timer = setTimeout(() => {
        setIsLoading(false)
      }, 800)
      return () => clearTimeout(timer)
    }
  }, [query])

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
    setSelectedLocation(null)
    inputRef.current?.focus()
  }

  const handleSelectLocation = (locationName: string) => {
    setSelectedLocation(locationName)
    setQuery(locationName)
    setIsFocused(false)
  }

  const handleUseCurrentLocation = () => {
    setIsLoading(true)
    // Simulate geolocation
    setTimeout(() => {
      setSelectedLocation("Current Location")
      setQuery("Current Location")
      setIsLoading(false)
      setIsFocused(false)
    }, 1500)
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
            <MapPin className="h-4 w-4 mr-2 text-blue-500" />
            <Input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setIsFocused(true)}
              placeholder="Enter location..."
              className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 p-0 h-10 text-sm"
            />
            <AnimatePresence>
              {isLoading ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.15 }}
                >
                  <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
                </motion.div>
              ) : (
                query && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Button type="button" variant="ghost" size="icon" className="h-6 w-6" onClick={handleClear}>
                      <X className="h-3.5 w-3.5" />
                      <span className="sr-only">Clear location</span>
                    </Button>
                  </motion.div>
                )
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        <AnimatePresence>
          {isFocused && (
            <motion.div
              className="absolute left-0 right-0 mt-2 py-2 bg-background border rounded-lg shadow-md z-10"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {/* Current location option */}
              <motion.div
                className="px-3 py-2 hover:bg-muted flex items-center cursor-pointer"
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                onClick={handleUseCurrentLocation}
              >
                <div className="mr-3 p-1.5 bg-blue-100 dark:bg-blue-900 rounded-full text-blue-600 dark:text-blue-300">
                  <Navigation className="h-3.5 w-3.5" />
                </div>
                <span className="text-sm font-medium">Use current location</span>
              </motion.div>

              {/* Divider */}
              {(recentLocations.length > 0 || filteredLocations.length > 0) && <div className="h-px bg-muted my-2" />}

              {/* Recent locations */}
              {!query && recentLocations.length > 0 && (
                <>
                  <div className="px-3 py-1 text-xs text-muted-foreground">Recent locations</div>
                  {recentLocations.map((location, index) => (
                    <motion.div
                      key={location.id}
                      className="px-3 py-2 hover:bg-muted flex items-center cursor-pointer"
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, delay: index * 0.05 }}
                      onClick={() => handleSelectLocation(location.name)}
                    >
                      <div className="mr-3 p-1.5 bg-muted rounded-full text-muted-foreground">
                        <Clock className="h-3.5 w-3.5" />
                      </div>
                      <div>
                        <div className="text-sm font-medium">{location.name}</div>
                        <div className="text-xs text-muted-foreground">{location.address}</div>
                      </div>
                    </motion.div>
                  ))}
                </>
              )}

              {/* Search results */}
              {query && (
                <div className="max-h-60 overflow-y-auto">
                  {isLoading ? (
                    <div className="px-3 py-8 flex flex-col items-center justify-center">
                      <Loader2 className="h-6 w-6 animate-spin text-muted-foreground mb-2" />
                      <p className="text-sm text-muted-foreground">Searching locations...</p>
                    </div>
                  ) : filteredLocations.length > 0 ? (
                    filteredLocations.map((location, index) => (
                      <motion.div
                        key={location.id}
                        className="px-3 py-2 hover:bg-muted flex items-center cursor-pointer"
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2, delay: index * 0.05 }}
                        onClick={() => handleSelectLocation(location.name)}
                      >
                        <div className="mr-3 p-1.5 bg-muted rounded-full text-muted-foreground">
                          <MapPin className="h-3.5 w-3.5" />
                        </div>
                        <span className="text-sm">{location.name}</span>
                      </motion.div>
                    ))
                  ) : (
                    <div className="px-3 py-8 flex flex-col items-center justify-center">
                      <Search className="h-6 w-6 text-muted-foreground mb-2" />
                      <p className="text-sm text-muted-foreground">No locations found</p>
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
