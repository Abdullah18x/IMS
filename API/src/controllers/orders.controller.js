/* eslint-disable prettier/prettier */
/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */

const db = require("../models");
const Order = db.Order;
const Op = db.Sequelize.Op;

exports.getAllOrders = async (req,res) => {
    try {
        let id = req.params.id
        let orderList = await Order.findAll({
            where:{PmmId:id},
            include: [
                {
                    model: db.OrderStatus,
                    as: 'OrderStatus',
                    required:true,
                    attributes: ['status']
                },
                {
                    model: db.Product,
                    as: 'Product',
                    required:true,
                    attributes: ['picture']
                },
                {
                    model: db.Pm,
                    as: 'Pm',
                    required:true,
                    attributes: ['name']
                },

            ],
            attributes: ['id','PmmId','orderNumber','ProductId','customerEmail','market','createdAt','OrderstatusId']
            
        })
        .then((data) => {
            return data
        })
        .catch((err) => {
            console.log(err)
            res.status(400).send('Error Occurred')
        })
        res.send(orderList)
    } catch (error) {
        res.status(400).send('Error Occurred')
    }
}

exports.getOrdersByStatus = async (req,res) => {
    try {
        let id = req.params.id
        let OrderstatusId = req.params.OrderStatusid
        let orderList = await Order.findAll({
            where:{ PmmId:id, OrderstatusId:OrderstatusId },
            include: [
                {
                    model: db.OrderStatus,
                    as: 'OrderStatus',
                    required:true,
                    attributes: ['status']
                },
                {
                    model: db.Product,
                    as: 'Product',
                    required:true,
                    attributes: ['picture']
                },
                {
                    model: db.Pm,
                    as: 'Pm',
                    required:true,
                    attributes: ['name']
                },

            ],
            attributes: ['id','PmmId','orderNumber','ProductId','customerEmail','market','createdAt','OrderstatusId']
            
        })
        .then((data) => {
            return data
        })
        .catch((err) => {
            console.log(err)
            res.status(400).send('Error Occurred')
        })
        res.send(orderList)
    } catch (error) {
        res.status(400).send('Error Occurred')
    }
}


