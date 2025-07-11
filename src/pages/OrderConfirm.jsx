import React, { useEffect } from 'react'
import InnerPageHead from '../component/InnerPageHead'
import "../assets/confirm.css"
import useBearStore from '../store'
import { useNavigate } from 'react-router-dom'

const OrderConfirm = () => {

    const orderRecord = useBearStore((state) => state.storeData.orderRecord);

    const navigate = useNavigate();


    useEffect(()=>{
        if(!orderRecord.product){
        navigate('/')
    }
    },[])

    return (
        <>
            <InnerPageHead heading="Order Confirmed" />

            <div className="checkout-page mb-5">
                <div className="container">
                    <div className='car-contentWarpper'>
                        <div className='cartTable'>
                            <div className="cart-header">
                                <h2>Thank You for Your Order!</h2>

                            </div>
                            <p>Your order has been successfully placed. We’re processing it now and will send you a confirmation email shortly with the details. We appreciate your business and can’t wait for you to receive your items!</p>

                            <div className="cbi-box">
                                <h3>Billing Address</h3>
                            </div>
                            <div className="user-details">
                                <div id="user-details-box"><div className="user-detai-text">
                                    <p>Name</p>
                                    <p>{orderRecord.fname} {orderRecord.lname}</p>
                                </div>
                                    <div className="user-detai-text">
                                        <p>Address</p>
                                        <p>{orderRecord.city} <br />{orderRecord.state} {orderRecord.landmark}, {orderRecord.zipcode}</p>
                                    </div>
                                    <div className="user-detai-text">
                                        <p>Email</p>
                                        <p>{orderRecord.email}</p>
                                    </div>
                                    <div className="user-detai-text">
                                        <p>Phone</p>
                                        <p>{orderRecord.phone}</p>
                                    </div> </div>
                            </div>
                        </div>
                        <div className='cartSummery'>
                            <div className="checkout-box">
                                <div className="pro-summery-wrapper">

                                    {
                                        orderRecord.product?.map((item, index) => {
                                            return (

                                                <div className="pro-sum-box" key={index}>
                                                    <div className="pro-sum-imgBox">
                                                        <div className="pro-sum-img">
                                                            <img className="pro-img-checkout" alt="FreshNest" src={`/public/${item.image}`} />
                                                        </div>
                                                        <div className="pro-sum-imgInfo">
                                                            <h6 className="pro-name-text">{item.name}</h6>
                                                            <h6 className="pro-price-text">${item.price} <span>x {item.qnt}</span></h6>
                                                        </div>
                                                    </div>
                                                    <div className="pro-sum-priceBox">
                                                        <h6>${item.qnt * item.price}.00</h6>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }




                                </div>
                                <div className="price-details mb-0 pb-0">
                                    <div className="price-row"><span className="label">Subtotal</span><span className="amount">${orderRecord.subTotal}.00</span></div>
                                    <div className="price-row"><span className="label">Discount</span><span className="amount">${orderRecord.discount}.00</span></div>
                                    <div className="price-row total mb-0"><span className="label">Total</span><span className="amount total-amount">${orderRecord.total}.00</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OrderConfirm
