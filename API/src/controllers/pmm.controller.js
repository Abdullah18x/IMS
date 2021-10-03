/* eslint-disable prettier/prettier */
/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
const db = require("../models");
const Pmm = db.Pmm;
const PmmToken = db.PmmTokens;
const Op = db.Sequelize.Op;
const token = require("./generateToken.controller");
var bcrypt = require("bcryptjs");

exports.loginPMM = async (req, res) => {
  let user = {
    email: req.body.email,
    password: req.body.password,
  };
  console.log(user);

  if (!user.email || !user.password) {
    res.status(400).send("Please fill out all fields");
    return;
  }

  try {
    let verifyEmail = await Pmm.findOne({
      where: { email: user.email },
    });
    if (verifyEmail) {
      let checkPass = bcrypt.compareSync(user.password, verifyEmail.password);
      console.log(checkPass);
      if (checkPass) {
        let getToken = await token.generateToken(verifyEmail.id, user.email);
        let response = {
          user: "Pmm",
          id: verifyEmail.id,
          token: getToken,
        };
        res.send(response);
      } else {
        res.send({ error: "Incorrect Password" });
      }
    } else {
      res.send({ error: "User with this email not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

exports.verifySessionToken = async (req, res) => {
  let token = req.body.token;
  await PmmToken.findOne({ where: { token: token } })
    .then((data) => {
      if (data != null || data != undefined) {
        res.send({ success: "Token Verified" });
      } else {
        res.send({ error: "Token Invalid" });
      }
    })
    .catch((error) => {
      res.status(400).send({ error: "Some error occurred" });
    });
};

exports.insertPmm = async (req, res) => {
  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(req.body.password, salt);

  let user = {
    username: req.body.username,
    email: req.body.email,
    name: req.body.name,
    facebookLink: req.body.facebookLink,
    whatsAppNumber: req.body.whatsAppNumber,
    password: hash,
  };

  Pmm.create(user)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
};

exports.getUser = async (req, res) => {
  try {
    res.send(req.user);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.updateUser = async (req, res) => {
  let id = req.user.id;

  await Pmm.update(req.body, { where: { id: id } })
    .then(() => {
      Pmm.findByPk(id)
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
  await Pmm.destroy({ where: { id: req.user.id } })
    .then(() => {
      res.send("Deleted User");
    })
    .catch((error) => {
      res.status(400).send(error);
    });
};
