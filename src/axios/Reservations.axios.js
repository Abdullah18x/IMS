/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
const axios = require("axios").default;
const ls = require("local-storage");

let address = "http://localhost:3010/api";
let id = ls.get("id");
let user = ls.get("user");
let token = ls.get("token");

let getAllReservations = async (category) => {
  let response = await axios
    .post(
      `${address}/getAllReservations`,
      {
        PmmId: id,
      },
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    )
    .then((data) => {
      return data.data;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });

  return response;
};

export { 
    getAllReservations 
};
