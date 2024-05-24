import { useState } from 'react'
import './App.css'
import Header from "../src/layouts/Header"
import Footer from "../src/layouts/Footer"
import HomePage from "../src/pages/HomePage"
import AddProductPage from "../src/pages/AddProductPage"
import ProductDetailsPage from "../src/pages/ProductDetailsPage"
import NotFoundPage from "../src/pages/NotFoundPage"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-product" element={<AddProductPage />} />
        <Route path="/products/:id" element={<ProductDetailsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App



