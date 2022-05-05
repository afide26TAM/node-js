const Product = require('../models/product')
const path = require('path');

exports.getAddProduct = (req, res, next) => {
  // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
  res.render("add-product", {
    pageTitle:"Add Products", 
    path:"/admin/add-product"
   })
}

exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title)
  product.save();
  res.redirect('/');
}

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products=>{
    res.render('shop',{
      products:products, pageTitle:"Our Shop", 
      path:"/"
    });
  });
}