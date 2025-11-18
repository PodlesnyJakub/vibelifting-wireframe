import { Navigation } from './components/sections/Navigation';
import { Hero } from './components/sections/Hero';
import { AIAgentInterface } from './components/sections/AIAgentInterface';
import { Services } from './components/sections/Services';
import { Guarantees } from './components/sections/Guarantees';
import { HowWeWork } from './components/sections/HowWeWork';
import { WhyUs } from './components/sections/WhyUs';
import { CaseStudy } from './components/sections/CaseStudy';
import { TechCredibility } from './components/sections/TechCredibility';
import { FAQ } from './components/sections/FAQ';
import { FinalCTA } from './components/sections/FinalCTA';
import { Footer } from './components/sections/Footer';
import { getFeatureFlags } from './lib/feature-flags';

export default function Home() {
  // Get feature flags - in a real app, you might pass variant ID based on user
  const flags = getFeatureFlags();
  
  return (
    <>
      {flags.showNavigation && <Navigation />}
      {flags.showHero && <Hero />}
      {flags.showAIAgentInterface && <AIAgentInterface />}
      {flags.showServices && <Services />}
      {flags.showGuarantees && <Guarantees />}
      {flags.showHowWeWork && <HowWeWork />}
      {flags.showWhyUs && <WhyUs />}
      {flags.showCaseStudy && <CaseStudy />}
      {flags.showTechCredibility && <TechCredibility />}
      {flags.showFAQ && <FAQ />}
      {flags.showFinalCTA && <FinalCTA />}
      {flags.showFooter && <Footer />}
    </>
  )
}

