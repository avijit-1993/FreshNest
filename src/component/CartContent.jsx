import React from 'react'
import CartTable from './CartTable'
import CartSummery from './CartSummery';
import useBearStore from '../store'
import { Link } from 'react-router-dom';



const CartContent = () => {

    const product = useBearStore((state) => state.storeData.cart);

    const cartPageIncrement = useBearStore((state) => state.cartPageIncrement);
    const cartPageDecrement = useBearStore((state) => state.cartPageDecrement);
    const cartDeleteItem = useBearStore((state) => state.cartDeleteItem);

    const clearCart = useBearStore((state) => state.clearCart);
    

    if(product.length <1 ){

        return (
            
            <>
            <div className="container text-center py-5">

                <img src="/public/emptyCart.gif" width={250} alt="FreshNest" />
                <h2>Your Cart Is Empty</h2>

                <Link to="/product" style={{textDecoration:"none",fontWeight:"bold",color:"#80b500"}}>SHOP NOW</Link>
                
            </div>
            </>
        )
    }

 return (
    <div className="container">
        <div className="car-contentWarpper">

            <div className="cartTable">
                <CartTable  data={product} cartPageIncrement={cartPageIncrement} cartPageDecrement={cartPageDecrement} cartDeleteItem={cartDeleteItem} clearCart ={clearCart }/>
            </div>

            <div className="cartSummery" >
            <CartSummery data={product}/>
            </div>

        </div>
    </div>
    
  );
};

export default CartContent
