import React from 'react'
import '../assets/CartContent.css'
import { useNavigate } from 'react-router-dom'


const CartTable = ({data,cartPageIncrement,cartPageDecrement,cartDeleteItem,clearCart }) => {

  const navigate = useNavigate()
  
const goToProductPage = (id)=>{
  navigate(`/product/${id}`)
}
   


  return (
    <>
    <div className="cart-container">
      <div className="cart-header">
        <h2>Cart <span className="item-count">{`(${data.length} Items)`}</span></h2>
        <div className="clear-cart" onClick={clearCart}>
           <span> <img src="/public/trash.svg" alt="FreshNest" /> Clear Cart</span>
        </div>
      </div>

 

 {
  data.map((item,index)=>{
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
       
        <div className="quantity-box">
          <div className="qty-btn" onClick={()=>cartPageDecrement(item)}>-</div>
          <div className="qty">{item.qnt}</div>
          <div className="qty-btn" onClick={()=>cartPageIncrement(item)}>+</div>
        </div>
        <div className="delete-btn" onClick={()=>cartDeleteItem(item)}>
          <img src="/public/trash.svg" alt="FreshNest" />
        </div>
      </div>

    )
  })
 }

      

     
    </div>
    </>
  )
}

export default CartTable
