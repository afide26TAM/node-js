const Product = require('../models/product')
const path = require('path');

//Get all products
exports.getProducts = (req, res, next) => {
  Product.fetchAll(products=>{
    res.render('admin/products',{
      products:products, pageTitle:"Admin Products", 
      path:"/products"
    });
  });
}

//Get the add product page
exports.getAddProduct = (req, res, next) => {
  res.render("admin/add-product", {
    pageTitle:"Add Products", 
    path:"/admin/add-product"
   })
}

//POST new product
exports.postAddProduct = (req, res, next) => {
  // const {title, imageUrl, description, price} = req.body;
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(title, imageUrl,description, price)
  product.save();
  res.redirect('/');
}