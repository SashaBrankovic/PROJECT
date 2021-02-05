const mongojs=require('mongojs');
const db=mongojs("PROJECT",["termini"])

const singleTerminController=(req,res)=>{
   let user=req.session.user;
   let id=req.params.id;
   db.termini.find({_id:mongojs.ObjectID(id)},(error,termin)=>{
      res.render("savetnik/termin",{
        user:user,
        termin:termin[0]
      })
   })
}

module.exports=singleTerminController