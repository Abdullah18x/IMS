/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import Dashboard from "@material-ui/icons/Dashboard";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import DashboardPage from "views/Dashboard/Dashboard.js";
import orderRoutes from "ordersRoutesPm";
import productsRoutes from "productsRoutesPm";
import reservationsRoutes from "reservationsRoutesPm";
import { EventNote, Lock, Mail, SpeakerNotes } from "@material-ui/icons";
import ChangePass from "views/ChangePassword/ChangePassword";
import Support from "views/Support/Support";

const dashboardRoutes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/pm",
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
  {
    name: "Reservations",
    icon: SpeakerNotes,
    dropDown: true,
    routes: reservationsRoutes,
  },
  {
    path: "/changePass",
    name: "Change Password",
    icon: Lock,
    component: ChangePass,
    layout: "/pm",
  },
  {
    path: "/support",
    name: "Support",
    icon: Mail,
    component: Support,
    layout: "/pm",
  },
];

export default dashboardRoutes;
