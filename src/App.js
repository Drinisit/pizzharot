import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menus from "./components/Menus";
import Bundle from "./components/Bundle";
import Inquiry from "./components/Inquiry";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Menus />
      <Bundle />
      <Inquiry />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
