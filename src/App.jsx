import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import "./index.css";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUsPage";
import PropertiesPage from "./pages/PropertiesPage";
import PropertyDetails from "./components/Properties/PropertyDetails";
import ServicesPage from "./pages/ServicesPage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/properties" element={<PropertiesPage />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
