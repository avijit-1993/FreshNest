import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const images = [
  "/tomato.png",
  "/tomato.png",
  "/tomato.png",
  "/tomato.png"
];

const ImageGallery = ({image}) => {

  const images = [
  `/${image}`,
  `/${image}`,
  `/${image}`,
  `/${image}`
];


const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="gallery-container">
      <div className="thumbnail-swiper">
        <Swiper
          direction="vertical"
          spaceBetween={10}
          slidesPerView={4}
          className="thumbs"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img
      src={img}
      alt={`Thumb ${index}`}
      className={`thumb ${activeIndex === index ? "active" : ""}`}
      onClick={() => setActiveIndex(index)}
    />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="main-image">
        <img src={images[activeIndex]} alt="Main" />
      </div>
    </div>
  );
};

export default ImageGallery;
