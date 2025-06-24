"use client"

import { useState, useRef } from "react"
import { motion } from "motion/react"
import { Eye, EyeOff, Check, X, AlertTriangle } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Input04() {
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  // Password strength calculation
  const calculateStrength = (pass: string): number => {
    let score = 0
    if (!pass) return score

    // Length check
    if (pass.length >= 8) score += 1
    if (pass.length >= 12) score += 1

    // Character variety checks
    if (/[A-Z]/.test(pass)) score += 1
    if (/[a-z]/.test(pass)) score += 1
    if (/[0-9]/.test(pass)) score += 1
    if (/[^A-Za-z0-9]/.test(pass)) score += 1

    return Math.min(score, 5)
  }

  const strength = calculateStrength(password)

  const getStrengthLabel = (score: number): string => {
    if (score === 0) return "Enter password"
    if (score === 1) return "Very weak"
    if (score === 2) return "Weak"
    if (score === 3) return "Medium"
    if (score === 4) return "Strong"
    return "Very strong"
  }

  const getStrengthColor = (score: number): string => {
    if (score === 0) return "bg-muted"
    if (score === 1) return "bg-red-500"
    if (score === 2) return "bg-orange-500"
    if (score === 3) return "bg-yellow-500"
    if (score === 4) return "bg-green-500"
    return "bg-emerald-500"
  }

  const getStrengthIcon = (score: number) => {
    if (score === 0) return null
    if (score <= 2) return <X className="h-3.5 w-3.5" />
    if (score === 3) return <AlertTriangle className="h-3.5 w-3.5" />
    return <Check className="h-3.5 w-3.5" />
  }

  // Password requirements
  const requirements = [
    { id: 1, text: "At least 8 characters", met: password.length >= 8 },
    { id: 2, text: "At least 1 uppercase letter", met: /[A-Z]/.test(password) },
    { id: 3, text: "At least 1 lowercase letter", met: /[a-z]/.test(password) },
    { id: 4, text: "At least 1 number", met: /[0-9]/.test(password) },
    { id: 5, text: "At least 1 special character", met: /[^A-Za-z0-9]/.test(password) },
  ]

  return (
    <div className="w-full max-w-md mx-auto space-y-4">
      <div className="relative">
        <div className="flex items-center">
          <div className="relative flex-1">
            <Input
              ref={inputRef}
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create password"
              className="pr-10"
            />
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="absolute right-0 top-0 h-full px-3 text-muted-foreground hover:text-foreground"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              <span className="sr-only">{showPassword ? "Hide password" : "Show password"}</span>
            </Button>
          </div>
        </div>

        {/* Strength meter */}
        <div className="mt-2">
          <div className="flex items-center justify-between mb-1">
            <div className="text-xs font-medium flex items-center gap-1.5">
              <motion.span
                key={getStrengthLabel(strength)}
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-1"
              >
                {strength > 0 && (
                  <span
                    className={cn(
                      "flex items-center justify-center rounded-full w-4 h-4",
                      strength <= 2
                        ? "bg-red-500 text-white"
                        : strength === 3
                          ? "bg-yellow-500 text-white"
                          : "bg-green-500 text-white",
                    )}
                  >
                    {getStrengthIcon(strength)}
                  </span>
                )}
                {getStrengthLabel(strength)}
              </motion.span>
            </div>
          </div>

          <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden flex">
            {[1, 2, 3, 4, 5].map((segment) => (
              <motion.div
                key={segment}
                className={cn("h-full", segment <= strength ? getStrengthColor(strength) : "bg-muted")}
                style={{ width: "20%" }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: segment <= strength ? 1 : 0 }}
                transition={{ duration: 0.3, delay: segment * 0.05 }}
              />
            ))}
          </div>
        </div>

        {/* Requirements */}
        <div className="mt-3 space-y-1">
          {requirements.map((req) => (
            <motion.div
              key={req.id}
              className="flex items-center text-xs"
              animate={{
                opacity: password ? 1 : 0.5,
                color: req.met ? "var(--green-500)" : "var(--muted-foreground)",
              }}
            >
              <motion.div
                animate={{
                  backgroundColor: req.met ? "var(--green-500)" : "transparent",
                  borderColor: req.met ? "var(--green-500)" : "var(--muted-foreground)",
                }}
                className={cn("mr-2 h-3.5 w-3.5 rounded-full border flex items-center justify-center")}
              >
                {req.met && <Check className="h-2 w-2 text-white" />}
              </motion.div>
              {req.text}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
