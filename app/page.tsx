import CtaAndFaqSection from '@/components/Body/CtaAndFaqSection'
import DemoQuiz from '@/components/Body/DemoQuiz'
import HomeSections from '@/components/Body/HomeSections'
import { HowItWorksSection, TestimonialsSection } from '@/components/Body/HowItworksSection'
import PricingSection from '@/components/Body/PricingSection'
import React from 'react'

export default function page() {
  return (
    <div>
      <HomeSections/>
      <DemoQuiz/>
      <HowItWorksSection/>
      <TestimonialsSection/>
      <PricingSection/>
      <CtaAndFaqSection/>
    </div>
  )
}
