import React from 'react'
import { Link } from 'react-router-dom'
import Countdown from './CountDown'

const CountDownDeal = () => {
  return (
    <div>
      <div className="countDownOffer">
        <div className="container">
            <div className="countDownWrp">
                <div className="count-offer-img">
                     <img src="/honey.png" alt="FreshNest" />
                </div>
                <div className="count-offer-text">
                    <h4>Todays Hot Deals</h4>
                    <h2>Original Stock Honey<br/>Combo Package</h2>
                    {<Countdown targetDate="2025-09-31T08:00:00" />}
                    <Link className='button ms-0 mt-4' to="/product">SHOP NOW</Link>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CountDownDeal
