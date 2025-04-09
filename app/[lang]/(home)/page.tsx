import CtaAndFaqSection from '@/components/Body/CtaAndFaqSection'
import DemoQuiz from '@/components/Body/DemoQuiz'
import HomeSections from '@/components/Body/HomeSections'
import { HowItWorksSection, TestimonialsSection } from '@/components/Body/HowItworksSection'
import PricingSection from '@/components/Body/PricingSection'
import React from 'react'
import { getDictionary } from '../dictionaries'
import ParentsDashboard from '@/components/Body/ParentsDashboard'

export default async function page(
  props: {
    params: Promise<{ lang: string }>;
  }
) {
  const params = await props.params;

  const {
    lang
  } = params;

  const t = await getDictionary(lang);
  return (
    <div>
      <HomeSections lang={t}/>
      <DemoQuiz lang={t}/>
      <HowItWorksSection lang={t}/>
      <ParentsDashboard lang={t}/>
      {/* <TestimonialsSection lang={t}/> */}
      {/* <PricingSection lang={t}/> */}
      <CtaAndFaqSection lang={t}/>
    </div>
  )
}
