import { cn } from "@/lib/utils"
import { ArrowUpRight, Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export interface SleekCardProps {
  title?: string
  subtitle?: string
  image?: string
  badge?: {
    text: string
    variant: "blue" | "green" | "orange" | "purple"
  }
  href?: string
}

export default function Card01({
  title = "Modern Design Systems",
  subtitle = "Explore the fundamentals of contemporary UI design and create stunning interfaces",
  image = "https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  badge = { text: "Featured", variant: "blue" },
  href = "#",
}: SleekCardProps) {
  const getBadgeStyles = (variant: string) => {
    switch (variant) {
      case "blue":
        return "bg-blue-500/90 text-white shadow-blue-500/25"
      case "green":
        return "bg-emerald-500/90 text-white shadow-emerald-500/25"
      case "orange":
        return "bg-orange-500/90 text-white shadow-orange-500/25"
      case "purple":
        return "bg-purple-500/90 text-white shadow-purple-500/25"
      default:
        return "bg-blue-500/90 text-white shadow-blue-500/25"
    }
  }

  return (
    <Link href={href} className="block w-full max-w-[320px] group">
      <div
        className={cn(
          "relative overflow-hidden rounded-3xl",
          "bg-white/90 dark:bg-zinc-900/90",
          "backdrop-blur-2xl",
          "border border-white/20 dark:border-zinc-800/50",
          "shadow-2xl shadow-black/10 dark:shadow-black/30",
          "transition-all duration-500 ease-out",
          "hover:shadow-3xl hover:shadow-black/20 dark:hover:shadow-black/40",
          "hover:border-white/30 dark:hover:border-zinc-700/60",
          "hover:-translate-y-3 hover:scale-[1.02]",
          "group cursor-pointer",
        )}
      >
        {/* Image Container */}
        <div className="relative h-[380px] overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
          />

          {/* Enhanced Gradient Overlay */}
          <div
            className={cn(
              "absolute inset-0",
              "bg-gradient-to-t from-black/95 via-black/50 to-transparent",
              "group-hover:from-black/90 group-hover:via-black/40",
              "transition-all duration-500",
            )}
          />

          {/* Animated Sparkle Effect */}
          <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200">
            <Sparkles className="w-5 h-5 text-white/80 animate-pulse" />
          </div>

          {/* Badge */}
          <div className="absolute top-4 right-4">
            <span
              className={cn(
                "px-3 py-1.5 rounded-full text-xs font-semibold",
                "backdrop-blur-xl",
                "shadow-lg",
                "transform transition-all duration-300",
                "group-hover:scale-110 group-hover:shadow-xl",
                getBadgeStyles(badge.variant),
              )}
            >
              {badge.text}
            </span>
          </div>

          {/* Content Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="flex items-end justify-between gap-4">
              <div className="space-y-3 flex-1">
                <h3 className="text-xl font-bold text-white leading-tight tracking-tight group-hover:text-blue-100 transition-colors duration-300">
                  {title}
                </h3>
                <p className="text-sm text-zinc-200 leading-relaxed line-clamp-2 group-hover:text-zinc-100 transition-colors duration-300">
                  {subtitle}
                </p>
              </div>

              {/* Enhanced Arrow Button */}
              <div
                className={cn(
                  "flex-shrink-0 p-3 rounded-full",
                  "bg-white/15 dark:bg-white/10",
                  "backdrop-blur-xl",
                  "border border-white/20",
                  "group-hover:bg-white/25 dark:group-hover:bg-white/20",
                  "group-hover:border-white/30",
                  "group-hover:shadow-lg group-hover:shadow-white/20",
                  "transition-all duration-300",
                  "group-hover:scale-110",
                )}
              >
                <ArrowUpRight className="w-5 h-5 text-white group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" />
              </div>
            </div>

            {/* Progress Indicator */}
            <div className="mt-4 w-full h-0.5 bg-white/20 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out"></div>
            </div>
          </div>
        </div>

        {/* Bottom Glow Effect */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
      </div>
    </Link>
  )
}
