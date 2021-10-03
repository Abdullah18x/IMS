/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
// core components
// import Header from "components/Header/Header.js";
// import HeaderLinks from "components/Header/HeaderLinks.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
let axios = require('../../axios/Pmm.axios')
let ls = require('local-storage');

import styles from "assets/jss/material-kit-react/views/loginPage.js";

import image from "assets/img/bg7.jpg";

const useStyles = makeStyles(styles);
export default function LoginPage() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [userType, setUserType] = React.useState("pmm");

  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function () {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();

  let submitForm = async () => {
    if(userType === 'pmm'){
      let user = await axios.loginPmm(email, password)
      console.log(user)
      if(user.error){
        alert(user.error)
        return
      }else{
        ls.set('id',user.id)
        ls.set('user',user.user)
        ls.set('token',user.token)
        window.location.href = 'http://localhost:3005/pmm/index'
      }
      
    }
    
  };
  return (
    <div>
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form}>
                  <CardHeader color="success" className={classes.cardHeader}>
                    <h3>Management System</h3>
                    <h4>Login</h4>
                  </CardHeader>
                  <CardBody>
                    {/* <CustomInput
                      labelText="Email..."
                      id="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      success
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "email",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Email className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                      }}
                    /> */}

                    <TextField
                      label="Email"
                      type="text"
                      autoComplete="current-password"
                      style={{width:'100%', marginBottom:'3%'}}
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                    <TextField
                      label="Password"
                      type="password"
                      autoComplete="current-password"
                      style={{width:'100%', marginBottom:'5%'}}
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                    <Row style={{ width: "100%", margin: "0px" }}>
                      <Col md={12} style={{padding: "0px" }}>
                        <FormControl style={{ width: "100%" }}>
                          <InputLabel id="demo-simple-select-filled-label">
                            User Type
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled"
                            value={userType}
                            onChange={(e) => {
                              setUserType(e.target.value);
                            }}
                          >
                            <MenuItem value="pmm">
                              <em>Pmm</em>
                            </MenuItem>
                            <MenuItem value="pm">
                              <em>Pm</em>
                            </MenuItem>
                          </Select>
                        </FormControl>
                      </Col>
                    </Row>
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button
                      onClick={submitForm}
                      type="button"
                      round
                      color="success"
                      size="lg"
                    >
                      Login
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
