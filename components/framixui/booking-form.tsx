"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Calendar, Clock, Users, ArrowRight, ArrowLeft, Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"

export default function BookingForm() {
  const [step, setStep] = useState(1)
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [time, setTime] = useState<string | null>(null)
  const [guests, setGuests] = useState(2)
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  const timeSlots = ["17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00"]

  const handleSubmit = async () => {
    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsComplete(true)
  }

  const nextStep = () => setStep(step + 1)
  const prevStep = () => setStep(step - 1)

  const isStepValid = () => {
    if (step === 1) return !!date && !!time
    if (step === 2) return guests > 0
    if (step === 3) return name.trim() !== "" && phone.trim() !== ""
    return false
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white dark:bg-black/5 rounded-2xl shadow-lg border border-gray-100 dark:border-white/10 overflow-hidden backdrop-blur-sm">
        {/* Progress Bar */}
        <div className="relative h-1 bg-gray-100 dark:bg-white/5">
          <motion.div
            className="absolute left-0 top-0 h-full bg-gradient-to-r from-blue-500 to-blue-600"
            initial={{ width: "0%" }}
            animate={{ width: `${(step / 3) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Header */}
        <div className="p-8 pb-0">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              {isComplete ? "Reservation Complete" : "Make a Reservation"}
            </h3>
            <div className="flex space-x-2">
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  className={cn(
                    "w-2 h-2 rounded-full transition-colors duration-300",
                    step >= i ? "bg-blue-500" : "bg-gray-200 dark:bg-white/20",
                  )}
                  animate={{
                    scale: step === i ? [1, 1.2, 1] : 1,
                  }}
                  transition={{
                    duration: 0.5,
                    repeat: step === i ? Number.POSITIVE_INFINITY : 0,
                    repeatDelay: 1.5,
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="px-8 pb-8">
          <AnimatePresence mode="wait">
            {isComplete ? (
              <motion.div
                key="complete"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center py-8"
              >
                <div className="w-16 h-16 bg-green-50 dark:bg-green-500/10 rounded-full flex items-center justify-center mb-6">
                  <Check className="h-8 w-8 text-green-600 dark:text-green-400" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Reservation Confirmed</h4>
                <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
                  We've sent a confirmation to your phone.
                </p>
                <div className="bg-gray-50 dark:bg-white/5 rounded-xl p-6 w-full border border-gray-100 dark:border-white/10">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-500 dark:text-gray-400">Date:</span>
                      <span className="text-gray-900 dark:text-white font-medium">
                        {date ? format(date, "EEEE, MMMM d, yyyy") : ""}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500 dark:text-gray-400">Time:</span>
                      <span className="text-gray-900 dark:text-white font-medium">{time}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500 dark:text-gray-400">Guests:</span>
                      <span className="text-gray-900 dark:text-white font-medium">{guests} people</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <>
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-6">Select date & time</h4>

                    <div className="space-y-6">
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal h-12 border-gray-200 dark:border-white/20",
                              "bg-white dark:bg-white/5 hover:bg-gray-50 dark:hover:bg-white/10",
                              !date && "text-gray-400 dark:text-gray-500",
                            )}
                          >
                            <Calendar className="mr-3 h-4 w-4" />
                            {date ? format(date, "PPP") : "Select date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <CalendarComponent
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            disabled={(date) => date < new Date()}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>

                      <div>
                        <label className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3 block">
                          Select time
                        </label>
                        <div className="grid grid-cols-3 gap-3">
                          {timeSlots.map((slot) => (
                            <Button
                              key={slot}
                              type="button"
                              variant="outline"
                              className={cn(
                                "h-12 border-gray-200 dark:border-white/20",
                                "bg-white dark:bg-white/5 hover:bg-gray-50 dark:hover:bg-white/10",
                                time === slot &&
                                  "bg-blue-50 text-blue-600 border-blue-200 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/30",
                              )}
                              onClick={() => setTime(slot)}
                            >
                              <Clock className="h-3 w-3 mr-2" />
                              {slot}
                            </Button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-6">Number of guests</h4>

                    <div className="flex flex-col items-center">
                      <div className="flex items-center justify-center mb-8">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => setGuests(Math.max(1, guests - 1))}
                          disabled={guests <= 1}
                          className="h-12 w-12 rounded-full border-gray-200 dark:border-white/20 bg-white dark:bg-white/5 hover:bg-gray-50 dark:hover:bg-white/10"
                        >
                          <span className="text-lg font-medium">-</span>
                        </Button>

                        <div className="w-32 mx-6 text-center">
                          <div className="text-4xl font-bold text-gray-900 dark:text-white">{guests}</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">Guests</div>
                        </div>

                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => setGuests(Math.min(10, guests + 1))}
                          disabled={guests >= 10}
                          className="h-12 w-12 rounded-full border-gray-200 dark:border-white/20 bg-white dark:bg-white/5 hover:bg-gray-50 dark:hover:bg-white/10"
                        >
                          <span className="text-lg font-medium">+</span>
                        </Button>
                      </div>

                      <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 text-sm">
                        <Users className="h-4 w-4" />
                        <span>Maximum 10 guests per reservation</span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-6">Your information</h4>

                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2 block">
                          Full name
                        </label>
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className={cn(
                            "w-full px-4 py-3 rounded-lg",
                            "bg-white dark:bg-white/5",
                            "border border-gray-200 dark:border-white/20",
                            "focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 dark:focus:border-blue-400",
                            "text-gray-900 dark:text-gray-100",
                            "placeholder:text-gray-400 dark:placeholder:text-gray-500",
                          )}
                          placeholder="Enter your name"
                        />
                      </div>

                      <div>
                        <label className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2 block">
                          Phone number
                        </label>
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className={cn(
                            "w-full px-4 py-3 rounded-lg",
                            "bg-white dark:bg-white/5",
                            "border border-gray-200 dark:border-white/20",
                            "focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 dark:focus:border-blue-400",
                            "text-gray-900 dark:text-gray-100",
                            "placeholder:text-gray-400 dark:placeholder:text-gray-500",
                          )}
                          placeholder="Enter your phone number"
                        />
                      </div>

                      <div className="bg-blue-50 dark:bg-blue-500/10 p-4 rounded-lg border border-blue-100 dark:border-blue-500/20">
                        <h5 className="text-sm font-semibold text-blue-800 dark:text-blue-300 mb-3">
                          Reservation Summary
                        </h5>
                        <div className="text-sm text-blue-700 dark:text-blue-400 space-y-2">
                          <div className="flex justify-between">
                            <span>Date:</span>
                            <span className="font-medium">{date ? format(date, "MMM d, yyyy") : ""}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Time:</span>
                            <span className="font-medium">{time}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Guests:</span>
                            <span className="font-medium">{guests} people</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8">
                  {step > 1 ? (
                    <Button
                      type="button"
                      variant="ghost"
                      onClick={prevStep}
                      className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10"
                    >
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Back
                    </Button>
                  ) : (
                    <div></div>
                  )}

                  <Button
                    type="button"
                    disabled={!isStepValid() || isSubmitting}
                    onClick={step < 3 ? nextStep : handleSubmit}
                    className={cn(
                      "bg-blue-600 hover:bg-blue-700 text-white font-medium px-6",
                      "dark:bg-blue-500 dark:hover:bg-blue-600",
                      "disabled:opacity-50 disabled:cursor-not-allowed",
                      "shadow-lg shadow-blue-500/25",
                    )}
                  >
                    {isSubmitting ? (
                      <>Processing...</>
                    ) : step < 3 ? (
                      <>
                        Next
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </>
                    ) : (
                      "Complete Reservation"
                    )}
                  </Button>
                </div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
