import React from 'react'

const FeaturedSection = () => {

    const featuredObject = [
        {
            haeding: "Discount",
            paragraph: "Every week new sales",
            feaImg:"box.svg"
        },
        {
            haeding: "Free Delivery",
            paragraph: "100% Free for all orders",
            feaImg:"delivery-truck.svg"
        },
        {
            haeding: "Great Support 24/7",
            paragraph: "We care your experiences",
            feaImg:"24-hours.svg"
        },
        {
            haeding: "secure Payment",
            paragraph: "100% Secure Payment Method",
            feaImg:"shield.svg"
        }
    ]

  return (
    <div className='feture-wrapper'>
      {
        featuredObject.map((item,index)=>{
            return(
                <div className='f-box' key={index}>
                <div className='f-img'>
                    <img src={`/public/${item.feaImg}`} alt="FreshNest" />
                </div>
                <div className='f-text'>
                    <h3>{item.haeding}</h3>
                    <p>{item.paragraph}</p>
                </div>
            </div>
            )
        })
      }
    </div>
  )
}

export default FeaturedSection
