import React, { useRef } from 'react';
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { Pagination, Navigation } from 'swiper/modules';

const ReviewSlider = () => {

    const reviewData = [
        {
            heading: "Always fresh and perfectly packed!",
            description: "The veggies are crisp, and the fruits are sweet and juicy. I’ve stopped going to the market ever since I started ordering here. Highly recommend!",
            useName: "Kristin Watson",
            userImg: "user1.png"
        },
        {
            heading: "Reliable and affordable!",
            description: "The produce is consistently good, and I appreciate the eco-friendly packaging. Makes healthy eating so much easier.",
            useName: "Esther Howard",
            userImg: "user2.png"
        },
        {
            heading: "Quick delivery and great quality!",
            description: "My order arrived the same day, and everything was super fresh. Love the convenience and the quality.",
            useName: "Cameron Williamson",
            userImg: "user1.png"
        },
        {
            heading: "Best online grocery experience!",
            description: "I’ve tried other services before, but this one stands out for its service and variety. Great for weekly shopping!",
            useName: "Wade Warren",
            userImg: "user2.png"
        },
        {
            heading: "My go-to for fresh food!",
            description: "Whether it’s fruits, veggies, or even fish — it’s always fresh. Their customer service is also very responsive.",
            useName: "Jane Cooper",
            userImg: "user1.png"
        },
        {
            heading: "Exceptional value and freshness!",
            description: "Every item feels handpicked. The meat section especially is top-notch. My family loves the quality.",
            useName: "Albert Flores",
            userImg: "user2.png"
        }
    ]




    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <div className="slider-arrow">

            <div className="arrow-box">
                <button className='prev' ref={prevRef}>
                    <img
                        src="arrow.png"
                        alt="Previous"

                        className="absolute arrow prev left-0 top-1/2 z-10 -translate-y-1/2 cursor-pointer w-10 h-10"
                    />
                </button>

                <button className='next' ref={nextRef}>
                    <img
                        src="arrow1.png"
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
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 1.3,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 24,
                    },
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >



                {

                    reviewData.map((item, index) => {
                        return (

                            <SwiperSlide key={index}>
                                <div className="r-slie-box">
                                    <div className="r-text">
                                        <p><b>{item.heading}</b></p>
                                        <p>{item.description}</p>
                                    </div>
                                    <div className="r-user">
                                        <div className="ru-img">
                                            <img src={item.userImg} alt="FreshNest" />
                                        </div>
                                        <div className="ru-text">
                                            <p>{item.useName}</p>
                                            <p className='v-text'>Verified Buyer <span><img src="/verified.svg" className='verified' alt="FreshNest" /></span></p>
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

export default ReviewSlider
