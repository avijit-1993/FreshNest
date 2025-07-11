import React, { useEffect } from 'react'
import { Routes, Route, useLocation,useMatches, } from 'react-router-dom'
import Home from './pages/home'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './component/NavBar';
import Footer from './component/Footer';
import Product from './pages/Product';
import FeaturedSection from './component/FeaturedSection';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Collection from './pages/Collection';
import PageNotFound from './pages/PageNotFound';
import WishList from './pages/WishList';
import Checkout from './pages/Checkout';
import OrderConfirm from './pages/OrderConfirm';
import About from './pages/About';
import Contact from './pages/Contact';


const App = () => {


     const { pathname } = useLocation();

      useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);






  return (
    <div>
       <NavBar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/product" element={<Product/>} />
        <Route path="/product/:id" element={<ProductDetails/>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/collection/:category" element={<Collection />} />
        <Route path="/wishlist" element={<WishList/>} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/confirmed" element={<OrderConfirm/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/*" element={<PageNotFound/>} />
      </Routes>

      

      
        <>
        <div className='footer-feature'>
        <div className='container'>
          <FeaturedSection />
        </div>
      </div>
      <Footer/>
        </>
      
    </div>
  )
}

export default App
