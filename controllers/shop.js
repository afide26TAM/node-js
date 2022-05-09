const Product = require('../models/product')
const path = require('path');

// User Products route
exports.getProducts = (req, res, next) => {
  Product.fetchAll(products=>{
    res.render('shop/products-list',{
      products:products, pageTitle:"Product Catalogue", 
      path:"/products-list"
    });
  });
}


// User Cart
exports.getCart = (req, res, next) => {
  res.render('shop/cart',{
    path:"/cart",
    pageTitle:"Your Shopping Cart"
  })
}

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout',{
    path:"/checkout",
    pageTitle:"Checkout Page"
  })
}

//Home Page
exports.getIndex = (req, res, next) => {
  Product.fetchAll(products=>{
    res.render('shop/index',{
      products:products, pageTitle:"Our Shop", 
      path:"/"
    });
  });
}