// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./components/Header";
// import "./index.css";
// import HomePage from "./pages/HomePage";
// import NotFound from "./pages/NotFound";
// import Footer from "./components/Footer";
// import AboutUs from "./pages/AboutUsPage";
// import PropertiesPage from "./pages/PropertiesPage";
// import PropertyDetails from "./components/Properties/PropertyDetails";
// import ServicesPage from "./pages/ServicesPage";
// import FAQPage from "./pages/FAQPage";
// import FeaturesPage from "./pages/FeaturesPage";
// import HowItWorksPage from "./pages/HowItWorksPage";
// import OurStory from "./pages/OurStoryPage";
// import ValuationMastery from "./pages/ValuationMastery";
// import PropertyManagement from "./pages/PropertyManagement";
// import PrivacyPolicyPage from "./pages/PrivacyPolicyPage"
// import ContactUs from "./pages/ContactUsPage";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// function App() {
//   return (
//     <Router>
//       <Header />
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/about" element={<AboutUs />} />
//         <Route path="*" element={<NotFound />} />
//         <Route path="/properties" element={<PropertiesPage />} />
//         <Route path="/property/:id" element={<PropertyDetails />} />
//         <Route path="/services" element={<ServicesPage />} />
//         <Route path="/faq" element={<FAQPage />} />
//         <Route path="/features" element={<FeaturesPage />} />
//         <Route path="/how-it-works" element={<HowItWorksPage />} />
//         <Route path="/our-story" element={<OurStory />} />
//         <Route path="/valuation-mastery" element={<ValuationMastery />} />
//         <Route path="/property-management" element={<PropertyManagement />} />
//         <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
//          <Route path="/contact-us" element={<ContactUs />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// }

// export default App;
import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
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
import FAQPage from "./pages/FAQPage";
import FeaturesPage from "./pages/FeaturesPage";
import HowItWorksPage from "./pages/HowItWorksPage";
import OurStory from "./pages/OurStoryPage";
import ValuationMastery from "./pages/ValuationMastery";
import PropertyManagement from "./pages/PropertyManagement";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import ContactUs from "./pages/ContactUsPage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

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
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/valuation-mastery" element={<ValuationMastery />} />
        <Route path="/property-management" element={<PropertyManagement />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
