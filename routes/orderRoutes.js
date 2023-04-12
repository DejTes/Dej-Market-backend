const express = require('express')
const router = express.Router()
const {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  getMyOrders,
  getOrders
} = require('../controllers/orderController')
// const protect = require('../middleware/authMiddleware')
// const admin = require('../middleware/authMiddleware')
const { protect, admin } = require('../middleware/authMiddleware');

router.route('/').post(protect, addOrderItems).get(protect, admin, getOrders)
router.route('/myorders').get(protect, getMyOrders)
router.route('/:id').get(protect, getOrderById)
router.route('/:id/pay').put(protect, updateOrderToPaid)

module.exports = router

// const express = require('express');
// const router = express.Router();
// const { protect, admin } = require('../middleware/authMiddleware');
// const {
//   addOrderItems,
//   getOrderById,
//   updateOrderToPaid,
//   getMyOrders,
// } = require('../controllers/orderController');

// router.route('/').post(protect, addOrderItems);
// router.route('/myorders').get(protect, admin, getMyOrders); // Restrict to admin users
// router.route('/:id').get(protect, getOrderById);
// router.route('/:id/pay').put(protect, updateOrderToPaid);

// module.exports = router;
