import React from 'react'
import useBearStore from '../store'
import { Link } from 'react-router-dom';

const HeroCategories = ({id}) => {
    
    const product = useBearStore((state) => state.storeData.productData.categories);

    

  return (
    <div>
      <div className="heroCategoryBox">
        <div className="container">
            <div className="text-center sec-head">
                <h2 className='mb-3'>Top Categories</h2>
                <p>Discover the goodness of nature with our handpicked selection of fresh vegetables, <br/>
    succulent seafood, and juicy fruits—all delivered straight to your doorstep.</p>
            </div>
            <div className="categoryWrapper">

                {
                   product.map((item,index)=>{

                        return(

                            <div className="cat-box" key={index}>
                              <Link to={`/collection/${item.name}`}>
                                <img src={`/${item.categoryIcon}`} alt="FreshNest" />
                                <h4>{item.name}</h4>
                                <h6>({item.items.length} items)</h6>

                                </Link>
                            </div>
                        )

                   }) 
                }
                
            </div>
        </div>
      </div>
    </div>
  )
}

export default HeroCategories
