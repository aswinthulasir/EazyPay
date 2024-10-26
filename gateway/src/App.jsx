import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About'; 
import NavbarComp from './components/Navbar';
import { Routes, Route } from 'react-router-dom'; // No Router import here
import Home from './components/Home';

function App() {
  return (
    <>
      <NavbarComp />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
