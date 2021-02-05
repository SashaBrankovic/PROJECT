const mongojs=require('mongojs');
const db=mongojs("PROJECT",["proizvodi"]);

const deleteProduct=(req,res)=>{
   let productId=req.params.id;
   db.proizvodi.remove({_id:mongojs.ObjectID(productId)},(error,data)=>{
    res.send("OK");
   });
}

module.exports=deleteProduct;