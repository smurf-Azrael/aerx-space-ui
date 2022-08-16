import React from 'react'
import Header from './header'
import HeroSection from './heroSection'
import SectionOne from './sectionOne'
import SectionTwo from './sectionTwo'
import About from './about'
import NewsLetterForm from './newsLetterForm'
import WithDots from "./WithDots";








const Index: React.FC = () => {



  return (
  <>
 
  <WithDots>
    <Header />
    <HeroSection />
    <SectionOne />
    <SectionTwo  />
    <About  />
    <NewsLetterForm />
  </WithDots>



  </>
  )
}

export default Index;