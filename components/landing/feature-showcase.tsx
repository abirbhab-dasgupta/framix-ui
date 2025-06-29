"use client"
import { motion, AnimatePresence } from "motion/react"
import type React from "react"

import { useState } from "react"
import { Copy, Palette, Zap, Settings, Check, Plus, Minus, ChevronLeft, ChevronRight } from "lucide-react"

const features = [
  {
    id: "copy-paste",
    icon: Copy,
    title: "Copy & Paste Ready",
    description: "Every component is ready to be copied directly into your project.",
    preview: "code",
  },
  {
    id: "customizable",
    icon: Settings,
    title: "Fully Customizable",
    description: "Tailwind-based styling that's easy to modify and extend.",
    preview: "colors",
  },
  {
    id: "interactive",
    icon: Zap,
    title: "Interactive Elements",
    description: "Smooth animations and transitions built-in.",
    preview: "animation",
  },
  {
    id: "design-system",
    icon: Palette,
    title: "Design System",
    description: "Consistent tokens and variables across all components.",
    preview: "palette",
  },
]

const CodePreview = () => {
  const [copied, setCopied] = useState(false)

  const codeString = `export function Button() {
  return (
    <button className="...">
      Click me
    </button>
  )
}`

  const handleCopy = () => {
    navigator.clipboard.writeText(codeString)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="bg-zinc-900 rounded-xl p-3 sm:p-4 md:p-6 font-mono text-xs sm:text-sm overflow-hidden relative">
      <div className="flex items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4">
        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500" />
        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500" />
        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500" />
        <span className="ml-1 sm:ml-2 text-zinc-400 text-[10px] sm:text-xs">Button.tsx</span>
      </div>
      <div className="text-zinc-300 leading-relaxed mb-3 sm:mb-4 overflow-x-auto">
        <div className="text-purple-400">export</div> <div className="text-blue-400 inline">function</div>{" "}
        <div className="text-yellow-300 inline">Button</div>
        <div className="text-zinc-300 inline">() {`{`}</div>
        <br />
        <div className="ml-2 sm:ml-4 text-blue-400">return</div> <div className="text-zinc-300 inline">(</div>
        <br />
        <div className="ml-4 sm:ml-8 text-red-400">{`<button`}</div> <div className="text-green-400 inline">className</div>
        <div className="text-zinc-300 inline">=</div>
        <div className="text-orange-400 inline">&quot;...&quot;</div>
        <div className="text-red-400 inline">{`>`}</div>
        <br />
        <div className="ml-6 sm:ml-12 text-zinc-300">Click me</div>
        <br />
        <div className="ml-4 sm:ml-8 text-red-400">{`</button>`}</div>
        <br />
        <div className="ml-2 sm:ml-4 text-zinc-300">)</div>
        <br />
        <div className="text-zinc-300">{`}`}</div>
      </div>

      {/* Copy Button */}
      <div className="flex justify-end">
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors duration-200 text-zinc-300 hover:text-white text-xs sm:text-sm"
        >
          {copied ? (
            <>
              <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
              <span className="text-green-400 hidden sm:inline">Copied!</span>
              <span className="text-green-400 sm:hidden">✓</span>
            </>
          ) : (
            <>
              <Copy className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">Copy</span>
            </>
          )}
        </button>
      </div>
    </div>
  )
}

const CustomizableDemo = () => {
  const [boxSize, setBoxSize] = useState(100)

  const increaseSize = () => setBoxSize((prev) => Math.min(prev + 20, 200))
  const decreaseSize = () => setBoxSize((prev) => Math.max(prev - 20, 60))

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 p-3 sm:p-4 md:p-6 h-full">
      {/* Visual Box */}
      <div className="flex flex-col items-center justify-center space-y-3 sm:space-y-4 order-2 lg:order-1">
        <motion.div
          className="bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl sm:rounded-2xl shadow-lg"
          animate={{
            width: boxSize,
            height: boxSize,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />

        {/* Size Controls */}
        <div className="flex items-center gap-3 sm:gap-4">
          <button
            onClick={decreaseSize}
            className="p-1.5 sm:p-2 bg-zinc-200 dark:bg-zinc-700 hover:bg-zinc-300 dark:hover:bg-zinc-600 rounded-lg transition-colors"
          >
            <Minus className="w-3 h-3 sm:w-4 sm:h-4" />
          </button>
          <span className="text-xs sm:text-sm font-mono text-zinc-600 dark:text-zinc-400 min-w-[50px] sm:min-w-[60px] text-center">
            {boxSize}px
          </span>
          <button
            onClick={increaseSize}
            className="p-1.5 sm:p-2 bg-zinc-200 dark:bg-zinc-700 hover:bg-zinc-300 dark:hover:bg-zinc-600 rounded-lg transition-colors"
          >
            <Plus className="w-3 h-3 sm:w-4 sm:h-4" />
          </button>
        </div>
      </div>

      {/* CSS Code */}
      <div className="bg-zinc-900 rounded-xl p-3 sm:p-4 font-mono text-xs sm:text-sm order-1 lg:order-2 overflow-x-auto">
        <div className="text-zinc-400 text-[10px] sm:text-xs mb-2">styles.css</div>
        <div className="text-zinc-300 leading-relaxed">
          <div className="text-orange-400">.box</div> <div className="text-zinc-300 inline">{`{`}</div>
          <br />
          <div className="ml-2 sm:ml-4 text-blue-400">width</div>
          <div className="text-zinc-300 inline">: </div>
          <div className="text-green-400 inline">{boxSize}px</div>
          <div className="text-zinc-300 inline">;</div>
          <br />
          <div className="ml-2 sm:ml-4 text-blue-400">height</div>
          <div className="text-zinc-300 inline">: </div>
          <div className="text-green-400 inline">{boxSize}px</div>
          <div className="text-zinc-300 inline">;</div>
          <br />
          <div className="ml-2 sm:ml-4 text-blue-400">background</div>
          <div className="text-zinc-300 inline">: </div>
          <div className="text-purple-400 inline">linear-gradient</div>
          <div className="text-zinc-300 inline">(</div>
          <br />
          <div className="ml-4 sm:ml-8 text-green-400">135deg</div>
          <div className="text-zinc-300 inline">,</div>
          <br />
          <div className="ml-4 sm:ml-8 text-green-400">#a855f7</div>
          <div className="text-zinc-300 inline">,</div>
          <br />
          <div className="ml-4 sm:ml-8 text-green-400">#ec4899</div>
          <br />
          <div className="ml-2 sm:ml-4 text-zinc-300">);</div>
          <br />
          <div className="ml-2 sm:ml-4 text-blue-400">border-radius</div>
          <div className="text-zinc-300 inline">: </div>
          <div className="text-green-400 inline">16px</div>
          <div className="text-zinc-300 inline">;</div>
          <br />
          <div className="text-zinc-300">{`}`}</div>
        </div>
      </div>
    </div>
  )
}

const AnimationDemo = () => {
  const [isWobbling, setIsWobbling] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleWobble = () => {
    if (!isWobbling) {
      setIsWobbling(true)
      setTimeout(() => setIsWobbling(false), 800)
    }
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const x = e.clientX - rect.left - centerX
    const y = e.clientY - rect.top - centerY

    // Adjust constraint based on screen size
    const ballSize = window.innerWidth < 640 ? 24 : window.innerWidth < 768 ? 28 : 32
    const maxX = centerX - ballSize
    const maxY = centerY - ballSize
    const constrainedX = Math.max(-maxX, Math.min(maxX, x))
    const constrainedY = Math.max(-maxY, Math.min(maxY, y))

    setPosition({ x: constrainedX, y: constrainedY })
  }

  const handleTouch = (e: React.TouchEvent<HTMLDivElement>) => {
    e.preventDefault()
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const touch = e.touches[0]
    const x = touch.clientX - rect.left - centerX
    const y = touch.clientY - rect.top - centerY

    const ballSize = window.innerWidth < 640 ? 24 : window.innerWidth < 768 ? 28 : 32
    const maxX = centerX - ballSize
    const maxY = centerY - ballSize
    const constrainedX = Math.max(-maxX, Math.min(maxX, x))
    const constrainedY = Math.max(-maxY, Math.min(maxY, y))

    setPosition({ x: constrainedX, y: constrainedY })
  }

  return (
    <div
      className="flex items-center justify-center h-full p-4 sm:p-6 md:p-8 relative cursor-none bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-700 dark:to-zinc-800 rounded-xl border-2 border-dashed border-zinc-300 dark:border-zinc-600"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouch}
    >
      <motion.div
        className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full cursor-pointer shadow-xl relative z-10"
        animate={{
          x: position.x,
          y: position.y,
          ...(isWobbling && {
            rotate: [0, -10, 10, -10, 10, -5, 5, 0],
            scale: [1, 1.1, 0.9, 1.1, 0.9, 1.05, 0.95, 1],
          }),
        }}
        transition={{
          x: { type: "spring", stiffness: 300, damping: 30 },
          y: { type: "spring", stiffness: 300, damping: 30 },
          rotate: { duration: 0.8, ease: "easeInOut" },
          scale: { duration: 0.8, ease: "easeInOut" },
        }}
        onClick={handleWobble}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      />

      {/* Instructions */}
      <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 text-[10px] sm:text-xs text-zinc-500 dark:text-zinc-400 text-center">
        <div className="hidden sm:block">Move mouse to guide the ball</div>
        <div className="hidden sm:block">Click to wobble!</div>
        <div className="sm:hidden">Tap to wobble!</div>
      </div>
    </div>
  )
}

const PaletteDemo = () => {
  const [selectedColor, setSelectedColor] = useState("#3B82F6")

  const colors = [
    { hex: "#3B82F6", name: "Primary Blue", class: "bg-blue-500" },
    { hex: "#EF4444", name: "Red", class: "bg-red-500" },
    { hex: "#F97316", name: "Orange", class: "bg-orange-500" },
    { hex: "#EAB308", name: "Yellow", class: "bg-yellow-500" },
    { hex: "#22C55E", name: "Green", class: "bg-green-500" },
    { hex: "#06B6D4", name: "Cyan", class: "bg-cyan-500" },
    { hex: "#8B5CF6", name: "Purple", class: "bg-purple-500" },
    { hex: "#EC4899", name: "Pink", class: "bg-pink-500" },
  ]

  const handleColorClick = (color: (typeof colors)[0]) => {
    setSelectedColor(color.hex)
  }

  const handleCopyColor = () => {
    navigator.clipboard.writeText(selectedColor)
  }

  return (
    <div className="p-3 sm:p-4 md:p-6 space-y-4 sm:space-y-6">
      {/* Selected Color Display */}
      <div className="bg-zinc-800 rounded-lg p-3 sm:p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs sm:text-sm font-medium font-mono" style={{ color: selectedColor }}>
            {selectedColor}
          </span>
          <button onClick={handleCopyColor} className="text-zinc-400 hover:text-white cursor-pointer transition-colors">
            <Copy className="w-3 h-3 sm:w-4 sm:h-4" />
          </button>
        </div>
        <div className="text-[10px] sm:text-xs text-zinc-400 mb-2">
          {colors.find((c) => c.hex === selectedColor)?.name || "Selected Color"}
        </div>
        <div className="w-full h-2.5 sm:h-3 rounded-full" style={{ backgroundColor: selectedColor }} />
      </div>

      {/* Color Grid */}
      <div className="grid grid-cols-4 gap-2 sm:gap-3">
        {colors.map((color, index) => (
          <motion.button
            key={color.hex}
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: index * 0.05, type: "spring", stiffness: 200 }}
            onClick={() => handleColorClick(color)}
            className={`aspect-square rounded-lg sm:rounded-xl ${color.class} shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer relative ${
              selectedColor === color.hex ? "ring-2 ring-white ring-offset-1 sm:ring-offset-2 ring-offset-zinc-800" : ""
            }`}
          >
            {selectedColor === color.hex && (
              <div className="absolute inset-0 flex items-center justify-center">
                <Check className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
              </div>
            )}
          </motion.button>
        ))}
      </div>
    </div>
  )
}

const previewComponents = {
  code: CodePreview,
  colors: CustomizableDemo,
  animation: AnimationDemo,
  palette: PaletteDemo,
}

export function FeatureShowcase() {
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0)
  const activeFeature = features[activeFeatureIndex]
  const ActivePreview = previewComponents[activeFeature.preview as keyof typeof previewComponents] || CodePreview

  const nextFeature = () => {
    setActiveFeatureIndex((prev) => (prev + 1) % features.length)
  }

  const prevFeature = () => {
    setActiveFeatureIndex((prev) => (prev - 1 + features.length) % features.length)
  }

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-3 sm:px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-white mb-3 sm:mb-4 leading-tight">
            Experience the{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-cyan-500">Difference</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto px-4">
            Interactive components that showcase real functionality, not just pretty pictures
          </p>
        </motion.div>

        <div className="space-y-6 sm:space-y-8">
          {/* Interactive Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full sm:w-5/6 md:w-4/5 lg:w-3/4 xl:w-2/3 mx-auto"
          >
            <div className="bg-white dark:bg-[#010101] backdrop-blur-sm border border-zinc-200/50 dark:border-zinc-700/50 rounded-2xl sm:rounded-3xl p-1.5 sm:p-2 shadow-2xl">
              <div className="bg-zinc-50 dark:bg-zinc-800 rounded-xl sm:rounded-2xl min-h-[300px] sm:min-h-[350px] md:min-h-[400px] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeFeatureIndex}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="h-full"
                  >
                    <ActivePreview />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* Navigation with Single Feature Card */}
          <div className="relative flex flex-col items-center justify-center gap-3 xs:gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16">
            {/* Single Active Feature Card - Always first on mobile */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeatureIndex}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="order-1 bg-white dark:bg-zinc-800 shadow-xl border-2 border-sky-200 dark:border-sky-800 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl w-full max-w-[280px] sm:min-w-[320px] sm:max-w-[400px] lg:mx-8 xl:mx-12 2xl:mx-16"
              >
                <div className="flex flex-col items-center text-center gap-4 sm:gap-6">
                  <div className="p-3 sm:p-4 md:p-5 rounded-xl sm:rounded-2xl bg-gradient-to-br from-sky-500 to-cyan-500 text-white shadow-lg">
                    <activeFeature.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white mb-2 sm:mb-3">{activeFeature.title}</h3>
                    <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">{activeFeature.description}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Arrow buttons container - Horizontal on mobile, absolute positioned on desktop */}
            <div className="order-2 flex items-center justify-center gap-4 sm:gap-6 lg:absolute lg:inset-0 lg:pointer-events-none">
              {/* Left Arrow */}
              <button
                onClick={prevFeature}
                className="lg:absolute lg:left-0 xl:left-4 2xl:left-8 lg:top-1/2 lg:transform lg:-translate-y-1/2 lg:pointer-events-auto p-1.5 xs:p-2 sm:p-3 md:p-4 rounded-full bg-white/60 dark:bg-zinc-900/60 backdrop-blur-sm border border-zinc-200/50 dark:border-zinc-700/50 hover:bg-white/80 dark:hover:bg-zinc-800/80 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 z-10 touch-manipulation min-h-[36px] min-w-[36px] xs:min-h-[40px] xs:min-w-[40px] sm:min-h-[44px] sm:min-w-[44px] md:min-h-[52px] md:min-w-[52px]"
              >
                <ChevronLeft className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-zinc-600 dark:text-zinc-400" />
              </button>

              {/* Right Arrow */}
              <button
                onClick={nextFeature}
                className="lg:absolute lg:right-0 xl:right-4 2xl:right-8 lg:top-1/2 lg:transform lg:-translate-y-1/2 lg:pointer-events-auto p-1.5 xs:p-2 sm:p-3 md:p-4 rounded-full bg-white/60 dark:bg-zinc-900/60 backdrop-blur-sm border border-zinc-200/50 dark:border-zinc-700/50 hover:bg-white/80 dark:hover:bg-zinc-800/80 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 z-10 touch-manipulation min-h-[36px] min-w-[36px] xs:min-h-[40px] xs:min-w-[40px] sm:min-h-[44px] sm:min-w-[44px] md:min-h-[52px] md:min-w-[52px]"
              >
                <ChevronRight className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-zinc-600 dark:text-zinc-400" />
              </button>
            </div>
          </div>

          {/* Feature Indicators */}
          <div className="flex justify-center gap-2 sm:gap-3">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveFeatureIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === activeFeatureIndex
                    ? "bg-sky-500 w-8 sm:w-10 h-2.5 sm:h-3"
                    : "bg-zinc-300 dark:bg-zinc-600 hover:bg-zinc-400 dark:hover:bg-zinc-500 w-2.5 sm:w-3 h-2.5 sm:h-3"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
