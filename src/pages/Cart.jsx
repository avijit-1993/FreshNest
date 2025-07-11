import React from 'react'
import InnerPageHead from '../component/InnerPageHead'
import ReviewSlider from '../component/ReviewSlider'
import CartContent from '../component/CartContent'


const Cart = () => {




  return (
    <>
    <InnerPageHead heading="cart"/>
    <CartContent />
    <div className='review-slider'>
        <div className='container position-relative'>
          <h2 className='d-none d-md-block'>What client says about us</h2>
          <h2 className='d-block d-md-none'>Case Studies</h2>
            <ReviewSlider />  
        </div>
      </div>
    </>
  )
}

export default Cart
