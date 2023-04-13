
const express = require('express');
const router = express.Router()
const { protect, admin } = require('../middleware/authMiddleware')
const { 
    getAllProducts, 
    getProductById, 
    deleteProduct, 
    updateProduct,
    createProduct,
    getTopProducts
} = require('../controllers/productController')




// console.log(getAllProducts);
// console.log(getProductById);

// router.route('/').get(getAllProducts).post(protect, admin,createProduct)

// router.route('/:id').get(getProductById).delete(protect, admin, deleteProduct)
// //router.route('/:id').put(protect, admin, updateProduct)
// router.route('/:id').put(updateProduct)

router.get("/", getAllProducts);
// router.post("/", protect, admin, createProduct);
router.post("/", createProduct);
router.get("/top", getTopProducts);

router.get("/:id", getProductById);
// router.delete("/:id", protect, admin, deleteProduct);
router.delete("/:id", deleteProduct);
//router.put("/:id", protect, admin, updateProduct);
router.put("/:id", updateProduct);



module.exports = router

