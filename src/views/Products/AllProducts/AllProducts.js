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
import AllProducts from "../Default/Default"
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
export default function AllProductsF() {
  const classes = useStyles();
  const classes2 = useCustomStyles();
  let heads=['Seller Name','Market','Sale Limit','Today Remaining','Total Remaining','Commission','Keyword', 'Product ID', 'Image','Reserve','Action']
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
  
      },
  ]
  return (
    <AllProducts 
    page="All Products"
      tHeads={heads}
      tData={data}
    />
  );
}
