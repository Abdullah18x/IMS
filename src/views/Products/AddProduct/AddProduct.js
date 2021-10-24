/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from "react";
import PropTypes from "prop-types";
import FormData from "form-data";
import GridContainer from "components/Grid/GridContainer.js";
import { makeStyles } from "@material-ui/core/styles";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {
  addProduct,
  updateProductImage,
  getProductCategories
} from "../../../axios/Products.axios"
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

  //Form data
  let [keyword,editKeyword] = React.useState('');
  let [brandName,editBrandName] = React.useState('');
  let [soldBy,editSoldBy] = React.useState('');
  let [market,editMarket] = React.useState('');
  let [chineseSeller,editChineseSeller] = React.useState('');
  let [commission,editCommission] = React.useState('');
  let [pmnlCommission,editPmnlCommission] = React.useState('');
  let [dailySaleLimit,editDailySaleLimit] = React.useState('');
  let [overallSaleLimit,editOverallSaleLimit] = React.useState('');
  let [ProductcategoryId,editProductcategoryId] = React.useState(1);
  let [instructions,editInstructions] = React.useState('');
  let [refundCondition,editRefundCondition] = React.useState('');
  let [commissionCondition,editCommissionCondition] = React.useState('');
  let [picture,editPicture] = React.useState();
  let [amazonPicture,editAmazonPicture] = React.useState('');
  let [productCategories,editProductCategories] = React.useState([]);

  const uploadForm = async () => {
    let formValues = {
      keyword: keyword,
      brandName: brandName,
      soldBy: soldBy,
      market: market,
      chineseSeller: chineseSeller,
      commission: commission,
      pmnlCommission: pmnlCommission,
      dailySaleLimit: dailySaleLimit,
      overallSaleLimit: overallSaleLimit,
      ProductcategoryId: ProductcategoryId,
      instructions: instructions,
      refundCondition: refundCondition,
      commissionCondition: commissionCondition
    }
    let newProd = await addProduct(formValues);
    if (newProd.id) {
      if (picture != '') {
        const form = new FormData();
        form.append('id', newProd.id);
        form.append('uploadFor','picture')
        form.append('imageForUpload', picture);
        await updateProductImage(form);
      }
      if (amazonPicture != '') {
        const form = new FormData();
        form.append('id', newProd.id);
        form.append('uploadFor','amazonPicture')
        form.append('imageForUpload', amazonPicture);
        await updateProductImage(form);
      }
    }
  }
  //Functions
  React.useEffect(async () => {
    await getProductCategories()
    .then((categories) => {
      editProductCategories([...categories])
    })
    
  },[])

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
                    <Form.Control onChange={e => editKeyword(e.target.value)}/>
                  </Form.Group>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Brand name</Form.Label>
                      <Form.Control onChange={e => editBrandName(e.target.value)}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label>AMZ Seller</Form.Label>
                      <Form.Control onChange={e => editSoldBy(e.target.value)}/>
                    </Form.Group>
                  </Row>

                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Market</Form.Label>
                      <Form.Control onChange={e => editMarket(e.target.value)}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label>Chinese Seller</Form.Label>
                      <Form.Control onChange={e => editChineseSeller(e.target.value)}/>
                    </Form.Group>
                  </Row>

                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Commisson</Form.Label>
                      <Form.Control onChange={e => editCommission(e.target.value)}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label>PMNL Commission</Form.Label>
                      <Form.Control onChange={e => editPmnlCommission(e.target.value)}/>
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Sale Limit per day</Form.Label>
                      <Form.Control onChange={e => editDailySaleLimit(e.target.value)}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label>Overall Sale Limit</Form.Label>
                      <Form.Control onChange={e => editOverallSaleLimit(e.target.value)}/>
                    </Form.Group>
                  </Row>
                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>Select Category</Form.Label>
                    <Form.Select aria-label="Default select example" onChange={e => editProductcategoryId(e.target.value)}>
                      {
                        productCategories.map((data,keys) => {
                          return(
                            <option key={keys} value={data.id}>{data.name}</option>
                          )
                        })
                      }
                    </Form.Select>
                  </Form.Group>
                  <br />

                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>Instructions</Form.Label>
                    <Form.Control as="textarea" onChange={e => editInstructions(e.target.value)}/>
                  </Form.Group>
                  <br />
                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>Refund Conditions</Form.Label>
                    <Form.Control as="textarea" onChange={e => editRefundCondition(e.target.value)}/>
                  </Form.Group>
                  <br />
                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>Commission Conditions</Form.Label>
                    <Form.Control as="textarea" onChange={e => editCommissionCondition(e.target.value)}/>
                  </Form.Group>
                  <br />
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Amazon Picture</Form.Label>
                      <Form.Control accept="image/*" type="file" multiple onChange={e => editAmazonPicture(e.target.files[0])}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label>Picture</Form.Label>
                      <Form.Control accept="image/*" type="file" multiple onChange={e => editPicture(e.target.files[0])}/>
                    </Form.Group>
                  </Row>
                  <br />

                  <Button variant="success" type="button" onClick={uploadForm}>
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
