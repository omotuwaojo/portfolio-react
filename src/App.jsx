
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Skills from './pages/Skills';
import Project from './pages/Project';
import Home from './pages/Home';
import { useEffect } from 'react';
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles


function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Initialize AOS
      mirror: true, // Ensures animation replays when scrolling back up
    });
  }, []); // Run only once on mount

  return (
    <BrowserRouter>
          <Header />
      <Routes>

          
          <Route path='/' element={<Home />}/>
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
