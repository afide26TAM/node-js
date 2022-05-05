const fs = require('fs');
const path = require('path');
const pathDir = require('../util/path');
const p = path.join(pathDir, 'data','products.json');//File name and path


module.exports = class Product{
  
  constructor(t){
    this.title = t;
  }
  
  // Create custom function for each instance of the Class
  save(){
    fs.readFile(p, (err,fileContent)=>{
      let products=[];
      if(!err){
        products = JSON.parse(fileContent);
      }
      products.push(this);
      fs.writeFile(p, JSON.stringify(products),(err)=>{
        console.log(err);
      })
    });
  }

  //Add static to the custom function to call the function of the Class and not on the instance of the Class
  static fetchAll(cb){
    fs.readFile(p, (err,fileContent)=>{
      if(err){
        cb([]);
      }
      cb(JSON.parse(fileContent));
    });
  }
}

