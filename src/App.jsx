import React from 'react'
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './Pages/Home'
import About from './Pages/About'
import Projects from './Pages/Projects'
import Visionforge from './Pages/Visionforge'
import Contact from './Pages/Contact'


const App = () => {
  return (
    <main className='bg-orange-300/20'>
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/visionforge' element={<Visionforge/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </Router>
    </main>
  )
}

export default App