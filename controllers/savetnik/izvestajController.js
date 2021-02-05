const mongojs=require('mongojs');
const db=mongojs("PROJECT",["termini"]);


const izvestajController=(req,res)=>{
   let id=req.params.id
   db.termini.update({_id:mongojs.ObjectID(id)},{$set:{active:false}},(error,data)=>{
      res.redirect("/savetnik")
   })
}

module.exports=izvestajController