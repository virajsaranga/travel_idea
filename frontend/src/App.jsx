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

      <div id="home"><HeroSection /></div>
      <div id="FeaturedSection"><FeaturedSection /></div>
      <ThanksPage />
      <div id = 'Guids'><TravelGuides /> </div>
      <div id="DestinationsSection"><DestinationsSection /></div>
      <div id="RecentPosts"><RecentPosts /></div>
      <div id="contact"><GetInTouch /></div>
    
      <div id="about"><Footer /></div>
    </>
  )
}

export default App
