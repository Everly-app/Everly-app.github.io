import { useState, useEffect, useRef } from 'react'
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
// import { Navigation } from './components/navigation'
import { Header } from './components/header'
import { SignUp } from './components/signup'
// import { Features } from './components/features'
// import { About } from './components/about'
import { ComingSoon } from './components/comingsoon'
import { Services } from './components/services'
// import { Gallery } from './components/gallery'
// import { Testimonials } from './components/testimonials'
import { Footer } from './components/footer'
import JsonData from './data/data.json'
import SmoothScroll from 'smooth-scroll'

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
})

const LandingPage = () => {
  const [landingPageData, setLandingPageData] = useState({})
  useEffect(() => {
    setLandingPageData(JsonData)
  }, [])

  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      {/* <Navigation /> */}
      <Header handleClick={handleClick} data={landingPageData.Header} />
      {/* <Features data={landingPageData.Features} /> */}
      {/* <About data={landingPageData.About} /> */}
      <div ref={ref}>
        <Services data={landingPageData.Services} />
      </div>
      {/* <Gallery /> */}
      {/* <Testimonials data={landingPageData.Testimonials} /> */}
      <ComingSoon data={landingPageData.ComingSoon} />
      <Footer />
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App
