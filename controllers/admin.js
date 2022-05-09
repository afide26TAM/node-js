const Product = require('../models/product')
const path = require('path');

//Get all products
exports.getProducts = (req, res, next) => {
  // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
  Product.fetchAll(products=>{
    res.render('admin/products',{
      products:products, pageTitle:"Admin Products", 
      path:"/products"
    });
  });
}

//Get the add product page
exports.getAddProduct = (req, res, next) => {
  // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
  res.render("admin/add-product", {
    pageTitle:"Add Products", 
    path:"/admin/add-product"
   })
}

//POST new product
exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title)
  product.save();
  res.redirect('/');
}