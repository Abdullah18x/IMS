/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from "react";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import { makeStyles } from "@material-ui/core/styles";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AllOrdersT from "../Default/Default"
// import axios from "../../../axios/Pmm.axios"
import {getAllOrders} from "../../../axios/Pmm.axios"
// import Icon from "@material-ui/core/Icon";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";


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
