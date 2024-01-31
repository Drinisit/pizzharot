import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
    </div>
  );
}

export default App;
