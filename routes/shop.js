const path = require('path');

const express = require('express');

const shopController = require("../controllers/shop");
const { route } = require('express/lib/application');

const router = express.Router();

//Home Page
router.get('/',shopController.getIndex);

//User Products
router.get('/products-list',shopController.getProducts);

// /cart => GET
router.get('/cart', shopController.getCart);

// /checkout => GET
router.get('/checkout', shopController.getCheckout);

// /orders => GET
router.get("/orders", shopController.getOrders)

module.exports = router;
