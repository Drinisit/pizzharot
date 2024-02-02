import React from 'react'
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Menus from "../components/Menus";
import Bundle from "../components/Bundle";
import Inquiry from "../components/Inquiry";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Review from "../components/Review";

const Home = () => {
  return (
    <div>
        <Nav />
        <Hero />
        <Menus />
        <Bundle />
        <Inquiry />
        <Review />
        <Contact />
        <Footer />
  
    </div>
  )
}

export default Home