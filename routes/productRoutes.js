
const express = require('express');
const router = express.Router()
const { getAllProducts, getProductById } = require('../controllers/productController')


console.log(getAllProducts);
console.log(getProductById);

router.route('/').get(getAllProducts)
router.route('/:id').get(getProductById)

module.exports = router

