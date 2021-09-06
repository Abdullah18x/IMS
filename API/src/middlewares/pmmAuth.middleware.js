/* eslint-disable prettier/prettier */
/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
const db = require("../models");
const jwt = require("jsonwebtoken");
const Pmm = db.pmm;

exports.authPmm = async (req, res, next) => {
  if (
    req.header("Authorization") === undefined ||
    req.header("Authorization") === null
  ) {
    res.status(401).send("Unauthorized");
    return;
  }
  const token = req.header("Authorization").replace("Bearer ", "");
  const decoded = jwt.verify(token, "amzdsk");
  var user = await Pmm.findOne({ where: { email: decoded.email } })
    .then((data) => {
      if (data === null || data === undefined) {
        res.status(401).send("Unauthorized");
        return;
      } else {
        req.user = data;
        return next();
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
