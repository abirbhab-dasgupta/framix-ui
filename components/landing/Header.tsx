"use client"

import { Frame, Menu, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Link as ViewTransitionsLink } from "next-view-transitions"
import { ThemeToggle } from "../ui/theme-toggle"

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <div className="sticky top-0 right-0 left-0 z-50">
      <div className="w-full bg-white dark:bg-black/5">
        {/* Header Content */}
        <div className="flex items-center justify-center w-full flex-col">
          <div
            className={`
              flex items-center justify-between
              bg-gradient-to-b from-white/60 via-white/40 to-white/60
              dark:from-black/40 dark:via-zinc-950/50 dark:to-black/60
              shadow-[0_8px_32px_-8px_rgba(0,0,0,0.12),0_4px_12px_-4px_rgba(255,255,255,0.4)]
              dark:shadow-[0_8px_32px_-8px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.05),0_4px_12px_-4px_rgba(255,255,255,0.1)]
              backdrop-blur-xl backdrop-saturate-150
              dark:backdrop-saturate-100
              border border-white/20 
              dark:border-white/5
              w-full sm:min-w-[800px] sm:max-w-[1200px]
              rounded-[28px]
              px-4 py-2.5
              relative
              transition-all duration-300 ease-out
              mt-2 overflow-hidden
              before:content-[''] before:absolute before:inset-0 
              before:rounded-[28px] before:p-[1px] 
              before:bg-gradient-to-b before:from-white/30 before:to-transparent
              dark:before:from-white/10 dark:before:via-transparent dark:before:to-white/2
              before:-z-10
              after:content-[''] after:absolute after:inset-[1px] 
              after:rounded-[27px] after:bg-gradient-to-b 
              after:from-transparent after:via-white/5 after:to-transparent
              dark:after:from-zinc-900/30 dark:after:via-black/20 dark:after:to-zinc-950/40
              dark:after:backdrop-blur-sm
              after:-z-10
              hover:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.18)]
              dark:hover:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.08)]
              hover:border-white/25
              dark:hover:border-white/8
              group
            `}
          >
            <div className="relative z-10 flex items-center justify-between w-full gap-2">
              {/* Logo section */}
              <div className="flex items-center gap-6">
                <Link href="/" className="flex items-center gap-2">
                  <Frame className="w-6 h-6 text-blue-500 dark:text-blue-400" />
                  <span className="hidden sm:block font-semibold">FramixUI</span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden sm:flex items-center gap-6">
                  <span className="text-zinc-300 dark:text-zinc-700">|</span>
                  <div className="flex items-center gap-4">
                    <ViewTransitionsLink
                      href={"/docs/components/auth-page"}
                      className='relative text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200 transition-colors pb-1 after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-500 dark:after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full'
                    >
                      Components
                    </ViewTransitionsLink>
                    <ViewTransitionsLink
                      href={"/docs"}
                      className='relative text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200 transition-colors pb-1 after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-500 dark:after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full'
                    >
                      Docs
                    </ViewTransitionsLink>
                    {/* <ViewTransitionsLink
                      href={"/pricing"}
                      className='relative text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200 transition-colors pb-1 after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-500 dark:after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full'
                    >
                      Pricing
                    </ViewTransitionsLink> */}
                  </div>
                </div>
              </div>

              {/* Right side items */}
              <div className="hidden sm:flex items-center gap-3">
                <ThemeToggle />
              </div>

              {/* Mobile Menu Button and Theme Toggle */}
              <div className="flex sm:hidden items-center gap-3">
                <ThemeToggle />
                <button
                  onClick={toggleMobileMenu}
                  className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                  aria-label="Toggle mobile menu"
                >
                  {isMobileMenuOpen ? (
                    <X className="w-5 h-5 text-zinc-600 dark:text-zinc-400" />
                  ) : (
                    <Menu className="w-5 h-5 text-zinc-600 dark:text-zinc-400" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          {isMobileMenuOpen && (
            <div className="sm:hidden w-full max-w-[1200px] mt-2 px-2">
              <div className="bg-gradient-to-b from-white/80 via-white/60 to-white/80 dark:from-black/60 dark:via-zinc-950/70 dark:to-black/80 backdrop-blur-xl border border-white/20 dark:border-white/5 rounded-[20px] p-4 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_32px_-8px_rgba(0,0,0,0.6)]">
                <div className="flex flex-col space-y-4">
                  <ViewTransitionsLink
                    href="/docs/components/background-paths"
                    className="relative text-base text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200 transition-colors pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-500 dark:after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Components
                  </ViewTransitionsLink>
                  <ViewTransitionsLink
                    href="/docs"
                    className="relative text-base text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200 transition-colors pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-500 dark:after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Docs
                  </ViewTransitionsLink>
                  {/* <ViewTransitionsLink
                    href="/pricing"
                    className="relative text-base text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200 transition-colors pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-500 dark:after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Pricing
                  </ViewTransitionsLink> */}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header
