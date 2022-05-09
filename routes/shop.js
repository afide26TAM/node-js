const path = require('path');

const express = require('express');

const shopController = require("../controllers/shop")

const router = express.Router();

//Home Page
router.get('/',shopController.getIndex);

//User Products
router.get('/products-list',shopController.getProducts);

// /cart => GET
router.get('/cart', shopController.getCart);

// /checkout => GET
router.get('/checkout', shopController.getCheckout);

module.exports = router;
