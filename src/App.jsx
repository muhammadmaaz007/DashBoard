// App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./comps/Layout";
import DashBoard from "./comps/DashBoard";
import Products from "./comps/Products";
import Category from "./comps/Category";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<DashBoard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/categories" element={<Category/>} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
