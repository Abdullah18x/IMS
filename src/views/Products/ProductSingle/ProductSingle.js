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
export default function ProductSingle(props) {
  const { tHeads, tData, page } = props;
  const classes = useCustomStyles();

  return (
    <GridContainer>
      <Row className={"page-header no-gutters " + classes.a2}>
        <Col xs={12} sm={4} className="col-12 col-sm-8 text-sm-left mb-0">
          <h3 style={{ marginTop: "0px" }} className="page-title">
            Products : Product Details
          </h3>
        </Col>
      </Row>
      <Row className={classes.fullWidth}>
        <Col md={4}>
          <Card body className={classes.a1}>
            <Row className={classes.fullWidth} style={{ textAlign: "center" }}>
              <Row className={classes.fullWidth}>
                <h3>Picture</h3>
                <div style={{ width: "250px", margin: "auto" }}>
                  <ModalImage
                    small="../imgs/product.jpg"
                    large="../imgs/product.jpg"
                    alt="Hello World!"
                  />
                </div>
              </Row>
            </Row>
            <hr />
            <Row className={classes.fullWidth} style={{ textAlign: "center" }}>
              <Row className={classes.fullWidth}>
                <h3>Amazon Picture</h3>
                <div style={{ width: "250px", margin: "auto" }}>
                  <ModalImage
                    small="../imgs/amzproduct.png"
                    large="../imgs/amzproduct.png"
                    alt="Hello World!"
                  />
                </div>
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
                      <h3 style={{ fontWeight: "bold" }}>Keyword :</h3>
                      <h4>Power Bank 20W Portable Battery Charger 15000mAh</h4>
                    </Col>
                    <Col>
                      <h3 style={{ fontWeight: "bold" }}>Sold By :</h3>
                      <h4>Xinsheng-us</h4>
                    </Col>
                  </Row>
                  <br />
                  <Row>
                    <Col>
                      <h3 style={{ fontWeight: "bold" }}>Brand Name :</h3>
                      <h4>Jiga pro</h4>
                    </Col>
                    <Col>
                      <h3 style={{ fontWeight: "bold" }}>Product ID :</h3>
                      <h4>244067</h4>
                    </Col>
                  </Row>
                  <br />
                  <Row>
                    <Col>
                      <h3 style={{ fontWeight: "bold" }}>Market :</h3>
                      <h4>US</h4>
                    </Col>
                    <Col>
                      <h3 style={{ fontWeight: "bold" }}>Category :</h3>
                      <h4>Electronics</h4>
                    </Col>
                  </Row>
                  <br />
                  <Row>
                    <Col>
                      <h3 style={{ fontWeight: "bold" }}>Commission :</h3>
                      <h4>525</h4>
                    </Col>
                  </Row>
                  <br />

                  <Row>
                    <Col md={2}>
                      <h3
                        style={{
                          fontWeight: "bold",
                          float: "left",
                          margin: "0px",
                        }}
                      >
                        Instructions:
                      </h3>
                    </Col>
                    <Col>
                      <h4 style={{ margin: "0px", paddingTop: "6px" }}>
                        {" "}
                        This is a good productThis is a good productThis is a
                        good productThis is a good productThis is a good
                        productThis is a good productThis is a good productThis
                        is a good productThis is a good productThis is a good
                        productThis is a good product
                      </h4>
                    </Col>
                  </Row>
                  <br />
                  <Row>
                    <Col md={2}>
                      <h3
                        style={{
                          fontWeight: "bold",
                          float: "left",
                          margin: "0px",
                        }}
                      >
                        Refund Condition:
                      </h3>
                    </Col>
                    <Col>
                      <h4 style={{ margin: "0px", paddingTop: "6px" }}>
                        {" "}
                        This is a good productThis is a good productThis is a
                        good productThis is a good productThis is a good
                        productThis is a good productThis is a good productThis
                        is a good productThis is a good productThis is a good
                        productThis is a good product
                      </h4>
                    </Col>
                  </Row>
                  <br />
                  <Row>
                    <Col md={2}>
                      <h3
                        style={{
                          fontWeight: "bold",
                          float: "left",
                          margin: "0px",
                        }}
                      >
                        Commission Condition:
                      </h3>
                    </Col>
                    <Col>
                      <h4 style={{ margin: "0px", paddingTop: "6px" }}>
                        {" "}
                        This is a good productThis is a good product
                      </h4>
                    </Col>
                  </Row>
                  <br />
                  <Row>
                    <Col>
                      <h3 style={{ fontWeight: "bold" }}>Overall Sale Limit :</h3>
                      <h4>10</h4>
                    </Col>
                    <Col>
                      <h3 style={{ fontWeight: "bold" }}>Daily Sale Limit :</h3>
                      <h4>1</h4>
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

ProductSingle.propTypes = {
  tHeads: PropTypes.arrayOf(PropTypes.string),
  tData: PropTypes.arrayOf(PropTypes.object),
  page: PropTypes.string,
};
