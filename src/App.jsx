import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AssessmentPage from "./pages/AssessmentPage/AssessmentPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import './style/Root.css';
import Facilities from "./pages/Facilities/Facilities";
function App() {
  return (
    <Router>
      <Header />
      <div className="body">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />

          <Route path="/home" element={<HomePage />} />
          <Route path="/facility" element={<Facilities />} />

          <Route path="/assessment" element={<AssessmentPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
