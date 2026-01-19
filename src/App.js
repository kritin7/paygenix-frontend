import React from "react";
// Correct way to import a DEFAULT export
import TrustBar from './components/TrustBar';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AISuperPowers from "./components/AISuperPowers";
import LOSSuite from "./components/LOSSuite";
import AgenticArchitecture from "./components/AgenticArchitecture";
import ComparisonTable from "./components/ComparisonTable";
import Team from "./components/Team";
import Footer from "./components/Footer";
// ... other imports
import BSADemoGate from './components/BSADemoGate';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/demo-bsa" element={<BSADemoGate />} />
        {/* ... other routes */}
      </Routes>
    </Router>
  );
}

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <TrustBar />
        <AISuperPowers />
        <LOSSuite />
        <AgenticArchitecture />
        <ComparisonTable />
        <Team />
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
