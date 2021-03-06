/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";

import { makeStyles } from "@material-ui/core/styles";

import Navbar from "components/Navbars/Navbar.js";
import Footer from "components/Footer/Footer.js";
import Sidebar from "components/Sidebar/Sidebar.js";

import Profile from "../../Profile/Profile";
import OrderSingle from "../../Orders/OrderSingle/OrderSingle";
import ProductSingle from "../../Products/ProductSingle/ProductSingle";

import routes from "routes.js";
import orderRoutes from "ordersRoutes";
import productsRoutes from "productsRoutes";
import reservationsRoutes from "reservationsRoutes";

import styles from "assets/jss/material-dashboard-react/layouts/adminStyle.js";

import bgImage from "assets/img/sidebar-2.jpeg";
import logo from "assets/img/reactlogo.png";
import { useRouteName } from "hooks";
let axios = require("../../../axios/Pmm.axios");
let ls = require("local-storage");

let ps;

const allRoutes = routes
  .concat(orderRoutes)
  .concat(productsRoutes)
  .concat(reservationsRoutes);

const switchRoutes = (
  <Switch>
    {allRoutes.map((prop, key) => {
      if (prop.layout === "/pmm") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      }
      return null;
    })}
    <Route path="/pmm/profile" component={Profile} />
    <Route path="/pmm/orderPage" component={OrderSingle} />
    <Route path="/pmm/productPage" component={ProductSingle} />

    {/* <Redirect from="/admin" to="/admin/dashboard" /> */}
  </Switch>
);

const useStyles = makeStyles(styles);

export default function Admin({ ...rest }) {
  // styles
  const classes = useStyles();
  // ref to help us initialize PerfectScrollbar on windows devices
  const mainPanel = React.createRef();
  // states and functions
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [authorized, setAuthorized] = React.useState(false);

  const routeName = useRouteName();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const getRoute = () => {
    return window.location.pathname !== "/admin/maps";
  };
  const resizeFunction = () => {
    if (window.innerWidth >= 960) {
      setMobileOpen(false);
    }
  };

  const authorizeUser = async () => {
    let id = ls.get("id");
    let user = ls.get("user");
    let token = ls.get("token");

    if (id == null || user == null || token == null || user != "Pmm") {
      setAuthorized(false)
      window.location.href = "http://localhost:3005/";
    } else {
      let verifySessionToken = await axios.verifySessionToken();
      if (verifySessionToken.success) {
        setAuthorized(true)
        console.log(verifySessionToken.success);
      } else {
        setAuthorized(false)
        window.location.href = "http://localhost:3005/";
      }
    }
  };
  // initialize and destroy the PerfectScrollbar plugin
  React.useEffect(() => {
    if(authorized){
      if (navigator.platform.indexOf("Win") > -1) {
        ps = new PerfectScrollbar(mainPanel.current, {
          suppressScrollX: true,
          suppressScrollY: false,
        });
        document.body.style.overflow = "hidden";
      }
      window.addEventListener("resize", resizeFunction);
      // Specify how to clean up after this effect:
      return function cleanup() {
        if (navigator.platform.indexOf("Win") > -1) {
          ps.destroy();
        }
        window.removeEventListener("resize", resizeFunction);
      };
    }
    
  }, [mainPanel]);

  //authorization
  React.useEffect(() => {
    authorizeUser();
  });
  return (
    authorized ? (
      <div className={classes.wrapper}>
      <Sidebar
        routes={routes}
        logoText={"PMS"}
        logo={logo}
        image={bgImage}
        handleDrawerToggle={handleDrawerToggle}
        open={mobileOpen}
        color="green"
        {...rest}
      />

      <div className={classes.mainPanel} ref={mainPanel}>
        <Navbar
          currentRoute={routeName}
          routes={allRoutes}
          handleDrawerToggle={handleDrawerToggle}
          {...rest}
        />
        {/* On the /maps route we want the map to be on full screen - this is not possible if the content and conatiner classes are present because they have some paddings which would make the map smaller */}
        {getRoute() ? (
          <div className={classes.content}>
            <div className={classes.container}>{switchRoutes}</div>
          </div>
        ) : (
          <div className={classes.map}>{switchRoutes}</div>
        )}
      </div>
    </div>
    ): null
    
  );
}
