/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Enabled from "../Default/Default"

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);
const useCustomStyles = makeStyles({
  a1:{
    marginRight: 0,
    marginLeft: 0,
    width:'100% !important'
  }
});
export default function EnabledF() {
  const classes = useStyles();
  const classes2 = useCustomStyles();
  let heads=['Seller Name','Market','Sale Limit','Today Remaining','Total Remaining','Commission','Keyword', 'Product ID', 'Image','Status','Set Status','Action']
  let data=[
    {
      name:'Jawad',
      market:'abcd',
      saleLimit:'123',
      todayR:'400',
      totalR:'1000',
      commission:'20%',
      keyword:'shampoo', 
      productsId:'124', 
      Image:'apple-icon.png', 
      status: "Enabled"

    },{
        name:'Amir',
        market:'abcd',
        saleLimit:'123',
        todayR:'400',
        totalR:'1000',
        commission:'20%',
        keyword:'shampoo', 
        productsId:'124', 
        Image:'apple-icon.png', 
        status: "Enabled"
  
      },{
        name:'Ismail',
        market:'abcd',
        saleLimit:'123',
        todayR:'400',
        totalR:'1000',
        commission:'20%',
        keyword:'shampoo', 
        productsId:'124', 
        Image:'apple-icon.png', 
        status: "Enabled"
  
      },{
        name:'Abdullah',
        market:'abcd',
        saleLimit:'123',
        todayR:'400',
        totalR:'1000',
        commission:'20%',
        keyword:'shampoo, conditioner, soap', 
        productsId:'124', 
        Image:'apple-icon.png', 
        status: "Enabled"
  
      },
  ]
  return (
    <Enabled 
    page="Enabled"
      tHeads={heads}
      tData={data}
    />
  );
}
