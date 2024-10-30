
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Skills from './pages/Skills'
import Project from './pages/Project'
import Home from './pages/Home'

function App() {


  return (
    <BrowserRouter>
          <Header />
      <Routes>

          
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/skils' element={<Skills />}/>
          <Route path='/project' element={<Project />}/>
          

       
      </Routes> 
        <Footer />

    </BrowserRouter>

  )
}

export default App
