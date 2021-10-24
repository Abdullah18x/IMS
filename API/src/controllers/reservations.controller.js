/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */

const db = require("../models");
const Reservation = db.Reservation;
const Op = db.Sequelize.Op;

exports.addReservation = async (req, res) => {
  try {
    let data = req.body;
    let reservation = await Reservation.create(data);
    res.send(reservation);
  } catch (error) {
    console.log("Something went wrong adding reservations");
    res.status(400).send("Something went wrong adding reservations");
  }
};

exports.getAllReservations = async (req, res) => {
  try {
    let body = req.body;
    let reservation = await Reservation.findAll({
        logging:console.log, 
        where: body,
        include: [
            {
                model: db.Pm,
                as: 'Pm',
                required:true,
                attributes: ['id','name']
            },
            {
                model: db.Pmm,
                as: 'Pmm',
                required:true,
                attributes: ['id','name']
            },
            {
                model: db.Product,
                as: 'Product',
                required:true,
                attributes: ['id','picture']
            },
        ]
    });
    res.send(reservation);
  } catch (error) {
      console.log(error)
    console.log("Something went wrong fetching reservations");
    res.status(400).send("Something went wrong fetching reservations");
  }
};
