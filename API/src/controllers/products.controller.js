/* eslint-disable prettier/prettier */
/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */

const db = require("../models");
const Product = db.Product;
const ProductCategory = db.ProductCategory;
const Op = db.Sequelize.Op;

exports.addProduct = async (req, res) => {
  try {
    let data = req.body;
    let product = await Product.create(data);
    res.send(product);
  } catch (error) {
    console.log("Something went wrong adding a product");
    res.status(400).send("Something went wrong adding a product");
  }
};

exports.updateProductImage = async (req, res) => {
  try {
    let id = req.body.id;
    let picture = req.file.filename;
    let uploadFor = req.body.uploadFor;
    let uploadThis = {};
    if (uploadFor === "picture") {
      uploadThis = {
        picture: picture,
      };
    } else if (uploadFor === "amazonPicture") {
      uploadThis = {
        amazonPicture: picture,
      };
    } else {
      res.status(400).send({ message: "Incorrect upload" });
      return;
    }
    await Product.update(uploadThis, { where: { id: id } });
    res.send("Added Product Image");
  } catch (error) {
    console.log("Something went wrong adding a product image");
    res.status(400).send("Something went wrong adding a product image");
  }
};

exports.getAllProducts = async (req, res) => {
  const body = req.body;
  try {
    let data = await Product.findAll({ where: body }).then((data) => {
      return data;
    });
    res.send(data);
  } catch (error) {
    console.log("Something went wrong fetching Products");
    res.status(400).send("Something went wrong fetching Products");
  }
};

exports.getProductCategories = async (req, res) => {
  try {
    let data = await ProductCategory.findAll().then((data) => {
      return data;
    });
    res.send(data);
  } catch (error) {
    console.log("Something went wrong fetching categories");
    res.status(400).send("Something went wrong fetching categories");
  }
};
