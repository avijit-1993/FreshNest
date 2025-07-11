import React, { useRef } from 'react';

import SliderWithFilter from './SliderWrapperFilter';

import productSlider from './productSlider';


const filterKey = "isFeatured"; 

const UpadatedComponent = SliderWithFilter(productSlider,filterKey)

const hasSpecialOffer = "hasSpecialOffer"; 

const UpadatedComponentNew = SliderWithFilter(productSlider,hasSpecialOffer)



export default UpadatedComponent;

export{UpadatedComponentNew}
