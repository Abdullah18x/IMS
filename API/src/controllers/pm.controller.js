/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
const db = require("../models");
const Pmm = db.pmm;
const Op = db.Sequelize.Op;

exports.test2 = (req,res) => {
    res.send("Test2 complete")
}