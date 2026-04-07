
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./components/home/About";
import Education from './components/education/ApplicationForm'
import Action from "./components/action/Action";
import Email from "./components/education/EmailTest";
import Navbarmobile from './components/mobile-navbar/Mobilenavbar'
import { Footer } from "./components/Footer";
import { LanguageProvider } from "./context/LanguageContext";






function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="relative min-h-screen">
          {/* Navigation Bar sits on top of all pages */}
          {/* DESKTOP NAVBAR: Only shows on screen sizes 1024px and up */}
          <div className="absolute top-0 z-50 w-full hidden lg:block">
            <Navbar />
          </div>

          {/* MOBILE/TABLET NAVBAR: Only shows on screen sizes smaller than 1024px */}
          <div className="absolute top-0 z-50 w-full lg:hidden">
            <Navbarmobile />
          </div>

          {/* Main Content Area */}
          <main>
            <Routes>
              {/* Landing Page (contains Hero, Features, and any other homepage sections) */}
              <Route path="/" element={<Home />} />

              {/* Sub-pages */}
              <Route path="/email" element={<Email />} />
              <Route path="/education" element={<Education />} />
              <Route path="/pedagogiikka" element={<About />} />
              <Route path="/action" element={<Action />} />

              {/* Add more routes here as you build new pages */}
              {/* <Route path="/toiminta" element={<FeaturesPage />} /> */}
            </Routes>
          </main>
          <div className="w-full">
            <Footer />
          </div>
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;