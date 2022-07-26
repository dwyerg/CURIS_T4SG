import React, { useState } from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import MobileNav from './components/MobileNav';
import Home from './pages/index';
import Members from './pages/Members';
import Projects from './pages/projects';
import LearnMore from './pages/learnMore';
import FAQ from './pages/Faq';

function App() {

  //nav hamburger
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
      setIsOpen(!isOpen);
  };

  return (
      <Router>
      <MobileNav isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
        <Routes>
          <Route path="/CURIS_T4SG" element={<Home />} />
          <Route path="/CURIS_T4SG/members" element={<Members />} />
          <Route path="/CURIS_T4SG/projects" element={<Projects />} />
          <Route path="/CURIS_T4SG/learnmore" element={<LearnMore />} />
          <Route path="/CURIS_T4SG/faq" element={<FAQ />} />
        </Routes>
        <Home />
      </Router>
  );
}

export default App;
