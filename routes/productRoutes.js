const express = require('express');
const Product = require('../models/Product')
const router = express.Router()



// get all products
router.get('/', async (req, res) =>{
const products = await Product.find({})
    res.json(products)
  })
  

// get single products
  router.get('/:id', async (req, res) => {
    try {
    //   const productId = req.params.id;
      const product = await Product.findById(req.params.id);
  
      if (!product) {
        res.status(404).json({ message: 'Product not found' });
      } else {
        res.json(product);
      }
    } catch (error) {
      res.status(500).json({ message: 'An error occurred while processing the request' });
    }
  });

  module.exports = router