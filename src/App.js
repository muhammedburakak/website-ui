import React from "react";
import Navbar from './components/Navbar';
import HeroSection from "./components/HeroSection";
import WhoAreWeSection from './components/WhoAreWeSection';
import CheckoutSection from './components/CheckoutSection';
import TrendingSection from './components/TrendingSection';
import TestimonialsSection from './components/TestimonialsSection';
import FooterSection from './components/FooterSection';





const App = () => {
  return (
    <div className="font-poppins">
      <Navbar />
      <HeroSection />
      <WhoAreWeSection/>
      <CheckoutSection/>
      <TrendingSection/>
      <TestimonialsSection/>
      <FooterSection/>
    </div>
  );
};

export default App;
