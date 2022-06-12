const asyncHandler = require("express-async-handler");

const Product = require("../models/productModel.js");
const quickSort = require("../quickSort.js");

// @desc   Get Products
// @route  GET  /api/products
//@access Private
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find();
  if (products.length === 0) {
    return res.status(404).json({
      success: false,
      message: "No products found",
    });
  }
  const sortedProducts = quickSort(products);
  // console.log(products);
  console.log(sortedProducts);
  res.status(200).json(sortedProducts);
});

//getspecials
// const getPuppy = asyncHandler(async (req, res) => {
//   const products = await Product.find({ brand: "Eukanuba" });
//   const sortedProducts = quickSort(products);
//   console.log(products);
//   console.log(sortedProducts);
//   res.status(200).json(sortedProducts);
// });

// @desc   Set Products
// @route  POST  /api/products
// @access Private
// const setProduct = asyncHandler(async (req, res) => {
//   if (!req.body.name || !req.body.description || !req.body.quantity) {
//     return res.status(400).json({
//       success: false,
//       error: "Please enter all fields",
//     });
//   }

//   const product = await Product.create({
//     name: req.body.name,
//     description: req.body.description,
//     quantity: req.body.quantity,
//   });
//   res.status(200).json(product);
// });

const setProduct = asyncHandler(async (req, res) => {
  if (
    !req.body.title ||
    !req.body.brand ||
    !req.body.img ||
    !req.body.foodtype ||
    !req.body.price
  ) {
    return res.status(400).json({
      success: false,
      error: "Please enter all fields",
    });
  }

  const product = await Product.create({
    title: req.body.title,
    lifestage: req.body.lifestage,
    breed: req.body.breed,
    brand: req.body.brand,
    img: req.body.img,
    foodtype: req.body.foodtype,
    price: req.body.price,
    oldprice: req.body.oldprice,
  });
  res.status(200).json(product);
});

module.exports = {
  getProducts,
  setProduct,
  // getPuppy,
};
