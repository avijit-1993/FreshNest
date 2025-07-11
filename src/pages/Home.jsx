import React from 'react';
import useBearStore from '../store';
import HeroSection from '../component/HeroSection';
import FeaturedSection from '../component/FeaturedSection';
import FeatureProduct, { UpadatedComponentNew } from '../component/SliderWrapper';
import UpadatedComponent from '../component/SliderWrapper';
import HeroOffer from '../component/HeroOffer';
import HeroCategories from '../component/HeroCategories';
import HomeNewOffer from '../component/HomeNewOffer';
import CountDownDeal from '../component/CountDownDeal';

import ReviewSlider from '../component/ReviewSlider';



const Home = () => {



  const product = useBearStore((state) => state.storeData.productData);


  return (
    <>
      <div className="hero-section">
        <div className="container">
          <HeroSection />

        </div>
      </div>

      <div className='hero-feature'>
        <div className='container'>
          <FeaturedSection />
        </div>
      </div>

  
      <div className='feature-slider'>
        <div className='container position-relative'>
          <h2>Feature proucts</h2>
            <UpadatedComponent data={product} />
        </div>
      </div>

      <HeroOffer />

      <HeroCategories/>
      

       <div className='feature-slider'>
        <div className='container position-relative'>
          <h2>Special Offers</h2>
            <UpadatedComponentNew data={product} />
        </div>
      </div>

      <HomeNewOffer />


      <CountDownDeal />


      

      <div className='review-slider'>
        <div className='container position-relative'>
          <h2 className='d-none d-md-block'>What client says about us</h2>
          <h2 className='d-block d-md-none'>Case Studies</h2>
            <ReviewSlider />  
        </div>
      </div>


      

    </>

  );
};

export default Home;
