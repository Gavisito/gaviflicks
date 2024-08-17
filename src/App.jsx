import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Gallery from './pages/gallery';
import Navigation from './components/navigation';
import Footer from './components/footer';
import './App.css'

function App() {
  return (
    <BrowserRouter>
     <Navigation/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;

