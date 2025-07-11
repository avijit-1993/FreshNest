import React,{useContext, useId} from 'react'
import { Link } from 'react-router-dom'

import MenuToggaleSearch from './MenuSearchToggleContex'

const SearchResult = ({data,searchHideHandler}) => {


   const toggleMenu  = useContext(MenuToggaleSearch)
    

  return (
    <>

    <div className="sr-box">
        {data?.map((item,index)=>{
            return(
                
                  <div className="cart-pro-img" key={index}>
                   
                        <img alt="Tomato" className="cart-image" src={`/${item.image}`} />
                    <div className="cart-details">
                       <Link to={`/product/${item.id}`} >  <div className="item-name" onClick={()=>{toggleMenu(), searchHideHandler()}} >{item.name}</div></Link>
                    <div className="item-weight">{true?"In Stock":"Out Of Stock"}</div>
                    </div>
                    
                    </div>
                
            )
        })}
    </div>
      
    </>
  )
}

export default SearchResult
