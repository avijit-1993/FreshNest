import React, { useEffect, useState } from 'react';
import useBearStore from '../store';
import ImageGallery from './ImageGallery';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import ProductDetailsTab from './ProductDetailsTab';


const ProductDetail = () => {

    const id = useParams();

    const addToWishList = useBearStore((state) => state.addToWishList);

    const wishlist = useBearStore((state) => state.storeData.wishList);

    const cartList = useBearStore((state) => state.storeData.cart);

    const addProductToCart = useBearStore((state) => state.addProductToCart);

    const buyItNowAction = useBearStore((state) => state.buyItNowAction);

    const ItemIsInCart = cartList.some((item)=> item.id == id.id);

    const ItemIsInWishlist = wishlist.some((item)=> item.id == id.id);




    const [quantity, setQuantity] = useState(1);

    const [productItem, setProductItem] = useState()

    const product = useBearStore((state) => state.storeData.productData.categories);

    let totalProductList = [];

    product.forEach(element => {

        totalProductList.push(...element.items)

    });

    const navigate = useNavigate()

    const goToCart = () => {
        navigate("/cart")
    }

    const goToCheckout = () => {
        sessionStorage.setItem("allowCheckout", "true");
        navigate("/checkout")
    }


    const productSelection = () => {



        let displayItem = totalProductList.filter((item) => item.id == id.id)



        setProductItem(...displayItem)
    }


    useEffect(() => {

        productSelection()

    }, [id, product])


    const decrement = () => {

        if (quantity > 1) {

            const newQnt = quantity - 1

            setQuantity(newQnt)

            setProductItem({ ...productItem, qnt: newQnt })


        }

    }
    const increment = () => {

        const newQnt = quantity + 1
        setQuantity(newQnt)
        setProductItem({ ...productItem, qnt: newQnt })




    }





    if (productItem) {

        return (




            <>



                <div className="proDetBox">
                    <div className="container">
                        <div className="proDetWrap">
                            <div className="pro-carouselBox">
                                {
                                    <ImageGallery image={productItem.image} />
                                }
                            </div>



                            <div className="pro-InfoBox">
                                <div className="container py-4">


                                    {
                                        productItem.hasSpecialOffer ? <span className="discount-text">20% OFF</span> : ""

                                    }



                                    <h2 className="fw-bold">{productItem.name} </h2>


                                    <p className=" pro-description">
                                        {productItem.description}
                                    </p>


                                    <div className="d-flex align-items-center  mb-3 gap-2 mt-4">

                                        <span className="rating-box"><img src="/pro-star.svg" className='pro-star' alt="FreshNest" /> 4.5</span>
                                        <span className="num-of-revw">175 Reviews</span>
                                    </div>


                                    <div className="mb-4">
                                        <span className="old-price">${productItem.price + 20}.00</span>
                                        <span className="current-price">{`$${productItem.price}.00`}/<small>{productItem.unit}</small></span>
                                    </div>


                                    <div className="d-flex align-items-center gap-3 mb-4">
                                        <div className={`input-group pro-qnty ${ItemIsInCart ? "hideBtn" : ""}`} >
                                            <button
                                                className="decrement-btn"
                                                onClick={decrement}
                                            >
                                                −
                                            </button>
                                            <input
                                                type="text"
                                                className="form-control text-center"
                                                value={quantity}
                                                readOnly
                                            />
                                            <button
                                                className="increment-btn"
                                                onClick={increment}
                                            >
                                                +
                                            </button>
                                        </div>
                                        <button onClick={() => { addToWishList(productItem) }} className="wish-btn">

                                            <img className='pro-star' src={ItemIsInWishlist ? "/fill-wishlist.png" : "/wishlist.svg"} alt="FreshNest Wishlist" />
                                        </button>
                                    </div>


                                    <div className="pro-btn-grp">

                                        {ItemIsInCart ? <button onClick={() => goToCart()} className="button">GO TO CART</button> : <button onClick={() => { addProductToCart(productItem) }} className="button">ADD TO CART</button>}

                                        <button className="button"
                                            onClick={() => { buyItNowAction(productItem); goToCheckout() }}>
                                            BUY IT NOW
                                        </button>
                                    </div>
                                </div>
                            </div>


                        </div>

                        <ProductDetailsTab descrition={productItem.description} additionalInfo={productItem.additionalInfo} />

                    </div>
                </div>





            </>
        );

    } else {
        return (
            <div className="container text-center py-5">
                <h3>Product Not Found</h3>
            </div>
        )
    }


};

export default ProductDetail;
