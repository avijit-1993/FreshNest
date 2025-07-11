import React, { useEffect } from 'react'
import InnerPageHead from '../component/InnerPageHead'

import ImageGallery from '../component/ImageGallery';
import { UpadatedComponentNew } from '../component/SliderWrapper';
import useBearStore from '../store';
import HeroCategories from '../component/HeroCategories';
import ProductDetail from '../component/ProductDetail';
import { useLocation } from 'react-router-dom';



const ProductDetails = () => {



    const product = useBearStore((state) => state.storeData.productData);


    return (
        <div>
            <InnerPageHead heading="PRODUCT" />

            <ProductDetail />




            <HeroCategories />

            <div className='feature-slider'>
                <div className='container position-relative'>
                    <h2>Special Offers</h2>
                    <UpadatedComponentNew data={product} />
                </div>
            </div>

        </div>
    )
}

export default ProductDetails
