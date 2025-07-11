import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Footer = () => {
  return (
    <div>
    <footer className="bg-black text-white">
      <div className="container">
        <div className="row">
          
          <div className="col-lg-4 mb-4 logo-box">
            <img src="/logo-w.svg" className='mb-3' alt="white logo" />
            <p>
              Experience the taste of real freshness with our carefully selected fruits and vegetables.
              Locally sourced, quality-checked, and delivered with care to your home.
            </p>
            <div className="d-flex gap-2">
              <img src="/social.svg" className='mb-3' alt="Social Icons" />
            </div>
          </div>

         
          <div className="col-lg-2 mb-4 company-link">
            <h6>COMPANY</h6>
            <ul className="list-unstyled">
              <li>About</li>
              <li>All Products</li>
              <li>Location Map</li>
              <li>FAQ</li>
              <li>Blog</li>
            </ul>
          </div>

         
          <div className="col-lg-2 mb-4 support-link">
            <h6>CUSTOMER CARE</h6>
            <ul className="list-unstyled">
              <li>Login</li>
              <li>My Account</li>
              <li>Wishlist</li>
              <li>Order Tracking</li>
              <li>Contact Us</li>
            </ul>
          </div>

          
          <div className="col-lg-4 mb-4 newsletter">
            <h6>NEWSLETTER</h6>
            <div className="input-group mb-2">
              <input type="email" className="form-control" placeholder="Your email" />
              <button className="btn btn-success">Subscribe</button>
            </div>
            <p>Get farm-fresh updates, exclusive discounts, and healthy tips in your inbox. Join our newsletter and make every  meal naturally better!</p>
          </div>
        </div>
      </div>

      
      <div className="c-bg text-white py-2">
        <div className="container d-flex justify-content-between align-items-center">
          <small>© All Rights Reserved by FreshNest 2025</small>
          <div>
            
            <img src="/payment.svg" alt="Payment Card" />
          </div>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer
