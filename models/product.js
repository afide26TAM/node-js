const fs = require('fs');
const path = require('path');

const pathDir = require('../util/path');
const p = path.join(pathDir, 'data','products.json');//File name and path

const getProductsFromFile = (cb)=>{
  fs.readFile(p, (err,fileContent)=>{
    if(err){
      cb([]);
    }else{
      cb(JSON.parse(fileContent));
    }
  });
}


module.exports = class Product{
  
  constructor(t){
    this.title = t;
  }
  
  // Create custom function for each instance of the Class
  save(){
    getProductsFromFile(products=>{
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), err=>{
        console.log(err)
      });
    });
  }

  //Add static to the custom function to call the function of the Class and not on the instance of the Class
  static fetchAll(cb){
    getProductsFromFile(cb);
  }
}

