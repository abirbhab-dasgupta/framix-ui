'use client'


import ComponentShowcase from '@/components/landing/component-showcase'
import { FeatureShowcase } from '@/components/landing/feature-showcase'
import HeroSection from '@/components/landing/Hero'
import React from 'react'


const Home = () => {
  return (
    <main className='bg-white dark:bg-[#010101] overflow-x-hidden'>
      <div className='grid grid-rows-[auto_1fr_auto] min-h-screen px-3 sm:px-4 md:px-6 lg:px-4 gap-2 sm:gap-4 md:gap-8 lg:gap-12'>
        <HeroSection/>
        <FeatureShowcase/>
        <ComponentShowcase/>
      </div>
    </main>
  )
}

export default Home