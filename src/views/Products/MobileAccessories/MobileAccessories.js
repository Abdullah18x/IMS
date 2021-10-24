/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from "react";
import MobileAccessories from "../Default/Default"
import {getProductsByCategory} from "../../../axios/Products.axios"

export default function MobileAccessoriesF() {
  let heads=['Seller Name','Market','Sale Limit','Today Remaining','Total Remaining','Commission','Keyword', 'Product ID', 'Image','Reserve','Action']
  var [data,setData] = React.useState([])
  React.useEffect(async () => {
    await getProductsByCategory(7)
    .then((products) => {
      console.log(products)
      setData([...products])
    })
    
  },[])
  return (
    <MobileAccessories 
    page="Mobile Accessories"
      tHeads={heads}
      tData={data}
    />
  );
}
