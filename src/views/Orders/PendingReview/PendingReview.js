/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PendingReview from "../Default/Default"

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
  let heads=['#','User','Order Number','Product','Customer Email','Market','Update Date', 'Status', 'Action']
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
      Product:'profile-bg.jpg',
      customerEmail:'abcd@gmail.com',
      market:'USA',
      createDate:'23 june', 
      status:'available', 

    }
  ]
  return (
    <PendingReview 
    page="Refunded Pending Review"
      tHeads={heads}
      tData={data}
    />
  );
}
