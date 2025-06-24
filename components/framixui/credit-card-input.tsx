"use client"

import { useState } from "react"
import { motion } from "motion/react"
import { CreditCard, Calendar, Lock } from "lucide-react"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"

export default function CreditCardInput() {
  const [cardNumber, setCardNumber] = useState("")
  const [expiry, setExpiry] = useState("")
  const [cvc, setCvc] = useState("")
  const [focused, setFocused] = useState<string | null>(null)
  const [flipped, setFlipped] = useState(false)

  // Format card number with spaces
  const formatCardNumber = (value: string) => {
    const digits = value.replace(/\D/g, "")
    const groups = []

    for (let i = 0; i < digits.length && i < 16; i += 4) {
      groups.push(digits.slice(i, i + 4))
    }

    return groups.join(" ")
  }

  // Format expiry date
  const formatExpiry = (value: string) => {
    const digits = value.replace(/\D/g, "")

    if (digits.length <= 2) {
      return digits
    }

    return `${digits.slice(0, 2)}/${digits.slice(2, 4)}`
  }

  // Detect card type based on first digits
  const getCardType = () => {
    const digits = cardNumber.replace(/\D/g, "")

    if (/^4/.test(digits)) return "Visa"
    if (/^5[1-5]/.test(digits)) return "Mastercard"
    if (/^3[47]/.test(digits)) return "Amex"
    if (/^6(?:011|5)/.test(digits)) return "Discover"

    return "Unknown"
  }

  // Handle CVC focus to flip card
  const handleCvcFocus = () => {
    setFocused("cvc")
    setFlipped(true)
  }

  const handleCvcBlur = () => {
    setFocused(null)
    setFlipped(false)
  }

  return (
    <div className="w-full max-w-md mx-auto space-y-6">
      {/* Card Preview */}
      <div className="relative h-48 w-full perspective">
        <motion.div
          className="w-full h-full relative preserve-3d"
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Front of card */}
          <motion.div
            className={cn(
              "absolute inset-0 rounded-xl p-6 backface-hidden",
              "bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-900",
              "shadow-xl border border-gray-700 dark:border-gray-600",
            )}
          >
            <div className="flex flex-col h-full justify-between">
              <div className="flex justify-between items-start">
                <div className="w-12 h-8 rounded bg-gradient-to-br from-gray-400 to-gray-300 opacity-80" />
                <motion.p className="text-white text-sm font-medium" animate={{ opacity: cardNumber ? 1 : 0.5 }}>
                  {getCardType()}
                </motion.p>
              </div>

              <motion.div
                className="text-center"
                animate={{
                  scale: focused === "number" ? 1.05 : 1,
                  y: focused === "number" ? -5 : 0,
                }}
              >
                <p className="text-gray-400 text-xs mb-1">Card Number</p>
                <p className="text-white text-xl tracking-wider font-mono">{cardNumber || "•••• •••• •••• ••••"}</p>
              </motion.div>

              <div className="flex justify-between">
                <motion.div
                  className="text-left"
                  animate={{
                    scale: focused === "expiry" ? 1.05 : 1,
                    y: focused === "expiry" ? -2 : 0,
                  }}
                >
                  <p className="text-gray-400 text-xs">Expiry</p>
                  <p className="text-white font-mono">{expiry || "MM/YY"}</p>
                </motion.div>
                <div className="text-right">
                  <p className="text-gray-400 text-xs">Cardholder</p>
                  <p className="text-white font-mono">YOUR NAME</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Back of card */}
          <motion.div
            className={cn(
              "absolute inset-0 rounded-xl p-6 backface-hidden rotateY-180",
              "bg-gradient-to-br from-gray-800 to-gray-900 dark:from-gray-900 dark:to-black",
              "shadow-xl border border-gray-700 dark:border-gray-600",
            )}
          >
            <div className="w-full h-10 bg-gray-700 dark:bg-gray-800 mt-4" />
            <div className="mt-6 flex justify-end">
              <motion.div
                className="bg-white dark:bg-gray-200 h-10 w-3/4 rounded flex items-center px-3 justify-end"
                animate={{
                  scale: focused === "cvc" ? 1.05 : 1,
                }}
              >
                <p className="text-gray-900 font-mono tracking-widest">{cvc || "•••"}</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Input Fields */}
      <div className="space-y-4">
        <div className="relative">
          <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 dark:text-gray-400" />
          <Input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
            onFocus={() => setFocused("number")}
            onBlur={() => setFocused(null)}
            placeholder="Card number"
            maxLength={19}
            className="pl-10"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 dark:text-gray-400" />
            <Input
              type="text"
              value={expiry}
              onChange={(e) => setExpiry(formatExpiry(e.target.value))}
              onFocus={() => setFocused("expiry")}
              onBlur={() => setFocused(null)}
              placeholder="MM/YY"
              maxLength={5}
              className="pl-10"
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 dark:text-gray-400" />
            <Input
              type="text"
              value={cvc}
              onChange={(e) => setCvc(e.target.value.replace(/\D/g, "").slice(0, 3))}
              onFocus={handleCvcFocus}
              onBlur={handleCvcBlur}
              placeholder="CVC"
              maxLength={3}
              className="pl-10"
            />
          </div>
        </div>
      </div>

      <style jsx global>{`
        .perspective {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotateY-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  )
}
