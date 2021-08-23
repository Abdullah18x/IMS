/* eslint-disable prettier/prettier */

import ShoppingCart from "@material-ui/icons/ShoppingCart";

import AllOrdersPage from "views/Orders/AllOrders/AllOrders";
import OrderedPage from "views/Orders/Ordered/Ordered";

const orderRoutes = [
  {
    path: "/all",
    name: "All Orders",
    icon: ShoppingCart,
    component: AllOrdersPage,
    layout: "/Dashboard",
  },
  {
    path: "/ordered",
    name: "Ordered",
    icon: ShoppingCart,
    component: OrderedPage,
    layout: "/Dashboard",
  },
];

export default orderRoutes;
