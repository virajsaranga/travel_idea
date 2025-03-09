import { useState } from 'react'
import Header from './component/Header'
import HeroSection from './component/HeroSection'
import FeaturedSection from './component/FeaturedSection'
import ThanksPage from './component/ThanksPage'
import TravelGuides from './component/TravelGuides'
import DestinationsSection from './component/DestinationsSection'
import RecentPosts from './component/RecentPosts'
import GetInTouch from './component/GetInTouch'
import Newsletter from './component/Newsletter'
import Footer from './component/Footer'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      <Header />
      <HeroSection />
      <FeaturedSection />
      <ThanksPage />
      <TravelGuides />
      <DestinationsSection />
      <RecentPosts />
      <GetInTouch />
      <Newsletter />
      <Footer />
    </>
  )
}

export default App
