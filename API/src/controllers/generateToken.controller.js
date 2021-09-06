/* eslint-disable prettier/prettier */
/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */

const jwt = require("jsonwebtoken");
const db = require("../models");

exports.generateToken = async (userId, email) => {
  let token = jwt.sign({ email: email }, "amzdsk");
  await db.pmmTokens.destroy({ where: { PmmId: userId } });
  let userToken = {
    PmmId: userId,
    token: token,
  };
  let genToken = await db.pmmTokens
    .create(userToken)
    .then((data) => {
      return data.token;
    })
    .catch((error) => {
      return error;
    });

  return genToken;
};
