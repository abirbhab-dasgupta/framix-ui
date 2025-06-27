import Link from "next/link"
import { LucideGithub, LinkedinIcon, Instagram, Mail } from "lucide-react"

export function Footer() {
  const socialLinks = [
    {
      href: "https://github.com/abirbhab-dasgupta/framix-ui",
      icon: (
        <LucideGithub className="w-5 h-5 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors" />
      ),
    },
    {
      href: "https://linkedin.com/in/abirbhab",
      icon: (
        <LinkedinIcon className="w-5 h-5 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors" />
      ),
    },
    {
      href: "https://instagram.com/abirbhab_",
      icon: (
        <Instagram className="w-5 h-5 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors" />
      ),
    },
    {
      href: "mailto:abirbhab00dasgupta@gmail.com",
      icon: (
        <Mail className="w-5 h-5 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors" />
      ),
    },
  ]

  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-950/50 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12">
        <div className="flex flex-col items-center space-y-8">
          {/* Social Links */}
          <div className="flex gap-6">
            {socialLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all duration-200 hover:scale-110"
              >
                {link.icon}
              </Link>
            ))}
          </div>

          {/* Divider */}
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-zinc-300 dark:via-zinc-600 to-transparent"></div>

          {/* Copyright Notice */}
          <p className="text-sm text-zinc-600 dark:text-zinc-400 font-medium">
            &copy; {new Date().getFullYear()} FramixUI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
