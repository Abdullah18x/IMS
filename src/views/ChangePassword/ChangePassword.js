/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import PropTypes, { object } from "prop-types";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import { makeStyles } from "@material-ui/core/styles";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TextField from "@material-ui/core/TextField";
import Button from "react-bootstrap/Button";
import Image from 'react-bootstrap/Image'

// import Icon from "@material-ui/core/Icon";

// const useStyles = makeStyles(styles);
const useCustomStyles = makeStyles((theme) =>( {
  a1: {
    width: "100%",
    boxShadow:
      "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
  },
  a2: {
    marginRight: 0,
    marginLeft: 0,
    width: "100% !important",
  },
  fullWidth: {
    width: "100%",
  },
  btnMargin:{
    [theme.breakpoints.down('sm')]: {
      marginTop:"10px"
    },
  }
}));
export default function DefaultChangePassTemplate(props) {
  const { tHeads, tData, page } = props;
  const classes = useCustomStyles();

  return (
    <GridContainer>
      <Row className={"page-header no-gutters " + classes.a2}>
        <Col xs={12} sm={4} className="col-12 col-sm-8 text-sm-left mb-0">
          <h3 style={{ marginTop: "0px" }} className="page-title">
            Change Password
          </h3>
        </Col>
      </Row>
      <Card body className={classes.a1}>
        <Row className={classes.fullWidth}>
          <Col md={6}>
            <h3>Update Password</h3>
            <p>Your password must be more than 6 characters long, should contain at-least 1 Uppercase, 1 Lowercase, 1 Numeric and 1 special character.</p>
            <br/>
            <form className={classes.root} noValidate autoComplete="off">
              <Row >
                <Col sm={12}>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    placeholder="Old Password"
                    style={{ width: "100%", marginRight: "20px" }}
                  />
                </Col>
                
              </Row>
              <Row style={{marginTop:"2%"}}>
                <Col sm={12}>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    placeholder="New Password"
                    style={{ width: "100%", marginRight: "20px" }}
                  />
                </Col>
                
              </Row>
              <Row style={{marginTop:"2%"}}>
                <Col sm={12}>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    placeholder="Repeat New Password"
                    style={{ width: "100%", marginRight: "20px" }}
                  />
                </Col>
                
              </Row>
              <Row style={{marginTop:"2%"}}>
              <Col sm={2} md={2}>
                  <Button type="button" className=" btn-success" size="lg">
                    Update
                  </Button>
                </Col>
              </Row>
            </form>
          </Col>
          <Col md={6} style={{textAlign:"center"}}>
          <Image src="../imgs/exlog.jpg" thumbnail style={{width:"500px"}}/>
          </Col>
        </Row>
      </Card>
    </GridContainer>
  );
}

DefaultChangePassTemplate.propTypes = {
  tHeads: PropTypes.arrayOf(PropTypes.string),
  tData: PropTypes.arrayOf(PropTypes.object),
  page: PropTypes.string,
};
