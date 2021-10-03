/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
const axios = require("axios").default;
const ls = require('local-storage')

let address = "http://localhost:3010/api";
let id = ls.get('id')
let user = ls.get('user')
let token = ls.get('token')

let loginPmm = async (email, password) => {
  let user = await axios
    .post(`${address}/loginPmm`, {
      email: email,
      password: password,
    })
    .then((data) => {
      return data.data;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });

  return user;
};

let verifySessionToken = async () => {
  let response = await axios
    .post(
      `${address}/verifySessionToken`,
      {
        token: token,
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

let getAllOrders = async () => {
  let response = await axios
    .get(
      `${address}/getAllOrders/${id}`,
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

let getOrdersByStatus = async (OrderStatusid) => {
  let response = await axios
    .get(
      `${address}/getOrdersByStatus/${id}/${OrderStatusid}`,
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
  loginPmm, 
  verifySessionToken,
  getAllOrders,
  getOrdersByStatus
};
