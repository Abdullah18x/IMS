import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";
// import Divider from "@material-ui/core/Divider";
// @material-ui/icons
import Menu from "@material-ui/icons/Menu";
// core components
import PmNavbarLinks from "./PmNavbarLinks";
// import RTLNavbarLinks from "./RTLNavbarLinks.js";
// import Button from "components/CustomButtons/Button.js";

//hooks
// import { useRouteName } from "hooks";

import styles from "assets/jss/material-dashboard-react/components/headerStyle.js";

const useStyles = makeStyles(styles);

export default function Header(props) {
  const classes = useStyles();
  // const routeName = useRouteName();
  const { color } = props;
  const appBarClasses = classNames({
    [" " + classes[color]]: color,
  });
  return (
    <AppBar className={classes.appBar + appBarClasses}>
      <Toolbar className={classes.container}>
        {/* <h3 style={{ marginLeft: "30px" }}>Management System</h3> */}
        <div className={classes.flex}>
          {/* Here we create navbar brand, based on route name */}
          {/* <Button color="transparent" href="#" className={classes.title}>
            {props.currentRoute}
          </Button> */}
          <span className={classes.title}>Dashboard</span>
        </div>
        <Hidden smDown implementation="css">
          <PmNavbarLinks />
        </Hidden>
        <Hidden mdUp implementation="css">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={props.handleDrawerToggle}
          >
            <Menu />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  currentRoute: PropTypes.string,
  color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger"]),
  rtlActive: PropTypes.bool,
  handleDrawerToggle: PropTypes.func,
  routes: PropTypes.arrayOf(PropTypes.object),
};
