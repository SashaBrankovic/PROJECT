const mongojs=require('mongojs');
const db=mongojs("PROJECT",["gradovi"]);

const deletePlace=(req,res)=>{
   let id=req.params.id;
   db.gradovi.remove({_id:mongojs.ObjectID(id)},(error,data)=>{
      res.send("OK");
   })
}

module.exports=deletePlace;