const express = require("express");
const {
  getProducts,
  setProduct,
  //   getPuppy,
} = require("../controllers/productController");
const router = express.Router();

router.route("/").get(getProducts).post(setProduct);
// router.route("/puppy").get(getPuppy);

module.exports = router;
