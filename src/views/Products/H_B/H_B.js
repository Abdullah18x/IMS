/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from "react";
import H_B from "../Default/Default"
import {getProductsByCategory} from "../../../axios/Products.axios"

export default function H_BF() {
  let heads=['Seller Name','Market','Sale Limit','Today Remaining','Total Remaining','Commission','Keyword', 'Product ID', 'Image','Reserve','Action']
  var [data,setData] = React.useState([])
  React.useEffect(async () => {
    await getProductsByCategory(3)
    .then((products) => {
      console.log(products)
      setData([...products])
    })
    
  },[])
  return (
    <H_B 
    page="Health And Beauty"
      tHeads={heads}
      tData={data}
    />
  );
}
