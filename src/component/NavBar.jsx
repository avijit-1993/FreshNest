import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import SearchBar from './SearchBar'
import useBearStore from '../store'

import MenuToggaleSearch from './MenuSearchToggleContex'

const NavBar = () => {

  const [openMenu, setOpenMenu] = useState(false);






  const cartItem = useBearStore((state) => state.storeData.cart);
  const wishItem = useBearStore((state) => state.storeData.wishList);

  const showMenu = ()=>{
      setOpenMenu(!openMenu);
      document.body.classList.toggle('menu-open');
  }




  return (
    <div>
      <header>
        <div className="announcement-bar">
          <div className="container">
            Sharpen Your Savings - Up to <span>50% OFF!</span>
          </div>
        </div>

        <div className="main-header">
          <div className="container">
            <div className="main-header inner">
              <Link to="/" className="logo">
                <img src="/logo.svg" alt="FreshNest Logo" />
              </Link>
              <div className="search-bar desktop-search">

                <MenuToggaleSearch.Provider  value={showMenu}>
                  <SearchBar />
                </MenuToggaleSearch.Provider>
                

              </div>


              <div className="header-icons">
                <span className="icon-box cart-icon">
                  <Link to="/cart">
                  <img src="/cart.svg" alt="FreshNest Cart" />
                  <span className='cart-tetx'>cart</span>
                  <span className="cart-count"><span>{cartItem.length}</span></span>
                  </Link>
                </span>
                <span className="icon-box wishlist-ion">
                  <Link to="/wishlist">
                  <img src="/wishlist.svg" alt="FreshNest Wishlist" />
                  <span className="cart-count ms-1"><span>{wishItem.length}</span></span>
                  </Link>
                </span>
                <span className="icon-box user-icon ">
                  <img src="/user.svg" alt="FreshNest User" />

                </span>
                <span onClick={showMenu} className="icon-box mob-menu">
                  <img src="/menu.png" alt="FreshNest User" />
                </span>
              </div>
            </div>
          </div>
        </div>


        <nav className={`navigation ${openMenu ? "show":""}`}>
          <div className="container">
            <div className='mob-search'>
              <div className='open-menu'>
                <Link to="/" className="logo">
                  <img src="/logo.svg" alt="FreshNest Logo" />
                </Link>


                <img src="/close.svg" onClick={showMenu} alt="FreshNest User" />


              </div>
              <hr className='nav-separateor' />
              <div className="search-bar mobile-search">
                
                <MenuToggaleSearch.Provider  value={showMenu}>
                  <SearchBar />
                </MenuToggaleSearch.Provider>
              </div>

            </div>
            <ul className='menu-link'>
              <li><NavLink to="/" onClick={()=>showMenu()}>Home</NavLink></li>
              <li><NavLink to="/product" onClick={()=>showMenu()}>Product</NavLink></li>
              <li><NavLink to="/about" onClick={()=>showMenu()}>About</NavLink></li>
              <li><NavLink to="/contact" onClick={()=>showMenu()}>Contact</NavLink></li>
              <li className='mob-acc'><NavLink to="/account" onClick={()=>showMenu()}>Account</NavLink></li>
            </ul>
          </div>
        </nav>

      </header>

    </div>
  )
}

export default NavBar
