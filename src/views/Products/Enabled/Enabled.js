/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from "react";
import Enabled from "../Default_E_D/Default_E_D"
import {getProductsByStatus} from "../../../axios/Products.axios"

export default function EnabledF() {
  let heads=['Seller Name','Market','Sale Limit','Today Remaining','Total Remaining','Commission','Keyword', 'Product ID', 'Image','Status','Set Status','Action']
  var [data,setData] = React.useState([])
  React.useEffect(async () => {
    await getProductsByStatus(1)
    .then((products) => {
      console.log(products)
      setData([...products])
    })
    
  },[])
  return (
    <Enabled 
    page="Enabled"
      tHeads={heads}
      tData={data}
    />
  );
}
