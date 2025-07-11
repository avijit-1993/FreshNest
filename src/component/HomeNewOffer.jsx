import React from 'react'
import { Link } from 'react-router-dom'

const HomeNewOffer = () => {
  return (
    <div>
      <div className="new-offer">
        <div className="container">
            <div className="newOfferWrp">
                <div className="newOfferBox">
                     <img src="offer4.png" className='w-100 d-none d-md-block' alt="FreshNest" />
                     <img src="offer4-mob.png" className='w-100 d-block d-md-none' alt="FreshNest" />
                     <div className="nwOfferTet">
                        <h3>Quick Bites <br/>to Hearty Breakfast <br/>Made Easy</h3>
                         <Link className='button' to="/product">SHOP NOW</Link>
                     </div>
                </div>
                <div className="newOfferBox">
                      <img src="offer5.png" className='w-100 d-none d-md-block' alt="FreshNest" />
                      <img src="offer5-mob.png" className='w-100 d-block d-md-none' alt="FreshNest" />
                     <div className="nwOfferTet">
                        <h3>Shop the Best in <br/>Vegetables</h3>
                         <Link className='button' to="/product">SHOP NOW</Link>
                     </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default HomeNewOffer
