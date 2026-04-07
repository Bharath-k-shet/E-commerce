// const express = require('express')

// const { handleImageUpload, addProducts, editProduct, deleteProduct, fetchAlltheproducts } = require('../../controllers/Admin/products-controller');

// const { upload } = require('../../helpers/cloudinary')

// const router = express.Router();

// router.post('/upload-image', upload.single('my_file'), handleImageUpload);
// router.post('/add', addProducts);
// router.put('/edit/:id', editProduct);
// router.put('/delete/:id', deleteProduct);
// router.get('/get', fetchAlltheproducts);

// module.exports = router

const express = require('express')

const { handleImageUpload, addProducts, editProduct, deleteProduct, fetchAlltheproducts } = require('../../controllers/Admin/products-controller');

const { upload } = require('../../helpers/cloudinary')

const router = express.Router();

// ✅ upload image
router.post('/upload-image', upload.single('my_file'), handleImageUpload);

// ✅ add product
router.post('/add', addProducts);

// ✅ edit product
router.put('/edit/:id', editProduct);

// ✅ delete product (FIXED)
router.delete('/delete/:id', deleteProduct);

// ✅ get all products
router.get('/get', fetchAlltheproducts);

module.exports = router