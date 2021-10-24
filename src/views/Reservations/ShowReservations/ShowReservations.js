/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from "react";
import ShowReservations from "../Default/Default";
import {getAllReservations} from "../../../axios/Reservations.axios"

export default function ShowReservationsF() {
  let heads = ["#", "User", "Product ID", "Creation Time", "Image", "Create Order", "Action"];
  var [data,setData] = React.useState([])
  React.useEffect(async () => {
    await getAllReservations()
    .then((reservations) => {
      console.log(reservations)
      setData([...reservations])
    })
    
  },[])
  return (
    <ShowReservations page="Reserved Orders" tHeads={heads} tData={data} />
  );
}
