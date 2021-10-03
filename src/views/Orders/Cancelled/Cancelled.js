/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Cancelled from "../Default/Default"
import { getOrdersByStatus } from "../../../axios/Pmm.axios";

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
  var [data, setData] = React.useState([]);

  React.useEffect(async () => {
    await getOrdersByStatus(8).then((orders) => {
      setData([...orders]);
    });
  }, []);
  return (
    <Cancelled 
    page="Cancelled"
      tHeads={heads}
      tData={data}
    />
  );
}
