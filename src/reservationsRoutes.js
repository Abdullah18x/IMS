/* eslint-disable prettier/prettier */
import AddReservation from "views/Reservations/AddReservation/AddReservation";
import {AddCircle, Visibility } from "@material-ui/icons";
import ShowReservations from "views/Reservations/ShowReservations/ShowReservations";

const reservationsRoutes = [
  {
    path: "/addReservation",
    name: "Add Reservation",
    icon: AddCircle,
    component: AddReservation,
    layout: "/pmm",
  },
  {
    path: "/showReservations",
    name: "View",
    icon: Visibility,
    component: ShowReservations,
    layout: "/pmm",
  },
  
];

export default reservationsRoutes;
