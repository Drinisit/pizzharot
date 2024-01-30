import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menus from "./components/Menus";
import Bundle from "./components/Bundle";
import Inquiry from "./components/Inquiry";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Review from "./components/Review";
import Home from "./pages/Home";
import MenuList from "./pages/MenuList";
import Location from "./pages/Location";
import NoPage from "./pages/NoPage";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element = {<Home/>}/>
          <Route path="/home" element = {<Home/>}/>
          <Route path="/menulist" element = {<MenuList />}/>
          <Route path="/location" element = {<Location />} />
          <Route path="*" element = {<NoPage />} />
        </Routes>
      </BrowserRouter>
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
