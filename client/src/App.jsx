import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Services from './pages/Services';
import Aigora from './pages/Aigora';
import Solution from './pages/Solution';
import Institution from './pages/Institution';
import Introduction from './pages/Introduction';
import Brochure from './pages/Brochure';
import Inquiry from './pages/Inquiry';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Aigora />} />
        <Route path="/services/aigora" element={<Aigora />} />
        <Route path="/solution" element={<Institution />} />
        <Route path="/solution/institution" element={<Institution />} />
        <Route path="/introduction" element={<Brochure />} />
        <Route path="/introduction/brochure" element={<Brochure />} />
        <Route path="/introduction/inquiry" element={<Inquiry />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
