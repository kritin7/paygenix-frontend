import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// Existing Component Imports
import TrustBar from './components/TrustBar';
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AISuperPowers from "./components/AISuperPowers";
import LOSSuite from "./components/LOSSuite";
import AgenticArchitecture from "./components/AgenticArchitecture";
import ComparisonTable from "./components/ComparisonTable";
import Team from "./components/Team";
import Footer from "./components/Footer";

// New Component Import
import BSADemoGate from './components/BSADemoGate';

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
          {/* Main Site Route */}
          <Route path="/" element={<LandingPage />} />
          
          {/* Protected Demo Route */}
          <Route path="/demo-bsa" element={<BSADemoGate />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
