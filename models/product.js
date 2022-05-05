const products = []
module.exports = class Product{

  constructor(t){
    this.title = t;
  }

  // Create custom function for each instance of the Class
  save(){
    products.push(this)
  }

  //Add static to the custom function to call the function of the Class and not on the instance of the Class

  static fetchAll(){
    return products;
  }
}