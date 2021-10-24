/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
const axios = require("axios").default;
const ls = require('local-storage')

let address = "http://localhost:3010/api";
let id = ls.get('id')
let user = ls.get('user')
let token = ls.get('token')

let addProduct = async (formValues) => {
  formValues = {
    PmmId: id,
    ...formValues
  }
  let response = await axios
    .post(
      `${address}/addProduct`,formValues,
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

let updateProductImage = async (formValues) => {
  let response = await axios
    .post(
      `${address}/updateProductImage`,formValues,
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

let getAllProducts = async (category) => {
  let response = await axios
    .post(
      `${address}/getAllProducts`,{
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

let getProductsByStatus = async (status) => {
  let response = await axios
    .post(
      `${address}/getProductsByStatus`,{
        PmmId: id,
        status: status
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

let getProductsByCategory = async (category) => {
  let response = await axios
    .post(
      `${address}/getProductsByCategory`,{
        PmmId: id,
        ProductcategoryId: category
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

let getProductCategories = async () => {
    let response = await axios
      .get(
        `${address}/getProductCategories`,
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
    addProduct,
    updateProductImage,
    getAllProducts,
    getProductsByStatus,
    getProductsByCategory,
    getProductCategories
  };
  