/* eslint-disable prettier/prettier */
/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
const db = require("../models");
const Pmm = db.pmm;
const Op = db.Sequelize.Op;
const token = require("./generateToken.controller");

exports.test = (req, res) => {
  res.send(req.user);
};

exports.insertPmm = async (req, res) => {
  let user = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    age: req.body.age,
    email: req.body.email,
    password: req.body.password,
  };

  Pmm.create(user)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
};

exports.loginPMM = async (req, res) => {
  let user = {
    email: req.body.email,
    password: req.body.password,
  };

  if (!user.email || !user.password) {
    res.status(400).send("Please fill out all fields");
    return;
  }

  try {
    let verifyEmail = await Pmm.findOne({
      where: { email: user.email, password: user.password },
    });
    if (verifyEmail) {
      let getToken = await token.generateToken(verifyEmail.id, user.email);
      let response = {
        user: "PMM",
        id: verifyEmail.id,
        token: getToken,
      };
      res.send(response);
    } else {
      res.status(404).send("User not found");
    }
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getUser = async (req, res) => {
  let user = await Pmm.findByPk(req.body.id)
    .then((data) => {
      if (data != null) {
        res.send(data);
      } else {
        res.status(404).send("User not found");
      }
    })
    .catch((error) => {
      res.status(400).send(error);
    });
};

exports.updateUser = async (req, res) => {
  if (!req.body.id) {
    res.status(400).send("Please provide Id");
    return;
  }

  await Pmm.update(req.body, { where: { id: req.body.id } })
    .then(() => {
      Pmm.findByPk(req.body.id)
        .then((data) => {
          res.send(data);
        })
        .catch((error) => {
          res.status(400).send(error);
        });
    })
    .catch((error) => {
      res.status(400).send(error);
    });
};

exports.deleteUser = async (req, res) => {
  await Pmm.destroy({ where: { id: req.body.id } })
    .then(() => {
      res.send("Deleted User");
    })
    .catch((error) => {
      res.status(400).send(error);
    });
};

//backend nodejs engineer
//project strcturing
//module management
//documenting and routing using swagger API
//building express server from scracth according to requirements
//expressjs/sequalize/ skilld polished