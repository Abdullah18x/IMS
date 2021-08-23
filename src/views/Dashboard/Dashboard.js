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
        <Row className={classes2.rowStyle}>
          <Col>
            <Card
              bg="light"
              text="dark"
              style={{
                width: "100%",
                float: "left",
                marginRight: "10px",
                border: "1px",
                borderRadius: "10px",
              }}
              className="mb-2 shadow"
            >
              <Card.Header className="text-center mt-20 mb-10">
                <h3 style={{ fontWeight: "bold", marginBottom: "15px" }}>
                  Completed
                </h3>
              </Card.Header>
              <Card.Body>
                <Card.Title className="text-center">
                  <h2 style={{ margin: "5px" }}>300</h2>
                </Card.Title>
                <div  className="text-success text-center">
                  <span
                    className="fa fa-caret-up"
                    aria-hidden="true"
                    style={{ verticalAlign:"middle" }}
                  ></span>
                  <span style={{ fontSize:"13px" }}> 20%</span>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              bg="light"
              text="dark"
              style={{
                width: "100%",
                float: "left",
                marginRight: "10px",
                border: "1px",
                borderRadius: "10px",
              }}
              className="mb-2 shadow"
            >
              <Card.Header className="text-center mt-20 mb-10">
                <h3 style={{ fontWeight: "bold", marginBottom: "15px" }}>
                  CANCELLED
                </h3>
              </Card.Header>
              <Card.Body>
                <Card.Title className="text-center">
                  <h2 style={{ margin: "5px" }}>300</h2>
                </Card.Title>
                <div  className="text-danger text-center">
                  <span
                    className="fa fa-caret-down"
                    aria-hidden="true"
                    style={{ verticalAlign:"middle" }}
                  ></span>
                  <span style={{ fontSize:"13px" }}> 20%</span>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              bg="light"
              text="dark"
              style={{
                width: "100%",
                float: "left",
                marginRight: "10px",
                border: "1px",
                borderRadius: "10px",
              }}
              className="mb-2 shadow"
            >
              <Card.Header className="text-center mt-20 mb-10">
                <h3 style={{ fontWeight: "bold", marginBottom: "15px" }}>
                  REFUNDED
                </h3>
              </Card.Header>
              <Card.Body>
                <Card.Title className="text-center">
                  <h2 style={{ margin: "5px" }}>300</h2>
                </Card.Title>
                <div  className="text-success text-center">
                  <span
                    className="fa fa-caret-up"
                    aria-hidden="true"
                    style={{ verticalAlign:"middle" }}
                  ></span>
                  <span style={{ fontSize:"13px" }}> 20%</span>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className={classes2.rowStyle}>
          <Col>
            <Card
              bg="light"
              text="dark"
              style={{
                width: "100%",
                float: "left",
                marginRight: "10px",
                border: "1px",
                borderRadius: "10px",
              }}
              className="mb-2 shadow"
            >
              <Card.Header className="text-center mt-20 mb-10">
                <h3 style={{ fontWeight: "bold", marginBottom: "15px" }}>
                  COMMISSIONED
                </h3>
              </Card.Header>
              <Card.Body>
                <Card.Title className="text-center">
                  <h2 style={{ margin: "5px" }}>300</h2>
                </Card.Title>
                <div  className="text-success text-center">
                  <span
                    className="fa fa-caret-up"
                    aria-hidden="true"
                    style={{ verticalAlign:"middle" }}
                  ></span>
                  <span style={{ fontSize:"13px" }}> 20%</span>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              bg="light"
              text="dark"
              style={{
                width: "100%",
                float: "left",
                marginRight: "10px",
                border: "1px",
                borderRadius: "10px",
              }}
              className="mb-2 shadow"
            >
              <Card.Header className="text-center mt-20 mb-10">
                <h3 style={{ fontWeight: "bold", marginBottom: "15px" }}>
                  REFUNDED PENDING REVIEW
                </h3>
              </Card.Header>
              <Card.Body>
                <Card.Title className="text-center">
                  <h2 style={{ margin: "5px" }}>300</h2>
                </Card.Title>
                <div  className="text-danger text-center">
                  <span
                    className="fa fa-caret-down"
                    aria-hidden="true"
                    style={{ verticalAlign:"middle" }}
                  ></span>
                  <span style={{ fontSize:"13px" }}> 20%</span>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              bg="light"
              text="dark"
              style={{
                width: "100%",
                float: "left",
                marginRight: "10px",
                border: "1px",
                borderRadius: "10px",
              }}
              className="mb-2 shadow"
            >
              <Card.Header className="text-center mt-20 mb-10">
                <h3 style={{ fontWeight: "bold", marginBottom: "15px" }}>
                  REVIEWED
                </h3>
              </Card.Header>
              <Card.Body>
                <Card.Title className="text-center">
                  <h2 style={{ margin: "5px" }}>300</h2>
                </Card.Title>
                <div  className="text-success text-center">
                  <span
                    className="fa fa-caret-up"
                    aria-hidden="true"
                    style={{ verticalAlign:"middle" }}
                  ></span>
                  <span style={{ fontSize:"13px" }}> 20%</span>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              bg="light"
              text="dark"
              style={{
                width: "100%",
                float: "left",
                marginRight: "10px",
                border: "1px",
                borderRadius: "10px",
              }}
              className="mb-2 shadow"
            >
              <Card.Header className="text-center mt-20 mb-10">
                <h3 style={{ fontWeight: "bold", marginBottom: "15px" }}>
                  ORDERED
                </h3>
              </Card.Header>
              <Card.Body>
                <Card.Title className="text-center">
                  <h2 style={{ margin: "5px" }}>300</h2>
                </Card.Title>
                <div  className="text-success text-center">
                  <span
                    className="fa fa-caret-up"
                    aria-hidden="true"
                    style={{ verticalAlign:"middle" }}
                  ></span>
                  <span style={{ fontSize:"13px" }}> 20%</span>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className={classes2.rowStyle}>
          <Col>
            <Card
              bg="light"
              text="dark"
              style={{
                width: "100%",
                float: "left",
                marginRight: "10px",
                border: "1px",
                borderRadius: "10px",
              }}
              className="mb-2 shadow"
            >
              <Card.Header className="text-center mt-20 mb-10">
                <h3 style={{ fontWeight: "bold", marginBottom: "15px" }}>
                REVIEW SUBMITTED FOR REFUND
                </h3>
              </Card.Header>
              <Card.Body>
                <Card.Title className="text-center">
                  <h2 style={{ margin: "5px" }}>300</h2>
                </Card.Title>
                <div  className="text-success text-center">
                  <span
                    className="fa fa-caret-up"
                    aria-hidden="true"
                    style={{ verticalAlign:"middle" }}
                  ></span>
                  <span style={{ fontSize:"13px" }}> 20%</span>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              bg="light"
              text="dark"
              style={{
                width: "100%",
                float: "left",
                marginRight: "10px",
                border: "1px",
                borderRadius: "10px",
              }}
              className="mb-2 shadow"
            >
              <Card.Header className="text-center mt-20 mb-10">
                <h3 style={{ fontWeight: "bold", marginBottom: "15px" }}>
                REVIEW DELETED
                </h3>
              </Card.Header>
              <Card.Body>
                <Card.Title className="text-center">
                  <h2 style={{ margin: "5px" }}>300</h2>
                </Card.Title>
                <div  className="text-success text-center">
                  <span
                    className="fa fa-caret-up"
                    aria-hidden="true"
                    style={{ verticalAlign:"middle" }}
                  ></span>
                  <span style={{ fontSize:"13px" }}> 20%</span>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              bg="light"
              text="dark"
              style={{
                width: "100%",
                float: "left",
                marginRight: "10px",
                border: "1px",
                borderRadius: "10px",
              }}
              className="mb-2 shadow"
            >
              <Card.Header className="text-center mt-20 mb-10">
                <h3 style={{ fontWeight: "bold", marginBottom: "15px" }}>
                ON HOLD
                </h3>
              </Card.Header>
              <Card.Body>
                <Card.Title className="text-center">
                  <h2 style={{ margin: "5px" }}>300</h2>
                </Card.Title>
                <div  className="text-danger text-center">
                  <span
                    className="fa fa-caret-down"
                    aria-hidden="true"
                    style={{ verticalAlign:"middle" }}
                  ></span>
                  <span style={{ fontSize:"13px" }}> 20%</span>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </GridContainer>
    </div>
  );
}
