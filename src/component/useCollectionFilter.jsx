import React from 'react'
import { useMemo } from 'react'

const useCollectionFilter = (data,category) => {
  return useMemo(() => {

 let ItemMap = []

    if (!category) return data;


   let filterCollectionItem =data.filter(item => item.name === category);

    filterCollectionItem.forEach(element => {

        element.items.forEach((element) => {
            ItemMap.push(element)
        })

    });


    return (

      ItemMap


    )


  }, [data, category]);


};

export default useCollectionFilter
