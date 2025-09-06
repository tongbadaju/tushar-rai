import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Works from './pages/Works';
import About from './pages/About';

function App() {

  return (
    // Router to enable client-side navigation
    <Router>  
      <div className="min-h-screen flex flex-col">

        <Header/>
        
        <main className="max-width">
  
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/works" element={<Works />} />
          </Routes>
       
        </main>

        <Footer/>
      </div>
    </Router>

  )
}

export default App
