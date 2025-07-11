import React, { useState } from 'react'

import useBearStore from '../store'
import useCollectionFilter from '../component/useCollectionFilter'
import { Link, useParams } from 'react-router-dom'

const CollectionTab = () => {

    const data = useBearStore((state) => state.storeData.productData.categories);

    const params = useParams();

    const filterText = params.category


    const [filterInfo, setFilterInfo] = useState(filterText);




    let filterCollectionItem = useCollectionFilter(data, filterInfo);



    const addToWishList = useBearStore((state) => state.addToWishList);

    const wishlist = useBearStore((state) => state.storeData.wishList);

    const addTocart = useBearStore((state) => state.addToCart);

    const cartList = useBearStore((state) => state.storeData.cart);

    // const handleFilter = (category) => {

    //     setFilterInfo(category)

    // }

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

    if(filterCollectionItem.length == 0){

        return (
            <>
            <div className="container py-5 text-center">
                <h2>product not found</h2>
            </div>
            
            </>
            
        )
    }


    return (
        <>
            <div className="container">
               

                <div className="collection-wrapper mb-5">
                    {
                        filterCollectionItem.map((item, index) => {

                            return (

                                <div className='pro-slider-box' key={index}>
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

                            )

                        })
                    }
                </div>

            
        </div >
        </>
  )
}

export default CollectionTab
