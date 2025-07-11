import React, { useEffect, useRef, useState } from 'react'
import SearchResult from './SearchResult'
import useBearStore from '../store'


const SearchBar = () => {

  const [productItem, setProductItem] = useState([])
  const [productName, setProductName] = useState()

  const SearchFieldValue = useRef()

  const handleGetValue = () => {

      if (SearchFieldValue.current) {
        const inputValue = SearchFieldValue.current.value;

        setProductName(inputValue)

        
        
      } 
    };

  const product = useBearStore((state) => state.storeData.productData.categories);

  let totalProductList = [];

  product.forEach(element => {

    totalProductList.push(...element.items)

  });



  const productSelection = () => {

if (!productName || productName.trim() === "") {
    setProductItem([]); 
    return;
  }

    let displayItem = totalProductList?.filter((item) =>

    item.name?.toLowerCase().includes(productName?.toLowerCase())
  );

  displayItem = displayItem?.slice(0, 4)


    setProductItem(displayItem)
  }



  const searchHideHandler = () =>{
      SearchFieldValue.current.value="";
      setProductItem([]); 
      setProductName("")

  }



  useEffect(() => {

    productSelection()

  }, [productName])




  return (
    <>

      <input ref={SearchFieldValue} onChange={handleGetValue} type="text" placeholder="Search here..." />
      <button >
        <img src="/search.svg" alt="FreshNest Search " />
      </button>

      {productItem.length > 0 ? <SearchResult  data ={productItem} searchHide = {searchHideHandler} searchHideHandler={searchHideHandler}/> :null}


    </>
  )
}

export default SearchBar
