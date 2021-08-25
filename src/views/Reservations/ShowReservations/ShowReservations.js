/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ShowReservations from "../Default/Default";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);
const useCustomStyles = makeStyles({
  a1: {
    marginRight: 0,
    marginLeft: 0,
    width: "100% !important",
  },
});
export default function ShowReservationsF() {
  const classes = useStyles();
  const classes2 = useCustomStyles();
  let heads = ["#", "User", "Product ID", "Creation Time", "Image", "Action"];
  let data = [
    {
      no: "1",
      User: "Abdullah",
      pId: "123",
      createDate: "23 june",
      pic:"apple-icon.png"
    },
    {
      no: "1",
      User: "Abdullah",
      pId: "123",
      createDate: "23 june",
      pic:"apple-icon.png"
    },
    {
      no: "1",
      User: "Abdullah",
      pId: "123",
      createDate: "23 june",
      pic:"apple-icon.png"
    },
  ];
  return (
    <ShowReservations page="Reserved Orders" tHeads={heads} tData={data} />
  );
}
