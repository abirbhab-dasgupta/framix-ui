"use client"

import React from 'react'
import { motion } from "motion/react"
import TailwindCSS from '../icons/tailwindcss'
import { BrowseComponentsButton } from '../ui/browse-button'
import { BrowseBlocksButton } from '../ui/browse-blocks'
import Loader02 from '../framixui/loader/loader-02'
import Button03 from '../framixui/button/button-03'
import SleekProfileCard from '../framixui/sleek-profile-card'
import Button04 from '../framixui/button/button-04'
import Input05 from '../framixui/input/input-05'
import Button05 from '../framixui/button/button-05'



const HeroSection = () => {
  return (
    <div className='mx-auto w-full max-w-7xl min-h-screen flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-8 lg:gap-16 px-3 sm:px-6 md:py-12 lg:py-20'>
      {/* Left hand side  */}
      <div className='w-full lg:w-[45%] flex-col items-start text-left space-y-6 sm:space-y-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-zinc-900 dark:text-zinc-100">
            Pixel-<span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-cyan-500 to-blue-600 dark:from-sky-300 dark:via-cyan-400 dark:to-blue-500">Perfect</span>{" "}
            Components.
            <br />
            Clean and <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-cyan-500 to-blue-600 dark:from-sky-300 dark:via-cyan-400 dark:to-blue-500">Customizable.</span>
          </h1>

          <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-xl text-zinc-700 dark:text-zinc-300 max-w-lg">
            Build modern, responsive interfaces with numerous handcrafted UI components powered by{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-cyan-500 to-blue-600 dark:from-sky-300 dark:via-cyan-400 dark:to-blue-500">
              Tailwind CSS {" "}
            </span>
            and{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-cyan-500 to-blue-600 dark:from-sky-300 dark:via-cyan-400 dark:to-blue-500">
              shadcn/ui
            </span>
            — perfect for React and Next.js projects.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className='flex flex-col justify-start w-full'
        >
          <span className='text-xs sm:text-sm text-zinc-500 dark:text-zinc-300 pb-2 sm:pb-3 text-start flex items-center gap-2'>
            <TailwindCSS className='h-4 w-4' />
            <span className="flex items-center gap-1.5">
              Updated with Tailwind CSS <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-cyan-500 to-blue-600 dark:from-sky-300 dark:via-cyan-400 dark:to-blue-500">
                4.0!
              </span>
            </span>
            <span className="inline-flex items-center rounded-md bg-blue-50 dark:bg-blue-900/30 px-2 py-1 text-xs font-medium text-blue-700 dark:text-blue-300">
              New
            </span>
          </span>

          <div className='flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 justify-start'>
            <BrowseComponentsButton />
            <BrowseBlocksButton />
          </div>

        </motion.div>
      </div>


      {/* Right hand side  */}

      <div className="w-full lg:w-[55%] flex flex-col justify-between gap-4 sm:gap-6 lg:pl-8 mt-8 lg:mt-0">
        {/* Top Section - Profile Card + Right Sidebar */}
        <div className="flex flex-col sm:flex-row gap-4 h-auto sm:h-[52%]">
          {/* Profile Card - Left Side (Large) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex-1"
          >
            <span className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 block text-center mb-2 sm:mb-3 bg-zinc-100 dark:bg-zinc-800 px-2 sm:px-3 py-1 rounded-full w-fit mx-auto">
              {"<Profile Card/>"}
            </span>
            <div className="w-full h-full rounded-b-sm border-2 border-zinc-200 dark:border-zinc-700 bg-transparent flex  items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 p-6 overflow-hidden">
              <div className="w-4.5/5 h-full flex items-center justify-center scale-85">
                <SleekProfileCard />
              </div>
            </div>
          </motion.div>

          {/* Right Sidebar - Loader + Buttons */}
          <div className="w-full sm:w-36 flex flex-row sm:flex-col gap-2">
            {/* Loader */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-1/2 sm:w-full"
            >
              <span className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 block text-center mb-2 sm:mb-3 bg-zinc-100 dark:bg-zinc-800 px-2 sm:px-3 py-1 rounded-full w-fit mx-auto">
                {"<Loader/>"}
              </span>
              <div className="w-full h-24 sm:h-32 rounded-b-sm border-2 border-zinc-200 dark:border-zinc-700 flex items-center bg-transparent justify-center shadow-lg hover:shadow-xl transition-all duration-300">
                <Loader02 />
              </div>
            </motion.div>

            {/* Buttons Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="w-1/2 sm:w-full flex-1"
            >
              <span className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 block text-center mb-2 sm:mb-3 bg-zinc-100 dark:bg-zinc-800 px-2 sm:px-3 py-1 rounded-full w-fit mx-auto">
                {"<Buttons/>"}
              </span>
              <div className="w-full h-full rounded-b-sm border-2 border-zinc-200 dark:border-zinc-700 flex bg-transparent flex-col items-center justify-center gap-2 sm:gap-3 shadow-lg hover:shadow-xl transition-all duration-300 p-2 sm:p-4">
                <Button04/>
                <br /><br />
                <Button03/>
                <br /><br />
                <Button05 />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Input Section - Full Width */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-full"
        >
          <span className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 block text-center mb-2 sm:mb-3 bg-zinc-100 dark:bg-zinc-800 px-2 sm:px-3 rounded-full w-fit mx-auto">
            {"<Input/>"}
          </span>
          <div className="w-full h-16 sm:h-20 rounded-b-sm border-2 border-zinc-200 dark:border-zinc-700 flex items-center bg-transparent justify-center shadow-lg hover:shadow-xl transition-all duration-300 px-3 sm:px-6">
            <Input05 />
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default HeroSection