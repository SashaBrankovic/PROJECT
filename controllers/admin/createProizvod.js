const mongojs=require('mongojs');
const db=mongojs("PROJECT",["users","gradovi","proizvodi"]);

const createProizvod=(req,res)=>{
   let productName=req.body.productName;
   let productPrice=req.body.productPrice;
   db.proizvodi.insert({product_name:productName,product_price:productPrice},(error,docs)=>{
      if(error){

      }else{
          res.redirect("/admin");
      }
   })
}

module.exports=createProizvod;