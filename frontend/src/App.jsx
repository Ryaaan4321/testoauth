import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./pages/Sigin";  
import Signup from "./pages/signup";
import Oauth from "./components/Oauth";
import Home from "./pages/Home";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signin" element={<Signin />} /> 
        <Route path='/signup' element={<Signup/>}/>
        <Route path="/oauth" element={<Oauth/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
