/*eslint-disable*/
import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { NavLink, useLocation } from "react-router-dom";
import orderRoutes from "ordersRoutes";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Icon from "@material-ui/core/Icon";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Collapse from "@material-ui/core/Collapse";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";
// core components
import AdminNavbarLinks from "components/Navbars/AdminNavbarLinks.js";
import RTLNavbarLinks from "components/Navbars/RTLNavbarLinks.js";

import styles from "assets/jss/material-dashboard-react/components/sidebarStyle.js";

const useStyles = makeStyles(styles);

export default function Sidebar(props) {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  let location = useLocation();
  // verifies if routeName is the one active (in browser input)
  function activeRoute(routeName) {
    return location.pathname === routeName;
  }
  const handleClick = () => {
    setOpen(!open);
  };
  const { color, logo, image, logoText, routes } = props;
  var links = (
    <List className={classes.list}>
      {routes.map((prop, key) => {
        var activePro = " ";
        var listItemClasses;

        listItemClasses = classNames({
          [" " + classes[color]]: activeRoute(prop.layout + prop.path),
        });

        const whiteFontClasses = classNames({
          [" " + classes.whiteFont]: activeRoute(prop.layout + prop.path),
        });
        return prop.dropDown === true ? (
          <span>
            <ListItem
              button
              className={classes.itemLink + listItemClasses}
              onClick={handleClick}
            >
              {typeof prop.icon === "string" ? (
                <Icon
                  className={classNames(classes.itemIcon, whiteFontClasses, {
                    [classes.itemIconRTL]: props.rtlActive,
                  })}
                >
                  {prop.icon}
                </Icon>
              ) : (
                <prop.icon
                  className={classNames(classes.itemIcon, whiteFontClasses, {
                    [classes.itemIconRTL]: props.rtlActive,
                  })}
                />
              )}
              <ListItemText
                primary={props.rtlActive ? prop.rtlName : prop.name}
                className={classNames(classes.itemText, whiteFontClasses, {
                  [classes.itemTextRTL]: props.rtlActive,
                })}
                disableTypography={true}
                //style={{display:"inline-block"}}
              />
              {/* {open ? <span class="fas fa-chevron-up"></span> : <span class="fas fa-chevron-down"></span>} */}
            </ListItem>

            <Collapse in={open} timeout="auto" unmountOnExit>
              {orderRoutes.map((prop2, key2) => {
                var listItemClasses2;

                listItemClasses2 = classNames({
                  [" " + classes[color]]: activeRoute(
                    prop2.layout + prop2.path
                  ),
                });

                const whiteFontClasses = classNames({
                  [" " + classes.whiteFont]: activeRoute(
                    prop2.layout + prop2.path
                  ),
                });
                return (
                  <NavLink
                    to={prop2.layout + prop2.path}
                    className={activePro + classes.item}
                    activeClassName="active"
                    key={key2}
                  >
                    <ListItem
                      button
                      className={classes.itemLink + listItemClasses2}
                    >
                      {typeof prop2.icon === "string" ? (
                        <Icon
                          className={classNames(
                            classes.itemIcon,
                            whiteFontClasses,
                            {
                              [classes.itemIconRTL]: props.rtlActive,
                            }
                          )}
                        >
                          {prop2.icon}
                        </Icon>
                      ) : (
                        <prop2.icon
                          className={classNames(
                            classes.itemIcon,
                            whiteFontClasses,
                            {
                              [classes.itemIconRTL]: props.rtlActive,
                            }
                          )}
                        />
                      )}
                      <ListItemText
                        primary={props.rtlActive ? prop2.rtlName : prop2.name}
                        className={classNames(
                          classes.itemText,
                          whiteFontClasses,
                          {
                            [classes.itemTextRTL]: props.rtlActive,
                          }
                        )}
                        disableTypography={true}
                      />
                    </ListItem>
                  </NavLink>
                );
              })}
            </Collapse>
          </span>
        ) : (
          <NavLink
            to={prop.layout + prop.path}
            className={activePro + classes.item}
            activeClassName="active"
            key={key}
          >
            <ListItem button className={classes.itemLink + listItemClasses}>
              {typeof prop.icon === "string" ? (
                <Icon
                  className={classNames(classes.itemIcon, whiteFontClasses, {
                    [classes.itemIconRTL]: props.rtlActive,
                  })}
                >
                  {prop.icon}
                </Icon>
              ) : (
                <prop.icon
                  className={classNames(classes.itemIcon, whiteFontClasses, {
                    [classes.itemIconRTL]: props.rtlActive,
                  })}
                />
              )}
              <ListItemText
                primary={props.rtlActive ? prop.rtlName : prop.name}
                className={classNames(classes.itemText, whiteFontClasses, {
                  [classes.itemTextRTL]: props.rtlActive,
                })}
                disableTypography={true}
              />
            </ListItem>
          </NavLink>
        );
      })}
    </List>
  );
  var brand = (
    <div className={classes.logo}>
      <a
        href="https://www.creative-tim.com?ref=mdr-sidebar"
        className={classNames(classes.logoLink, {
          [classes.logoLinkRTL]: props.rtlActive,
        })}
        target="_blank"
      >
        <div className={classes.logoImage}>
          <img src={logo} alt="logo" className={classes.img} />
        </div>
        {logoText}
      </a>
    </div>
  );
  return (
    <div>
      <Hidden mdUp implementation="css">
        <Drawer
          variant="temporary"
          anchor={props.rtlActive ? "left" : "right"}
          open={props.open}
          classes={{
            paper: classNames(classes.drawerPaper, {
              [classes.drawerPaperRTL]: props.rtlActive,
            }),
          }}
          onClose={props.handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {brand}
          <div className={classes.sidebarWrapper}>
            {props.rtlActive ? <RTLNavbarLinks /> : <AdminNavbarLinks />}
            {links}
          </div>
          {image !== undefined ? (
            <div
              className={classes.background}
              style={{ backgroundImage: "url(" + image + ")" }}
            />
          ) : null}
        </Drawer>
      </Hidden>
      <Hidden smDown implementation="css">
        <Drawer
          anchor={props.rtlActive ? "right" : "left"}
          variant="permanent"
          open
          classes={{
            paper: classNames(classes.drawerPaper, {
              [classes.drawerPaperRTL]: props.rtlActive,
            }),
          }}
        >
          {brand}
          <div className={classes.sidebarWrapper}>{links}</div>
          {image !== undefined ? (
            <div
              className={classes.background}
              style={{ backgroundImage: "url(" + image + ")" }}
            />
          ) : null}
        </Drawer>
      </Hidden>
    </div>
  );
}

Sidebar.propTypes = {
  rtlActive: PropTypes.bool,
  handleDrawerToggle: PropTypes.func,
  bgColor: PropTypes.oneOf(["purple", "blue", "green", "orange", "red"]),
  logo: PropTypes.string,
  image: PropTypes.string,
  logoText: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object),
  open: PropTypes.bool,
};
