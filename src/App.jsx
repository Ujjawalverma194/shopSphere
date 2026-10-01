import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Register from './pages/Register'
import ProductsDetails from './pages/ProductsDetails'
import Cart from './pages/Cart'
import Payments from './pages/Payments'
import OrderPlaced from './pages/OrderPlaced'

function App() {

  return (
    <>
      {/* <Navbar/> */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<><Navbar /><Home /></>} />
        <Route path="/products" element={<><Navbar /><Home /></>} />
        <Route path="/products/:id" element={<><Navbar /><ProductsDetails /></>} />
        <Route path="/carts" element={<> <Navbar /><Cart /></>} />
        <Route path="/payment" element={<> <Navbar /><Payments /></>} />
        <Route path="/placed" element={<> <Navbar /><OrderPlaced /></>} />
      </Routes>
    </>
  )
}

export default App
