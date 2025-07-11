import React from 'react'
import { Link } from 'react-router-dom'
const HeroOffer = () => {
  return (
    <div>
      <div className="geroOffer">
        <div className="container">
            <div className="row align-items-start">
                <div className="col-md-6">
                     <div className="offerbox offer-1 position-relative">
                        <img src="/offer1.png" className='w-100 d-none d-md-block' alt="FreshNest" />
                        <img src="/offer1-mob.png" className='w-100 d-block d-md-none' alt="FreshNest" />
                        <div className="offer-text ">
                            <h3>Green Lemon &<br/>Apple Juice</h3>
                            <Link className='button' to="/product">SHOP NOW</Link>
                            
                        </div>
                     </div>
                </div>
                <div className="col-md-6">
                    <div className="offer-wrapper">
                        <div className="offerbox offer-2 position-relative">
                            <img src="/offer2.png" className='w-100 d-none d-md-block' alt="FreshNest" />
                            <img src="/offer2-mob.png" className='w-100 d-block d-md-none' alt="FreshNest" />
                            <div className="offer-text ">
                            <h3>Up to 15% off Fresh <br/>Almond Seed</h3>
                            <Link className='button' to="/product">SHOP NOW</Link>
                            
                        </div>
                        </div>
                        <div className="offerbox offer-3 position-relative">
                            <img src="/offer3.png" className='w-100 d-none d-md-block' alt="FreshNest" />
                            <img src="/offer3-mob.png" className='w-100 d-block d-md-none' alt="FreshNest" />
                            <div className="offer-text ">
                            <h3>50% Off in Fresh<br/>Orange Drinks</h3>
                            <Link className='button' to="/product">SHOP NOW</Link>
                            
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default HeroOffer
