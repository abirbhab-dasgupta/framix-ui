import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12">
      <div className="flex flex-col items-center gap-4">
        <span className="text-7xl font-extrabold text-zinc-800 dark:text-zinc-100 select-none">
          404
        </span>
        <h1 className="text-2xl font-semibold text-zinc-700 dark:text-zinc-200 text-center">
          Page not found
        </h1>
        <p className="text-base text-zinc-600 dark:text-zinc-400 text-center max-w-sm">
          Sorry, the page you are looking for doesn&apos;t exist or has been moved.
        </p>
      </div>
      <Link
        href="/"
        className={`
          mt-8
          inline-flex items-center gap-2
          rounded-full
          bg-zinc-800 dark:bg-zinc-100
          text-white dark:text-zinc-900
          px-5 py-2.5
          font-medium
          shadow
          transition
          hover:bg-zinc-900 dark:hover:bg-white
          focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:focus:ring-zinc-600
          group
        `}
      >
        <span>Back to Home</span>
        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
      </Link>
    </div>
  );
}