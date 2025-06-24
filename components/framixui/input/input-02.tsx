"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Mic, MicOff, Send, Trash2 } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Input02() {
  const [text, setText] = useState("")
  const [isRecording, setIsRecording] = useState(false)
  const [audioVisualization, setAudioVisualization] = useState<number[]>([])
  const inputRef = useRef<HTMLInputElement>(null)
  const animationFrameRef = useRef<number | null>(null)

  // Simulate audio visualization
  useEffect(() => {
    if (isRecording) {
      const generateRandomBars = () => {
        const bars = Array.from({ length: 12 }, () => Math.random() * 100)
        setAudioVisualization(bars)
        animationFrameRef.current = requestAnimationFrame(generateRandomBars)
      }

      generateRandomBars()

      // Simulate speech recognition after 3 seconds
      const timer = setTimeout(() => {
        const phrases = [
          "Schedule a meeting for tomorrow at 2 PM",
          "Remind me to call John later",
          "Add milk to my shopping list",
          "What's the weather forecast for today",
          "Send an email to the team about the project update",
        ]
        const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)]
        setText(randomPhrase)
        stopRecording()
      }, 3000)

      return () => {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current)
        }
        clearTimeout(timer)
      }
    }
  }, [isRecording])

  const startRecording = () => {
    setText("")
    setIsRecording(true)
  }

  const stopRecording = () => {
    setIsRecording(false)
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current)
    }
    setAudioVisualization([])
  }

  const clearText = () => {
    setText("")
    inputRef.current?.focus()
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="relative">
        <motion.div
          className={cn(
            "relative rounded-lg",
            "border border-input",
            "bg-background",
            "shadow-sm",
            isRecording && "ring-2 ring-red-500 ring-offset-2 ring-offset-background",
          )}
          animate={{
            scale: isRecording ? 1.02 : 1,
          }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex items-center px-3">
            <Input
              ref={inputRef}
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Speak or type your message..."
              className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 p-0 h-10 text-sm"
              disabled={isRecording}
            />
            <div className="flex items-center gap-1">
              {text && !isRecording && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.15 }}
                >
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-muted-foreground hover:text-foreground"
                    onClick={clearText}
                  >
                    <Trash2 className="h-4 w-4" />
                    <span className="sr-only">Clear text</span>
                  </Button>
                </motion.div>
              )}
              <Button
                type="button"
                variant={isRecording ? "destructive" : "secondary"}
                size="icon"
                className={cn("h-8 w-8", isRecording && "animate-pulse")}
                onClick={isRecording ? stopRecording : startRecording}
              >
                {isRecording ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
                <span className="sr-only">{isRecording ? "Stop recording" : "Start recording"}</span>
              </Button>
              {text && !isRecording && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.15 }}
                >
                  <Button type="button" size="icon" className="h-8 w-8 ml-1">
                    <Send className="h-4 w-4" />
                    <span className="sr-only">Send message</span>
                  </Button>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Audio visualization */}
        <AnimatePresence>
          {isRecording && (
            <motion.div
              className="absolute left-0 right-0 -bottom-12 flex items-end justify-center h-8 gap-0.5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {audioVisualization.map((height, index) => (
                <motion.div
                  key={index}
                  className="w-1 bg-red-500 rounded-full"
                  initial={{ height: 2 }}
                  animate={{ height: Math.max(4, Math.min(32, height / 3)) }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 10,
                  }}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
