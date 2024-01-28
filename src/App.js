import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menus from "./components/Menus";
import Bundle from "./components/Bundle";
import Inquiry from "./components/Inquiry";


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Menus />
      <Bundle />
      <Inquiry />
    </div>
  );
}

export default App;
