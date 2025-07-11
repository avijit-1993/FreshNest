
import React, { useState } from 'react'

import useBearStore from '../store'
import useCollectionFilter from '../component/useCollectionFilter'
import { Link } from 'react-router-dom'

const ProductTab = () => {

    const data = useBearStore((state) => state.storeData.productData.categories);


    const [filterInfo, setFilterInfo] = useState("Vegetables");




    let filterCollectionItem = useCollectionFilter(data, filterInfo);



    const addToWishList = useBearStore((state) => state.addToWishList);

    const wishlist = useBearStore((state) => state.storeData.wishList);

    const addTocart = useBearStore((state) => state.addToCart);

    const cartList = useBearStore((state) => state.storeData.cart);

    const handleFilter = (category) => {

        setFilterInfo(category)

    }

    
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


    return (
        <>
            <div className="container">
                <div className="collection-head">
                    <h2>Shop By Categories </h2>
                    <div className="collBtn">
                        <button className={filterInfo == "Vegetables" ? "active" : ""} onClick={() => handleFilter("Vegetables")}>
                            <img src="/vegetableIcon.svg" alt="FreshNest" /> Vegetables
                        </button>
                        <button className={filterInfo == "Fruits" ? "active" : ""} onClick={() => handleFilter("Fruits")}>
                            <img src="/fruitsIcon.svg" alt="FreshNest" /> FRUITS
                        </button>
                        <button className={filterInfo == "Meat" ? "active" : ""} onClick={() => handleFilter("Meat")}>
                            <img src="/meatIcon.svg" alt="FreshNest" /> Meat
                        </button>
                        <button className={filterInfo == "Fish" ? "active" : ""} onClick={() => handleFilter("Fish")}>
                            <img src="/fishIcon.svg" alt="FreshNest" /> Fish
                        </button>
                    </div>
                </div>

                <div className="collection-wrapper">
                    {
                        filterCollectionItem.map((item, index) => {

                            return (

                                <div className='pro-slider-box' key={index}>
                                    <div className="proSl-img position-relative">
                                        <img src={`/public/${item.image}`} alt="FreshNest Logo" />

                                        {item.isNew ? <span className='tagSpan new-tag'>New</span> : null}
                                        {item.onSale ? <span className='tagSpan sale-tag'>Sale</span> : null}

                                        <Link className='button' to={`/product/${item.id}`}>SHOP NOW</Link>

                                        <span onClick={() => addTocart(item)} className="icon-box cart-icon">
                                            <img src={ItemIsOnCart(item) ? "/public/fill-cart.png" : "/public/cart.svg"} alt="FreshNest Cart" />
                                        </span>
                                        <span onClick={() => { addToWishList(item) }} className="icon-box wishlist-ion">
                                            <img src={ItemIsOnWishList(item) ? "/public/fill-wishlist.png" : "/public/wishlist.svg"} alt="FreshNest Wishlist" />
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

export default ProductTab
