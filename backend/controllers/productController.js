const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");

// @desc: Get all products from the database
// @route: GET /api/products
// @access: Public
const getProducts = asyncHandler(async (req, res) => {
	const products = await Product.find().sort({ name: 1 });
	res.status(200).json(products);
});

// @desc: Get a single product from the database by endPoint
// @route: GET /api/products/endPoint/:endPoint
// @access: Public
const getProductByEndPoint = asyncHandler(async (req, res) => {
	const product = await Product.findOne({ endPoint: req.params.endPoint });

	if (!product) {
		res.status(404);
		throw new Error("Product not found");
	}

	res.status(200).json(product);
});

// @desc: Set a product in the database
// @route: POST /api/products
// @access: Public
const setProduct = asyncHandler(async (req, res) => {
	if (!req.body.name) {
		res.status(400);
		throw new Error("Please provide a product");
	}
	const product = await Product.create({ name: req.body.name });
	res.status(200).json(product);
});

// @desc: Update a product in the database
// @route: PUT /api/products
// @access: Public
const updateProduct = asyncHandler(async (req, res) => {
	const product = await Product.findById(req.params.id);
	if (!product) {
		res.status(404);
		throw new Error("Product not found");
	}
	const updatedProdcut = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
	res.status(200).json(updatedProdcut);
});

// @desc: Delete a product in the database
// @route: DELETE /api/products
// @access: Public
const deleteProduct = asyncHandler(async (req, res) => {
	const product = await Product.findById(req.params.id);
	if (!product) {
		res.status(404);
		throw new Error("Product not found");
	}
	await Product.deleteOne({ _id: req.params.id });
	res.status(200).json({ id: req.params.id });
});

module.exports = { getProducts, setProduct, updateProduct, deleteProduct, getProductByEndPoint };
