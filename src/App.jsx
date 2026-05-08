import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SocialProof from './components/SocialProof'
import Problem from './components/Problem'
import Features from './components/Features'
import WhatWeHandle from './components/WhatWeHandle'
import HearIt from './components/HearIt'
import HowItWorks from './components/HowItWorks'
import GettingStarted from './components/GettingStarted'
import Integrations from './components/Integrations'
import Pricing from './components/Pricing'
import Team from './components/Team'
import Contact from './components/Contact'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import FloatingCTA from './components/FloatingCTA'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Problem />
        <Features />
        <WhatWeHandle />
        <HearIt />
        <HowItWorks />
        <GettingStarted />
        <Integrations />
        <Pricing />
        <Team />
        <Contact />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  )
}
