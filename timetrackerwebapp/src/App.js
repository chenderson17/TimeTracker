import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home.js'
import Pricing from './Components/Pricing.js';
import SignIn from './Components/SignIn.js';

function App() {
  return (
   <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing/>} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
