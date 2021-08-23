/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Reviewed from "../Default/Default"
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
  let heads=['#','User','Order Number','Product ID','Customer Email','Market','Review Date', 'Status', 'Action']
  let data=[
    {
      no:'1',
      User:'Abdullah',
      orderNumber:'114-4507983-9321039',
      Product:'14074',
      customerEmail:'abcd@gmail.com',
      market:'USA',
      reviewDate:'23 june', 
      status:'available', 

    },
    {
      no:'2',
      User:'Abdullah',
      orderNumber:'114-4507983-9321039',
      Product:'14074',
      customerEmail:'abcd@gmail.com',
      market:'USA',
      reviewDate:'23 june', 
      status:'available', 

    }
  ]
  return (
    <Reviewed 
    page="Reviewed"
      tHeads={heads}
      tData={data}
    />
  );
}
