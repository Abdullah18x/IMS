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
// import Icon from "@material-ui/core/Icon";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(
  styles
  );
  const useCustomStyles = makeStyles({
    rowStyle:{
      width: "100%", 
      marginBottom:"1%",
    }
  })
export default function Dashboard() {
  const classes = useStyles();
  const classes2 = useCustomStyles();
  return (
    <div>
      <GridContainer>
       <h1>Ordered</h1>
      </GridContainer>
    </div>
  );
}
