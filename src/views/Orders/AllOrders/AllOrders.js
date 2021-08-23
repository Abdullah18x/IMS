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
// import Icon from "@material-ui/core/Icon";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);
const useCustomStyles = makeStyles({
  a1:{
    marginRight: 0,
    marginLeft: 0,
    width:'100% !important'
  }
});
export default function AllOrders() {
  const classes = useStyles();
  const classes2 = useCustomStyles();
  let heads=['#','User','Order Number','Product','Customer Email','Market','Create Date', 'Status', 'Action']
  let data=[
    {
      no:'1',
      User:'Abdullah',
      orderNumber:'114-4507983-9321039',
      Product:'apple-icon.png',
      customerEmail:'abcd@gmail.com',
      market:'USA',
      createDate:'23 june', 
      status:'available', 

    },
    {
      no:'2',
      User:'Abdullah',
      orderNumber:'114-4507983-9321039',
      Product:'apple-icon.png',
      customerEmail:'abcd@gmail.com',
      market:'USA',
      createDate:'23 june', 
      status:'available', 

    }
  ]
  return (
    <AllOrdersT 
    page="All"
      tHeads={heads}
      tData={data}
    />
  );
}
