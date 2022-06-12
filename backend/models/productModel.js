// import mongoose from "mongoose";
const mongoose = require("mongoose");

// const productSchema = mongoose.Schema({
//   name: {
//     type: String,
//   },
//   description: {
//     type: String,
//   },
//   quantity: {
//     type: Number,
//   },
// });

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    lifestage: { type: String },
    breed: { type: String },
    brand: { type: String, required: true },
    price: { type: Number, required: true },
    oldprice: { type: Number },
    foodtype: { type: String, required: true },
    img: { type: String, required: true },
    // categories: { type: Array },
  },
  { timestamps: true }
);
// const productSchema = new mongoose.Schema(
//   {
//     title: { type: String, required: true, unique: true },
//     desc: { type: String, required: true, },
//     img: { type: String, required: true },
//     categories: { type: Array },
//     size: { type: String },
//     color: { type: String },
//     price: { type: Number, required: true },

//   },
//   { timestamps: true }
// );

module.exports = mongoose.model("Product", productSchema);
