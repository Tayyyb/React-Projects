
import { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Header2 from "./components/Header/Header2";
import Main from "./components/Home/Main";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
       <BrowserRouter>
       <Header />
      <Header2/>
      <Navbar/>
      <Home/>
      <Main/>
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
