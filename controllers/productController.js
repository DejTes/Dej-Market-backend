const asyncHandler = require("express-async-handler");
const mongoose = require("mongoose");
const Product = require("../models/Product");

const getAllProducts = asyncHandler(async (req, res) => {
  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: "i",
        },
      }
    : {};

  const products = await Product.find({ ...keyword });
  res.json(products);
});


// get product by id
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});


// DELETE PRODUCT
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    await Product.deleteOne({ _id: req.params.id });
    res.json({ message: "Product removed" });
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});




// CREATE PRODUCT
//POST REQUEST

const createProduct = asyncHandler(async (req, res) => {
  const {
    name,
    price,
    image,
    brand,
    category,
    countInStock,
    numOfReviews,
    description,
  } = req.body;

  const product = new Product({
    name: name || "Sample name",
    price: price || 0,
    user: req.user._id,
    image: image || "/images/sample.jpg",
    brand: brand || "apple",
    category: category || "2-in-1",
    countInStock: countInStock || 0,
    numOfReviews: numOfReviews || 0,
    description: description || "Sample description",
  });

  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
});




//   Update a product
//   PUT
const updateProduct = asyncHandler(async (req, res) => {
  const { name, price, description, image, brand, category, countInStock } =
    req.body;

  const product = await Product.findById(req.params.id);

  if (product) {
    product.name = name;
    product.price = price;
    product.description = description;
    product.image = image;
    product.brand = brand;
    product.category = category;
    product.countInStock = countInStock;

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

// Get top rated products products
// const getTopProducts = asyncHandler(async (req, res) => {
//   const products = await Product.find({}).sort({ rating: -1 }).limit(3)
//   res.json(products)
// })


// get new products
const getTopProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({ new: true }).select("-rating").limit(4);
  res.json(products);
});

module.exports = {
  getAllProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
  getTopProducts,
};
