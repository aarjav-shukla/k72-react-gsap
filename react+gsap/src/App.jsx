
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Agence from './pages/Agence.jsx'
import Projects from './pages/Projects.jsx'
import Logo from './Components/main/Logo.jsx'
import Navmenu from './Components/main/Navmenu.jsx'
import "locomotive-scroll/dist/locomotive-scroll.css";
import { useRef } from 'react'
import { useEffect } from 'react'
import LocomotiveScroll from 'locomotive-scroll'

const App = () => {
 
 


  return (
    <div className="">
      <Navmenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/agence" element={<Agence />} />
        {/* <Route path="/menu" element={<Menu/>}/> */}
      </Routes>
    </div>
  );
}

export default App
