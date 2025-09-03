import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {

  return (
    // Router to enable client-side navigation
    <Router>  
      <div className="min-h-screen flex flex-col">

        <Header/>
        
        <main className="max-width">
  
          <Routes>
              <Route path="/" element={<Home />} />
          </Routes>
       
        </main>

        <Footer/>
      </div>
    </Router>

  )
}

export default App
