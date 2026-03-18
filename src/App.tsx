import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";/* 
import { Navbar } from "./components/navbar/Navbar"; */
/* import Home from "./pages/Home";
import Activities from "./pages/Activities"; */

import About from "./pages/About";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
 
function App() {
  return (
    <Router>
      <div style={{ position: "relative", minHeight: "100vh" }}>
        {/* <Navbar /> */}
        {/* <main style={{ marginLeft: 0 }} className="p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main> */}
         <Navbar />
      <Hero />
      <Features />
      <About />
      </div>
    </Router>
  );
}
 
export default App;
 