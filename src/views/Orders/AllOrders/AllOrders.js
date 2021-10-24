/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from "react";
import AllOrdersT from "../Default/Default"
import {getAllOrders} from "../../../axios/Pmm.axios"

export default function AllOrders() {
  let heads=['#','User','Order Number','Product','Customer Email','Market','Create Date', 'Status', 'Action']
  var [data,setData] = React.useState([])
  
  

  React.useEffect(async () => {
    await getAllOrders()
    .then((orders) => {
      setData([...orders])
    })
    
  },[])

  // React.useEffect(() => {console.log(data)},[data])

  return (
    <AllOrdersT 
    page="All"
      tHeads={heads}
      tData={data}
    />
  );
}
