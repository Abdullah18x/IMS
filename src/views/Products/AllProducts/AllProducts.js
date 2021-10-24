/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from "react";
import AllProducts from "../Default/Default"
import {getAllProducts} from "../../../axios/Products.axios"

export default function AllProductsF() {
  let heads=['Seller Name','Market','Sale Limit','Today Remaining','Total Remaining','Commission','Keyword', 'Product ID', 'Image','Reserve','Action']
  var [data,setData] = React.useState([])
  React.useEffect(async () => {
    await getAllProducts()
    .then((products) => {
      console.log(products)
      setData([...products])
    })
    
  },[])
  return (
    <AllProducts 
    page="All Products"
      tHeads={heads}
      tData={data}
    />
  );
}
