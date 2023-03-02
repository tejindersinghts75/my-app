import './App.css';
import Navbar from './Components/Navbar/Navbar.js'
import icon from './Group.svg'
import Textform from './Components/Navbar/Textform.js'
import About from './Components/Navbar/About';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <>
   <Router>
        <Navbar img={icon} />
    
        <Textform text="This is form"/>
        
        
          <Routes>
            
          <Route path="/About" element={<About/>} />
              </Routes>
      </Router>
    </>
  )
  
}

export default App;
