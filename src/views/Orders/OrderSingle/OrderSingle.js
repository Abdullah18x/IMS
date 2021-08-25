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
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import ModalImage from "react-modal-image";

// import Icon from "@material-ui/core/Icon";

// const useStyles = makeStyles(styles);
const useCustomStyles = makeStyles((theme) => ({
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
  btnMargin: {
    [theme.breakpoints.down("sm")]: {
      marginTop: "10px",
    },
  },
}));
export default function OrderSingle(props) {
  const { tHeads, tData, page } = props;
  const classes = useCustomStyles();

  return (
    <GridContainer>
      <Row className={"page-header no-gutters " + classes.a2}>
        <Col xs={12} sm={4} className="col-12 col-sm-8 text-sm-left mb-0">
          <h3 style={{ marginTop: "0px" }} className="page-title">
            Orders : Order Details
          </h3>
        </Col>
      </Row>
      <Row className={classes.fullWidth}>
        <Col md={4}>
          <Card body className={classes.a1}>
            <Row className={classes.fullWidth} style={{ textAlign: "center" }}>
              <Row className={classes.fullWidth}>
                <h3>Order Picture</h3>
                <div style={{ width: "250px", margin: "auto" }}>
                  <ModalImage
                    small="../imgs/order.jpg"
                    large="../imgs/order.jpg"
                    alt="Hello World!"
                  />
                </div>
              </Row>
              <Row className={classes.fullWidth} style={{ marginTop: "10px" }}>
                <form className={classes.root} noValidate autoComplete="off">
                  <div style={{ width: "50%", margin: "auto" }}>
                    <p style={{ margin: "0px", textAlign: "left" }}>
                      Change Image
                    </p>
                  </div>

                  <Form.Control
                    accept="image/*"
                    type="file"
                    style={{ width: "50%", margin: "auto" }}
                  />
                </form>
              </Row>
            </Row>
            <hr />
            <Row className={classes.fullWidth} style={{ textAlign: "center" }}>
              <Row className={classes.fullWidth}>
                <h3>Refund Picture</h3>
                <div style={{ width: "250px", margin: "auto" }}>
                  <ModalImage
                    small="../imgs/refund.png"
                    large="../imgs/refund.png"
                    alt="Hello World!"
                  />
                </div>
              </Row>
            </Row>
            <hr />
            <Row className={classes.fullWidth} style={{ textAlign: "center" }}>
              <Row className={classes.fullWidth}>
                <h3>Review Picture</h3>
                <div style={{ width: "250px", margin: "auto" }}>
                  <ModalImage
                    small="../imgs/review.jpg"
                    large="../imgs/review.jpg"
                    alt="Hello World!"
                  />
                </div>
              </Row>
              <Row className={classes.fullWidth} style={{ marginTop: "10px" }}>
                <form className={classes.root} noValidate autoComplete="off">
                  <div style={{ width: "50%", margin: "auto" }}>
                    <p style={{ margin: "0px", textAlign: "left" }}>
                      Change Image
                    </p>
                  </div>

                  <Form.Control
                    accept="image/*"
                    type="file"
                    style={{ width: "50%", margin: "auto" }}
                  />
                </form>
              </Row>
            </Row>
            <hr />
          </Card>
        </Col>
        <Col>
          <Card body className={classes.a1}>
            <Row className={classes.fullWidth}>
              <Col>
                <h3 style={{ marginTop: "0px" }}>Details</h3>
                <hr />
                <Container>
                  <Row>
                    <Col>
                      <h3 style={{fontWeight:"bold"}}>Order Number :</h3>
                      <h4>114-4507983-9321039</h4>
                    </Col>
                    <Col>
                      <h3 style={{fontWeight:"bold"}}>Customer Email :</h3>
                      <h4>areebgul@hotmail.com</h4>
                    </Col>
                  </Row>
                <br />
                  <Row>
                    <Col>
                      <h3 style={{fontWeight:"bold"}}>Product ID :</h3>
                      <h4>164704</h4>
                    </Col>
                    <Col>
                      <h3 style={{fontWeight:"bold"}}>AMZ Review Link :</h3>
                      <h4>abcd</h4>
                    </Col>
                  </Row>
                  <br />
                  <Row>
                    <Col>
                      <h3 style={{fontWeight:"bold"}}>Market :</h3>
                      <h4>US</h4>
                    </Col>
                    <Col>
                      <h3 style={{fontWeight:"bold"}}>Order Status :</h3>
                      <h4>Completed</h4>
                    </Col>
                  </Row>
                  <br />
                  <Row>
                    <Col>
                      <h3 style={{fontWeight:"bold"}}>Order Date :</h3>
                      <h4>2021-06-12 16:03:28</h4>
                    </Col>
                    <Col>
                      <h3 style={{fontWeight:"bold"}}>Review Date :</h3>
                      <h4>2021-07-02 21:52:09</h4>
                    </Col>
                  </Row>
                  <br />
                  <Row>
                    <Col>
                      <h3 style={{fontWeight:"bold"}}>Refund Date :</h3>
                      <h4>2021-07-07 15:09:57</h4>
                    </Col>
                    <Col>
                      <h3 style={{fontWeight:"bold"}}>Last Update Date :</h3>
                      <h4>2021-07-07 15:09:57</h4>
                    </Col>
                  </Row>
                  <br />
                  <Row>
                    <Col>
                      <h3 style={{fontWeight:"bold"}}>Seller ID :</h3>
                      <h4>32</h4>
                    </Col>
                    <Col>
                      <h3 style={{fontWeight:"bold"}}>Commission :</h3>
                      <h4>525</h4>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <h3 style={{fontWeight:"bold"}}>Remarks :</h3>
                      <h4>This is a good product</h4>
                    </Col>
                    
                  </Row>
                </Container>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </GridContainer>
  );
}

OrderSingle.propTypes = {
  tHeads: PropTypes.arrayOf(PropTypes.string),
  tData: PropTypes.arrayOf(PropTypes.object),
  page: PropTypes.string,
};
