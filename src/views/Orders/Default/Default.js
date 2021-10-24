/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import PropTypes, { object } from "prop-types";
import GridContainer from "components/Grid/GridContainer.js";
import { makeStyles } from "@material-ui/core/styles";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Image from "react-bootstrap/Image";
import SearchBar from "material-ui-search-bar";
import { Link } from "react-router-dom";

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
});
export default function DefaultOrderTemplate(props) {
  const [searched, setSearched] = useState("");
  const { tHeads, tData, page } = props;
  const classes = useCustomStyles();
  const requestSearch = (searchedVal) => {
    // const filteredRows = originalRows.filter((row) => {
    //   return row.name.toLowerCase().includes(searchedVal.toLowerCase());
    // });
    // setRows(filteredRows);
  };

  // React.useEffect(() => {
  //   updatetbData(tData)
  //   console.log(tbData)
  // })

  const cancelSearch = () => {
    setSearched("");
    requestSearch(searched);
  };
  return (
    <GridContainer>
      <Row className={"page-header no-gutters " + classes.a2}>
        <Col xs={12} sm={4} className="col-12 col-sm-8 text-sm-left mb-0">
          <h3 style={{ marginTop: "0px" }} className="page-title">
            Orders Overview : {props.page}
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
        <Row style={{ marginTop: "2%" }}>
          <Col>
            <Card>
              <div className={"card-header border-bottom"}>
                <h4 className="m-0">Active Orders</h4>
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
                      return (
                        <tr key={key}>
                          <td>{prop.id}</td>
                          <td>{prop.Pm.name}</td>
                          <td>{prop.orderNumber}</td>
                          <td style={{ textAlign: "center" }}>
                            <Image
                              src={`../imgs/${prop.Product.picture}`}
                              rounded
                              style={{ width: "50px", height: "50px" }}
                            />
                          </td>
                          <td>{prop.customerEmail}</td>
                          <td>{prop.market}</td>
                          <td>{prop.createdAt}</td>
                          <td>{prop.OrderStatus.status}</td>
                          <td>
                            <Link
                              className="btn btn-success btn-sm"
                              to={{
                                pathname: "/pmm/orderPage",
                                state: {
                                  fromDashboard: true,
                                  orderId: prop.id,
                                },
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
