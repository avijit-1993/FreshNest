import React from 'react'
import useBearStore from '../store'
import Coupon from './Coupon';


const CheckoutSummery = () => {

    const BuyItem  = useBearStore((state)=>state.storeData.buyNowItem);
     const couponDiscount= useBearStore((state) => state.storeData.couponDiscount);

    

  return (
    <>

        <div className="checkout-box">

                                {
                                    BuyItem.product.map((item,index)=>{
                                        return(
                                            <div className="pro-summery-wrapper" key={index}>
                                                <div className="pro-sum-box">
                                                    <div className="pro-sum-imgBox">
                                                        <div className="pro-sum-img">
                                                            <img src={`/public/${item.image}`} className='pro-img-checkout' alt="FreshNest" />
                                                        </div>                                            
                                                        <div className="pro-sum-imgInfo">
                                                            <h6 className='pro-name-text'>{item.name}</h6>
                                                            <h6 className='pro-price-text'>${item.price}.00 <span>x {item.qnt}</span></h6>
                                                        </div>                                            
                                                    </div>
                                                    <div className="pro-sum-priceBox">
                                                        <h6>${item.qnt * item.price}.00</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                                
                                <Coupon/>


                                <div className="price-details">
                                    <div className="price-row">
                                        <span className="label">Subtotal</span>
                                        <span className="amount">${BuyItem.subTotal}.00</span>
                                    </div>
                                    <div className="price-row">
                                        <span className="label">Discount</span>
                                        <span className="amount">${couponDiscount}.00</span>
                                    </div>
                                    <div className="price-row total">
                                        <span className="label">Total</span>
                                        <span className="amount total-amount">${BuyItem.total}.00</span>
                                    </div>
                                </div>
                                <button type='submit' className="checkout-btn">place order</button>
                            </div>
      
    </>
  )
}

export default CheckoutSummery
