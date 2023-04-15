
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




router.get("/", getAllProducts);
router.post("/", protect, admin, createProduct);
//router.post("/", createProduct);
router.get("/top", getTopProducts);

router.get("/:id", getProductById);
router.delete("/:id", protect, admin, deleteProduct);
//router.delete("/:id", deleteProduct);

  


router.put("/:id", protect, admin, updateProduct);
//router.put("/:id", updateProduct);



module.exports = router
