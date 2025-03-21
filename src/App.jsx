// App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from "./comps/DashBoard";
import Products from "./comps/Products";
import Category from "./comps/Category";
import Navbar from './comps/Navbar';
import Heading from "./comps/Heading";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Heading />
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/categories" element={<Category />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
