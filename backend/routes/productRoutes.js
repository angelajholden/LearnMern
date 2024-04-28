const express = require("express");
const router = express.Router();
const { getProducts, setProduct, updateProduct, deleteProduct, getProductByEndPoint } = require("../controllers/productController");

router.route("/").get(getProducts).post(setProduct);
router.route("/:id").put(updateProduct).delete(deleteProduct);

// @desc: Get a single product by endPoint
// @route: GET /api/products/:endPoint
// @access: Public
router.get("/:endPoint", getProductByEndPoint);

module.exports = router;
