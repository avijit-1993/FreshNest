import React from 'react'

const SliderWrapperFilter = (Component,filterKey) => {
  
  return ({data})=>{

    
  const totalFeaturdItem = [];


  let targetCategory  = data.categories.map((item)=> item.items);

  targetCategory.forEach(element => {

      element.forEach((item)=>{

        if(item[filterKey]){
          totalFeaturdItem.push(item)
        }

      })
  });



    return(
        <Component proItem={totalFeaturdItem } />
    )

  
  }
}



export default SliderWrapperFilter
