import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menus from "./components/Menus";
import Bundle from "./components/Bundle";
import Inquiry from "./components/Inquiry";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Review from "./components/Review";



function App() {
  return (
    <div>
        <Navbar />
        <Hero />
        <Menus />
        <Bundle />
        <Inquiry />
        <Review />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
