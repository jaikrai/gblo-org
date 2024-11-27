import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import GetInvolved from "./components/GetInvolved";
import WaysToGive from "./components/WaysToGive";
import Home from "./components/Home";
import Footer from "./components/Footer";
import MemberAuthPage from "./components/MemberAuthPage";
import StorePage from "./components/StorePage";
import OurWorksSection from "./components/OurWorksSection";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme"; // Import the theme file
import GBLOHistory from "./components/GBLOHistory";
// src/index.js
import "./index.css";
import BoardOfDirectors from "./components/BoardOfDirectors";
import BoardOfAdvisors from "./components/BoardOfAdvisors";

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div>
          {/* Navbar */}

          <Navbar />

          {/* Main Content */}
          <div style={{ flex: "1 0 auto" }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/our-work" element={<OurWorksSection />} />
              <Route path="/get-involved" element={<GetInvolved />} />
              <Route path="/ways-to-give" element={<WaysToGive />} />
              <Route path="/members-login" element={<MemberAuthPage />} />
              <Route path="/about/history" element={<GBLOHistory />} />
              <Route path="/about/directors" element={<BoardOfDirectors />} />
              <Route path="/about/advisors" element={<BoardOfAdvisors />} />
              <Route path="/store" element={<StorePage />} />
            </Routes>
          </div>
          {/* Partner Section */}
          {/* <PartnerSection /> */}

          {/* Footer */}
          <Footer />
        </div>
      </ThemeProvider>
    </Router>
  );
};

export default App;
