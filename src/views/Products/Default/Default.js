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
import Table from "react-bootstrap/Table";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import SearchBar from "material-ui-search-bar";
import { Link } from "react-router-dom";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

// import Icon from "@material-ui/core/Icon";

// const useStyles = makeStyles(styles);
const useCustomStyles = makeStyles({
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
  tableData: {
    whiteSpace: "nowrap",
    maxWidth: "60px",
    textOverflow: "ellipsis",
    overflow: "hidden",
  },
  formControl: {
    width: "100%",
    marginTop: "2%",
  },
});

let markets = ["a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8"];

export default function DefaultOrderTemplate(props) {
  //   const classes = useStyles();
  const [searched, setSearched] = useState("");
  const [market, setMarket] = React.useState("");
  const { tHeads, tData, page } = props;
  const classes = useCustomStyles();
  const requestSearch = (searchedVal) => {
    // const filteredRows = originalRows.filter((row) => {
    //   return row.name.toLowerCase().includes(searchedVal.toLowerCase());
    // });
    // setRows(filteredRows);
  };

  const cancelSearch = () => {
    setSearched("");
    requestSearch(searched);
  };

  const handleChange = (event) => {
    setMarket(event.target.value);
  };
  return (
    <GridContainer>
      <Row className={"page-header no-gutters " + classes.a2}>
        <Col xs={12} sm={4} className="col-12 col-sm-8 text-sm-left mb-0">
          <h3 style={{ marginTop: "0px" }} className="page-title">
            Products Overview : {props.page}
          </h3>
        </Col>
      </Row>
      <Card body className={classes.a1}>
        <Row className={classes.fullWidth}>
          <Col>
            <SearchBar
              placeholder="Search By Customer Email"
              value={searched}
              onChange={(searchVal) => requestSearch(searchVal)}
              onCancelSearch={() => cancelSearch()}
            />
          </Col>
          <Col>
            <SearchBar
              placeholder="Search By Product Id"
              value={searched}
              onChange={(searchVal) => requestSearch(searchVal)}
              onCancelSearch={() => cancelSearch()}
            />
          </Col>
          <Col>
            <SearchBar
              placeholder="Search By Order #"
              value={searched}
              onChange={(searchVal) => requestSearch(searchVal)}
              onCancelSearch={() => cancelSearch()}
            />
          </Col>
        </Row>
        <Row className={classes.fullWidth}>
          <Col md={12}>
            <FormControl variant="filled" className={classes.formControl}>
              <InputLabel id="demo-simple-select-filled-label">
                Market
              </InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={market}
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {markets.map((prop, key) => {
                  return (
                    <MenuItem key={key} value={prop}>
                      {prop}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Col>
        </Row>
        <Row style={{ marginTop: "2%" }}>
          <Col>
            <Card>
              <div className={"card-header border-bottom"}>
                <h4 className="m-0">Active Products</h4>
              </div>
              {tData === undefined || tData === null ? (
                <h3>No Data Found</h3>
              ) : (
                <Table
                  striped
                  bordered
                  hover
                  responsive
                  size="sm"
                  style={{ textAlign: "center" }}
                >
                  <thead>
                    <tr>
                      {tHeads.map((value, key) => {
                        return <th key={key}>{value}</th>;
                      })}
                    </tr>
                  </thead>
                  <tbody>
                    {tData.map((prop, key) => {
                      let propValues = Object.values(prop);
                      console.log(propValues);
                      return (
                        <tr key={key}>
                          {propValues.map((prop2, key) => {
                            return prop2.toLowerCase().includes("jpeg") ||
                              prop2.toLowerCase().includes("jpg") ||
                              prop2.toLowerCase().includes("png") ? (
                              <td style={{ textAlign: "center" }}>
                                <Image
                                  src={`../imgs/${prop2}`}
                                  rounded
                                  style={{ width: "50px", height: "50px" }}
                                />
                              </td>
                            ) : (
                              <td className={classes.tableData} key={key}>
                                {prop2}
                              </td>
                            );
                          })}
                          <td>
                            <Button size="sm" variant="success">
                              Reserve Now
                            </Button>{" "}
                          </td>
                          <td>
                            <Link
                              className="btn btn-success btn-sm"
                              to={{
                                pathname: "/Dashboard/product",
                                state: { fromDashboard: true },
                              }}
                            >
                              View
                            </Link>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              )}
            </Card>
          </Col>
        </Row>
      </Card>
    </GridContainer>
  );
}

DefaultOrderTemplate.propTypes = {
  tHeads: PropTypes.arrayOf(PropTypes.string),
  tData: PropTypes.arrayOf(PropTypes.object),
  page: PropTypes.string,
};
