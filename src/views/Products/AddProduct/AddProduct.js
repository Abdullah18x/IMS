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
export default function Profile(props) {
  const { tHeads, tData, page } = props;
  const classes = useCustomStyles();

  return (
    <GridContainer>
      <Row className={"page-header no-gutters " + classes.a2}>
        <Col xs={12} sm={4} className="col-12 col-sm-8 text-sm-left mb-0">
          <h3 style={{ marginTop: "0px" }} className="page-title">
            Product : Add Product
          </h3>
        </Col>
      </Row>
      <Row className={classes.fullWidth}>
        <Col>
          <Card body className={classes.a1}>
            <Row className={classes.fullWidth}>
              <Col>
                <Form>
                  <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Keyword</Form.Label>
                    <Form.Control />
                  </Form.Group>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Brand name</Form.Label>
                      <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label>AMZ Seller</Form.Label>
                      <Form.Control />
                    </Form.Group>
                  </Row>

                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Market</Form.Label>
                      <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label>Chinese Seller</Form.Label>
                      <Form.Control />
                    </Form.Group>
                  </Row>

                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Commisson</Form.Label>
                      <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label>PMNL Commission</Form.Label>
                      <Form.Control />
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Sale Limit per day</Form.Label>
                      <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label>Overall Sale Limit</Form.Label>
                      <Form.Control />
                    </Form.Group>
                  </Row>
                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>Select Category</Form.Label>
                    <Form.Select aria-label="Default select example">
                      <option>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </Form.Group>
                  <br />

                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>Instructions</Form.Label>
                    <Form.Control as="textarea" />
                  </Form.Group>
                  <br />
                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>Refund Conditions</Form.Label>
                    <Form.Control as="textarea" />
                  </Form.Group>
                  <br />
                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>Commission Conditions</Form.Label>
                    <Form.Control as="textarea" />
                  </Form.Group>
                  <br />
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Amazon Picture</Form.Label>
                      <Form.Control type="file" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label>Picture</Form.Label>
                      <Form.Control type="file" />
                    </Form.Group>
                  </Row>
                  <br />

                  <Button variant="success" type="button">
                    Submit
                  </Button>
                </Form>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </GridContainer>
  );
}

Profile.propTypes = {
  tHeads: PropTypes.arrayOf(PropTypes.string),
  tData: PropTypes.arrayOf(PropTypes.object),
  page: PropTypes.string,
};
