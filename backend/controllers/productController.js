const asyncHandler = require("express-async-handler");

// @desc: Get all products from the database
// @route: GET /api/products
// @access: Public
const getProducts = asyncHandler(async (req, res) => {
	res.status(200).json({ message: "Get Products" });
});

// @desc: Set a product in the database
// @route: POST /api/products
// @access: Public
const setProduct = asyncHandler(async (req, res) => {
	if (!req.body.text) {
		res.status(400);
		throw new Error("Please provide a product");
	}
	res.status(200).json({ message: "Set Product" });
});

// @desc: Update a product in the database
// @route: PUT /api/products
// @access: Public
const updateProduct = asyncHandler(async (req, res) => {
	res.status(200).json({ message: `Update product ${req.params.id}` });
});

// @desc: Delete a product in the database
// @route: DELETE /api/products
// @access: Public
const deleteProduct = asyncHandler(async (req, res) => {
	res.status(200).json({ message: `Delete product ${req.params.id}` });
});

module.exports = { getProducts, setProduct, updateProduct, deleteProduct };
