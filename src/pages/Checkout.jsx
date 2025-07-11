import React, { useEffect } from 'react'
import ReviewSlider from '../component/ReviewSlider'
import InnerPageHead from '../component/InnerPageHead'
import '../assets/checkout-page.css'
import { useFormik } from 'formik'
import formSchema from '../schema'
import CheckoutSummery from '../component/CheckoutSummery'
import { useLocation,Navigate, useNavigate } from 'react-router-dom'
import useBearStore from '../store'


const Checkout = () => {


    const BuyItem  = useBearStore((state)=>state.storeData.buyNowItem);

    const completeOrder  = useBearStore((state)=>state.completeOrder);

    const couponDiscount  = useBearStore((state)=>state.storeData.couponDiscount);

    const allowCheckout = sessionStorage.getItem("allowCheckout");

    const navigate = useNavigate()

    const initialValues = {
        fname:"",
        lname:"",
        email:"",
        phone:"",
        address:"",
        landmark:"",
        city:"",
        state:"",
        zipcode:"",
        cardname:"",
        cardNumber:"",
        cardMonth:"",
        cardYear:"",
        cvv:""
    }



    const {values,handleBlur,handleChange,handleSubmit,touched,errors}=useFormik({
        initialValues,
        validationSchema:formSchema,
        onSubmit:(values)=>{

            const {cardname,cardNumber,cardMonth,cardYear,cvv,...restItem} = values;
            
            const UserDetails = restItem;

            const orderRecord = {...BuyItem,...UserDetails,discount:couponDiscount}

            completeOrder (orderRecord );

            navigate("/confirmed")

        }
    })





if (allowCheckout !== "true") {
  return <Navigate to="/" />
 
}
 

    return (
        <>
            <InnerPageHead heading="CHECKOUT" />


            <div className="checkout-page">
                <div className="container">

                <form onSubmit={handleSubmit}>
                    <div className='car-contentWarpper'>
                        <div className='cartTable'>

                            <div className="cart-header">
                                <h2>shipping address</h2>

                            </div>

                            <div className="shiping-frm">
                                <div className="frm-wrapper">
                                    <div className="frm-box">
                                        <label htmlFor="email">First name*</label>
                                        <input 
                                        type="text" 
                                        id="fname" 
                                        name="fname" 
                                        placeholder='First name' 
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.fname}
                                        />
                                    {touched.fname && errors.fname && <div className="error">{errors.fname}</div>}
                                    </div>
                                    <div className="frm-box">
                                        <label htmlFor="email">last name*</label>
                                        <input 
                                        type="text" 
                                        id="lname" 
                                        name="lname" 
                                        placeholder='Last name' 
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.lname}
                                        />
                                        {touched.lname && errors.lname && <div className="error">{errors.lname}</div>}
                                    </div>
                                </div>
                                <div className="frm-wrapper">
                                    <div className="frm-box">
                                        <label htmlFor="email">email*</label>
                                        <input 
                                        type="email" 
                                        id="email" 
                                        name="email" 
                                        placeholder='Enter Email' 
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                        />
                                        {touched.email && errors.email && <div className="error">{errors.email}</div>}
                                    </div>
                                    <div className="frm-box">
                                        <label htmlFor="email">phone*</label>
                                        <input 
                                        type="tel" 
                                        id="phone" 
                                        name="phone" 
                                        placeholder='Enter Phone' 
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.phone}
                                        />
                                        {touched.phone && errors.phone && <div className="error">{errors.phone}</div>}
                                    </div>
                                </div>
                                <div className="frm-wrapper">
                                    <div className="frm-box">
                                        <label htmlFor="email">address*</label>
                                        <input 
                                        type="text" 
                                        id="address" 
                                        name="address" 
                                        placeholder='Enter Address' 
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.address}
                                        />
                                        {touched.address && errors.address && <div className="error">{errors.address}</div>}
                                    </div>
                                    <div className="frm-box">
                                        <label htmlFor="email">landmark*</label>
                                        <input 
                                        type="text" 
                                        id="landmark" 
                                        name="landmark" 
                                        placeholder='Enter Landmark' 
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.landmark}
                                        />
                                        {touched.landmark && errors.landmark && <div className="error">{errors.landmark}</div>}
                                    </div>
                                </div>
                                <div className="frm-wrapper">
                                    <div className="frm-box">
                                        <label htmlFor="email">city*</label>
                                        <input 
                                        type="text" 
                                        id="city" 
                                        name="city" 
                                        placeholder='Enter City'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.city}
                                         />
                                         {touched.city && errors.city && <div className="error">{errors.city}</div>}
                                    </div>
                                    <div className="frm-box">
                                        <label htmlFor="email">state*</label>
                                        <input 
                                        type="text" 
                                        id="state" 
                                        name="state" 
                                        placeholder='Enter State' 
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.state}
                                        />
                                        {touched.state && errors.state && <div className="error">{errors.state}</div>}
                                    </div>
                                    <div className="frm-box">
                                        <label htmlFor="email">zipcode*</label>
                                        <input 
                                        type="text" 
                                        id="zipcode" 
                                        name="zipcode" 
                                        placeholder='Enter Zipcode'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.zipcode}
                                         />
                                          {touched.zipcode && errors.zipcode && <div className="error">{errors.zipcode}</div>}
                                    </div>
                                </div>

                                
                            </div>

                            <div className="cart-header mt-4">
                                <h2>payment details</h2>

                            </div>

                            <div className="paymeny-frm">
                                <div className="frm-wrapper">
                                    <div className="frm-box">
                                        <label htmlFor="email">card holder name*</label>
                                        <input 
                                        type="text" 
                                        id="cardname" 
                                        name="cardname" 
                                        placeholder='Enter Card User Name'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.cardname}
                                         />
                                         {touched.cardname && errors.cardname && <div className="error">{errors.cardname}</div>}
                                    </div>
                                    <div className="frm-box">
                                        <label htmlFor="email">card number*</label>
                                        <input 
                                        type="text" 
                                        id="cardNumber" 
                                        name="cardNumber" 
                                        placeholder='Enter Card Number' 
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.cardNumber}
                                        />
                                         {touched.cardNumber && errors.cardNumber && <div className="error">{errors.cardNumber}</div>}
                                    </div>
                                </div>
                                <div className="frm-wrapper">
                                    <div className="frm-box">
                                        <label htmlFor="email">month*</label>
                                        <input 
                                        type="text" 
                                        id="cardMonth" 
                                        name="cardMonth" 
                                        placeholder='Enter Month' 
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.cardMonth}
                                        />
                                        {touched.cardMonth && errors.cardMonth && <div className="error">{errors.cardMonth}</div>}
                                    </div>
                                    <div className="frm-box">
                                        <label htmlFor="email">year*</label>
                                        <input 
                                        type="text" 
                                        id="cardYear" 
                                        name="cardYear"
                                         placeholder='Enter Year' 
                                         onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.cardYear}
                                         />
                                         {touched.cardYear && errors.cardYear && <div className="error">{errors.cardYear}</div>}
                                    </div>
                                    <div className="frm-box">
                                        <label htmlFor="email">CVV*</label>
                                        <input 
                                        type="text" 
                                        id="cvv" 
                                        name="cvv" 
                                        placeholder='Enter CVV' 
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.cvv}
                                        />
                                        {touched.cvv && errors.cvv && <div className="error">{errors.cvv}</div>}
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='cartSummery'>
                            <CheckoutSummery />
                        </div>
                    </div>
                </form>
                    
                </div>

                <div className='review-slider'>
                    <div className='container position-relative'>
                        <h2 className='d-none d-md-block'>What client says about us</h2>
                        <h2 className='d-block d-md-none'>Case Studies</h2>
                        <ReviewSlider />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkout
