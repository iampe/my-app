import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavLayout from "./NavLayout";
import Home from "./Home";
import Day1 from "./Day1";
import Day2 from "./Day2";
import Day3 from "./Day3";
import Day4 from "./Day4";

export default function NavHandel() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavLayout />}>
          <Route index element={<Home/>} />
          <Route path="home" element={<Home/>}/>
          <Route path="day1//*" element={<Day1/>}/>
          <Route path="day2//*" element={<Day2/>}/>
          <Route path="day3//*" element={<Day3/>}/>
          <Route path="day4//*" element={<Day4/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    
  );
}


