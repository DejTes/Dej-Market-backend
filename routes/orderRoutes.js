const express = require('express')
const router = express.Router()
const protect = require('../middleware/authMiddleware')
const {
  createOrders
} = require('../controllers/orderController')

router.route('/').post(protect, createOrders)

module.exports = router