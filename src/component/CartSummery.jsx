import React, { useEffect, useState } from 'react';
import '../assets/cartSummery.css';
import useBearStore from '../store';
import { useNavigate } from 'react-router-dom';
import Coupon from './Coupon';

const CartSummery = ({ data }) => {

  const cartToCheckout= useBearStore((state) => state.cartToCheckout);
  const couponDiscount= useBearStore((state) => state.storeData.couponDiscount);
  

  const navigate = useNavigate()

  const [priceInfo, setPriceInfo] = useState({
    subTotal: 0,
    total: 0,
  });



  useEffect(() => {
    let subTotal = 0;

    data.forEach((item) => {
      subTotal += item.price * item.qnt;    
    });

    const total = subTotal - couponDiscount;

    setPriceInfo((prev) => ({
      ...prev,
      subTotal,
      total,
    }));
  }, [data,couponDiscount]); 

const handleCheckout = () => {
  sessionStorage.setItem("allowCheckout", "true");
  navigate("/checkout");
};

  return (
    <div className="checkout-box">
    

      <Coupon/>

      <div className="price-details">
        <div className="price-row">
          <span className="label">Subtotal</span>
          <span className="amount">${priceInfo.subTotal}.00</span>
        </div>
        <div className="price-row">
          <span className="label">Discount</span>
          <span className="amount">${couponDiscount}.00</span>
        </div>
        <div className="price-row total">
          <span className="label">Total</span>
          <span className="amount total-amount">${priceInfo.total}.00</span>
        </div>
      </div>

      <button onClick={()=> {cartToCheckout(priceInfo); handleCheckout()}} className="checkout-btn">CONTINUE TO CHECKOUT</button>
    </div>
  );
};

export default CartSummery;
