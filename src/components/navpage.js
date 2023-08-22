import React from "react";
import {Routes,Route} from "react-router-dom";
import Roman from "../pages/romantonumber";
import Home from "../pages/home";
import NumeralToRoman from "../pages/numeraltoroman";
const Navpage=()=>{
    return(
        <>
        <section>
          <Routes>
          <Route path="/" element={<Home/>}/>  
          <Route path="/romantonumeral" element={<Roman/>}/>  
          <Route path="/numeraltoroman" element={<NumeralToRoman/>}/>  
          </Routes> 
        </section>
        </>
    )
}
export default Navpage;