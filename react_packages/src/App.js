import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/index';
import Members from './pages/Members';
import Projects from './pages/projects';
import LearnMore from './pages/learnMore';

function App() {
  return (
    <Router>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/members" element={<Members />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/learnmore" element={<LearnMore />} />
      </Routes>
    </Router>
  );
}

export default App;
