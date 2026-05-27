import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ProductCard from '../components/productCard.jsx'
import TrendingProducts from '../components/product.jsx'
import { Routes, Route } from 'react-router-dom'
import Homepage from '../pages/homepage.jsx'
import Productpage from '../pages/productpage.jsx'
import AdminPage from '../pages/adminPage.jsx'
import Test from '../pages/Test.jsx'
import LoginPage from '../pages/loginpage.jsx'

function App() {
  

  return (
    <>
        
          <div className="w-full h-screen bg-primary ">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/products" element={<Productpage />} />
              <Route path="/admin/*" element={<AdminPage />} />
              <Route path="/test" element={<Test />} />
              <Route path="/login" element={<LoginPage />} />
            </Routes>
          </div>






          
          
        
       
      
     

      
        
      

    </>
  )
}

export default App
