import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./components/home/About";
import { Footer } from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="relative min-h-screen">
        {/* Navigation Bar sits on top of all pages */}
        <div className="absolute top-0 z-50 w-full">
          <Navbar />
        </div>

        {/* Main Content Area */}
        <main>
          <Routes>
            {/* Landing Page (contains Hero, Features, and any other homepage sections) */}
            <Route path="/" element={<Home />} />

            {/* Sub-pages */}
            <Route path="/pedagogiikka" element={<About />} />

            {/* Add more routes here as you build new pages */}
            {/* <Route path="/toiminta" element={<FeaturesPage />} /> */}
          </Routes>
        </main>
        <div className="w-full">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;