/* eslint-disable no-unused-vars */
import Dashboard from "@material-ui/icons/Dashboard";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import DashboardPage from "views/Dashboard/Dashboard.js";
import orderRoutes from "ordersRoutes";
import productsRoutes from "productsRoutes";
import { EventNote } from "@material-ui/icons";

const dashboardRoutes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/Dashboard",
  },
  {
    name: "Orders",
    icon: ShoppingCart,
    dropDown: true,
    routes: orderRoutes,
  },
  {
    name: "Products",
    icon: EventNote,
    dropDown: true,
    routes: productsRoutes,
  },
];

export default dashboardRoutes;
