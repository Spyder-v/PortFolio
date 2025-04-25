import './App.css'
import { Route,Routes } from 'react-router-dom'
import About from './Pagees/About'
import Home from './Pagees/Home'
import Contact from './Pagees/Contact'
import Projects from './Pagees/Projects'
import Navbar from './Components/Navbar'
import CursorTrail from './Components/CursorTrail'

function App() {
  return (

<div className="bg-[#0a0a0a] min-h-screen text-white">
  <CursorTrail/>
    <Navbar/>
    <Routes>
      <Route path= "/" element={<Home/>}/>
      <Route path = "/projects" element={<Projects/>}/>
      <Route path = "/about" element={<About/>}/>
      <Route path = "/contact" element={<Contact/>}/>
    </Routes>
  </div>
  )
}

export default App
