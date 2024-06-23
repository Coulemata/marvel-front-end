import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'

/*Pages*/
import Home from "./pages/Home";
import Characters from './pages/Characters';
import Comics from './pages/Comics';
import ComicsByCharacter from "./pages/ComicsByCharacter";


/*Composants */
import Navbar from './components/Navbar';


function App() {


  return (
    
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/characters' element = {<Characters/>} />
        <Route path='/comics' element = {<Comics/>} /> 
        < Route path='/comics/:characterId' element={ < ComicsByCharacter/>} />
      </Routes>
    </Router>
  )
}
export default App
