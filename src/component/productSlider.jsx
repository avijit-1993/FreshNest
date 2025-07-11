import React, { useRef } from 'react';
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import useBearStore from '../store';

import { Pagination, Navigation } from 'swiper/modules';

const productSlider = ({ proItem }) => {

    const addToWishList = useBearStore((state) => state.addToWishList);

    const wishlist = useBearStore((state) => state.storeData.wishList);

    const addTocart = useBearStore((state) => state.addToCart);

    const cartList = useBearStore((state) => state.storeData.cart);

    const ItemIsOnCart = (product)=>{

            return(
                cartList.some((item)=> item.id == product.id)
            )
    }

    const ItemIsOnWishList = (product)=>{

            return(
                wishlist.some((item)=> item.id == product.id)
            )
    }

    
  


    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <div className="slider-arrow">

            <div className="arrow-box">
                <button className='prev' ref={prevRef}>
                    <img
                        src="/arrow.png"
                        alt="Previous"

                        className="absolute arrow prev left-0 top-1/2 z-10 -translate-y-1/2 cursor-pointer w-10 h-10"
                    />
                </button>

                <button className='next' ref={nextRef}>
                    <img
                        src="/arrow1.png"
                        alt="Next"

                        className="absolute arrow next right-0 top-1/2 z-10 -translate-y-1/2 cursor-pointer w-10 h-10"
                    />
                </button>

            </div>

            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 1.1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2.2,
                        spaceBetween: 40,
                    },
                    1200: {
                        slidesPerView: 4,
                        spaceBetween: 24,
                    },
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >


                {
                    proItem.map((item, index) => {

                        return (
                            <SwiperSlide >
                                <div className='pro-slider-box'>
                                    <div className="proSl-img position-relative">
                                        <img src={`/${item.image}`} alt="FreshNest Logo" />

                                        {item.isNew ? <span className='tagSpan new-tag'>New</span> : null}
                                        {item.onSale ? <span className='tagSpan sale-tag'>Sale</span> : null}

                                        <Link className='button' to={`/product/${item.id}`}>SHOP NOW</Link>

                                        <span onClick={() => addTocart(item)} className="icon-box cart-icon">
                                            <img src={ItemIsOnCart(item) ? "/fill-cart.png" : "/cart.svg"} alt="FreshNest Cart" />
                                        </span>
                                        <span onClick={() => { addToWishList(item) }} className="icon-box wishlist-ion">
                                            <img src={ItemIsOnWishList(item) ? "/fill-wishlist.png" : "/wishlist.svg"} alt="FreshNest Wishlist" />
                                        </span>
                                    </div>
                                    <div className="proPrice">
                                        <div className="price-boxText">
                                            <h4>{item.name}</h4>
                                            <span className='old-price'>${item.price + 20}.00</span> <span className='price'>${item.price}.00/{item.unit}</span>
                                        </div>
                                        <div className="pro-star">
                                            <span><img src="/star.svg" alt="FreshNest Logo" /> 4.5</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )

                    })
                }



            </Swiper>
        </div>
    );
};

export default productSlider
