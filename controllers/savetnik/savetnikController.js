const mongojs=require('mongojs');
const db=mongojs("PROJECT",["users"]);

const savetnikController=(req,res)=>{
   let user=req.session.user
   db.termini.find({savetnik:user.first_name+" "+user.last_name,active:true},(error,termini)=>{
       res.render("savetnik/index",{
            termini:termini,
            user:user
       })
   })

}

module.exports=savetnikController