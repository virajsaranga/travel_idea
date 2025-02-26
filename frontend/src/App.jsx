import { useState } from 'react'
import Header from './component/Header'
import HeroSection from './component/HeroSection'
import FeaturedSection from './component/FeaturedSection'
import ThanksPage from './component/ThanksPage'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      <Header />
      <HeroSection />
      <FeaturedSection />
      <ThanksPage />
    </>
  )
}

export default App
