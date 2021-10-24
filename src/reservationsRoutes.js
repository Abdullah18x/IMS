/* eslint-disable prettier/prettier */
import { Visibility } from "@material-ui/icons";
import ShowReservations from "views/Reservations/ShowReservations/ShowReservations";

const reservationsRoutes = [
  {
    path: "/showReservations",
    name: "View",
    icon: Visibility,
    component: ShowReservations,
    layout: "/pmm",
  },
  
];

export default reservationsRoutes;
