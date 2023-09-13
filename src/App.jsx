import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Navbar/heropage/hero.jsx'
import Footer from './components/footer/footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
     <Hero/>
     <Footer/>
    </>
  )
}

export default App
