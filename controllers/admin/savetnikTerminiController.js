const mongojs=require('mongojs');
const db=mongojs("PROJECT",["termini","users"]);

const savetnikTerminiController=(req,res)=>{
   let name=req.params.id
   let user=req.session.user
   db.termini.find({savetnik:name},(error,termini)=>{
      res.render("admin/savetnikTermini",{
          termini:termini
      })
   })
}

module.exports=savetnikTerminiController