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
import ReviewDeleted from "../Default/Default";
import { getOrdersByStatus } from "../../../axios/Pmm.axios";
// import Icon from "@material-ui/core/Icon";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);
const useCustomStyles = makeStyles({
  a1: {
    marginRight: 0,
    marginLeft: 0,
    width: "100% !important",
  },
});
export default function AllOrders() {
  const classes = useStyles();
  const classes2 = useCustomStyles();
  let heads = [
    "#",
    "User",
    "Order Number",
    "Product",
    "Customer Email",
    "Market",
    "Create Date",
    "Status",
    "Action",
  ];
  var [data, setData] = React.useState([]);

  React.useEffect(async () => {
    await getOrdersByStatus(7).then((orders) => {
      setData([...orders]);
    });
  }, []);
  return <ReviewDeleted page="Review Deleted" tHeads={heads} tData={data} />;
}
