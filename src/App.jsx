import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Contact from './sections/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='container mx-auto max-w-7xl'>
      <Navbar/>
      <Hero/>
      <About/>
      {/* projects */}
      {/* experience */}
      <Contact/>
      <Footer/>
    </div>
  )  
}

export default App
