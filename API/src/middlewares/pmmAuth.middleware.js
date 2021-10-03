/* eslint-disable prettier/prettier */
/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
const {Pmm} = require("../models");
const jwt = require("jsonwebtoken");

exports.authPmm = async (req, res, next) => {
  try {
    if (
      req.header("Authorization") === undefined ||
      req.header("Authorization") === null
    ) {
      res.status(401).send("Unauthorized");
      return;
    }
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, "amzdsk");
    if (decoded) {
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
      .catch((err) => {
        console.log(err);
        res.status(400).send({ error: "Token Invalid" })
      });
    }
  } catch (error) {
    res.status(400).send({ error: "Token Invalid" })
  }
  
};
