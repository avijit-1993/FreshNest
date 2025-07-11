import React, { useEffect, useRef, useState } from 'react';
import useBearStore from '../store';


const Coupon = () => {

    const couponDiscount = useBearStore((state) => state.storeData.couponDiscount);
    const couponCode = useBearStore((state) => state.couponCode);
    const targetInput = useRef();

    const couponSubmit = () => {
        const code = targetInput.current.value.trim().toLowerCase();

        if (code === 'nest50') {

            alert('Coupon applied successfully');
            couponCode(10)
        } else {
            alert('Use nest50 for flat $10.00 off');
        }
    };


    return (
        <div>

            <h3 className="promo-title">Promo Code</h3>


            {
                couponDiscount > 0 ? <h6 style={{ color: "red" }}>coupon applied!</h6> : <div className="promo-input-group">
                    <input ref={targetInput} type="text" placeholder="Type Here..." className="promo-input" />
                    <button className="apply-btn" onClick={couponSubmit}>Apply</button>
                </div>
            }

        </div>
    )
}

export default Coupon
