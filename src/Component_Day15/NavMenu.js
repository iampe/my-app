import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavLayout from "./NavLayout";
import NavHome from "./NavHome";
import NavAbout from "./NavAbout";
import Contact from "./Contact";
import DisplayProduct from "./DisplayProduct";


export default function NavMenu() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavLayout />}>
          <Route index element={<NavHome />} />
          <Route path="product" element={<DisplayProduct />} />
          <Route path="about" element={<NavAbout />} />
          <Route path="contact" element={<Contact />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
