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
            Reservations : Add Reservation
          </h3>
        </Col>
      </Row>
      <Row className={classes.fullWidth}>
        <Col md={5}>
          <Card body className={classes.a1}>
            <Row className={classes.fullWidth} style={{ textAlign: "center" }}>
              <Row className={classes.fullWidth}>
                <Image
                  src="../imgs/profile.jpg"
                  roundedCircle
                  style={{ width: "250px", margin: "auto" }}
                />
              </Row>
              <Row className={classes.fullWidth}>
                <h3>Taha Sauood</h3>
                <h5>PM</h5>
              </Row>
              <Row className={classes.fullWidth}>
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
          </Card>
        </Col>
        <Col>
          <Card body className={classes.a1}>
            <Row className={classes.fullWidth}>
              <Col>
                <h3 style={{ marginTop: "0px" }}>Account Details</h3>
                <hr />
                <Form>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Name</Form.Label>
                      <Form.Control placeholder="Enter Name" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label>Username</Form.Label>
                      <Form.Control placeholder="Enter Username" />
                    </Form.Group>
                  </Row>

                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" placeholder="abcd@gmail.com" disabled/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label>Gender</Form.Label>
                      <Form.Control placeholder="Male" disabled/>
                    </Form.Group>
                  </Row>

                  <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="1234 Main St" />
                  </Form.Group>

                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                      <Form.Label>City</Form.Label>
                      <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridCity">
                      <Form.Label>Country</Form.Label>
                      <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                      <Form.Label>Phone</Form.Label>
                      <Form.Control />
                    </Form.Group>
                  </Row>

                  <Row className="mb-3">
                    <Form.Group as={Col} md={4} controlId="formGridEmail">
                      <Form.Label>Bank Name</Form.Label>
                      <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} md={8} controlId="formGridPassword">
                      <Form.Label>Account#</Form.Label>
                      <Form.Control />
                    </Form.Group>
                  </Row>

                  

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
