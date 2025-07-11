import React from 'react'
import useBearStore from '../store'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'


const WishList = () => {

    const wishList = useBearStore((state) => state.storeData.wishList);



    const removeFromWishlist = useBearStore((state) => state.removeFromWishlist);
    
const navigate = useNavigate()
const goToProductPage = (id)=>{
  navigate(`/product/${id}`)
}

    if(wishList.length <1 ){

        return (
            
            <>
            <div className="container text-center py-5">

                <img src="/public/emptyCart.gif" width={250} alt="FreshNest" />
                <h2>Your Wishlist Is Empty</h2>

                <Link to="/product" style={{textDecoration:"none",fontWeight:"bold",color:"#80b500"}}>SHOP NOW</Link>
                
            </div>
            </>
        )
    }

 return (


 <>
    <div className="wishlistItem py-5">
      <div className="container">
          <div className="cart-container">
      <div className="cart-header">
        <h2>Wishlist <span className="item-count">{`(${wishList.length} Items)`}</span></h2>
        
      </div>

 

 {
  wishList.map((item,index)=>{
    return(

        <div className="cart-item" key={index}>

        <div className="cart-pro-img">
             <img src={`/public/${item.image}`} onClick={()=>goToProductPage(item.id)} alt="Tomato" className="cart-image" />
        <div className="cart-details" onClick={()=>goToProductPage(item.id)}>
          <div className="item-name" onClick={()=>goToProductPage(item.id)}>{item.name}</div>
          <div className="item-weight" onClick={()=>goToProductPage(item.id)}>{item.weight}</div>
          <div className="item-price" onClick={()=>goToProductPage(item.id)}>${item.price}.00</div>
        </div>  
        </div>
       
        
        <div className="delete-btn" onClick={()=>removeFromWishlist(item)}>
          <img src="/public/trash.svg" alt="FreshNest" />
        </div>
      </div>

    )
  })
 }

      

     
    </div>
      </div>
    </div>
    
    </>
    
  );
};

export default WishList
