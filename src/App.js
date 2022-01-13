import React from "react";
import { BrowserRouter,Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
     
        <Navbar />
        <Routes>
        <Route  exact path ='/' element={<Home></Home>}></Route>
        <Route path ='/contact'  element={<Contact></Contact>}></Route>
        <Route path ='/aboutus' element={<AboutUs> </AboutUs>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
