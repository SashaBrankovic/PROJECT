const mongojs=require('mongojs');
const db=mongojs("PROJECT",["users","gradovi","proizvodi"]);

const operaterController=(req,res)=>{
   let user=req.session.user;
    db.gradovi.find({},(error,gradovi)=>{
       db.users.find({role:"savetnik"},(error,savetnici)=>{
          db.termini.find({operater:user.first_name+" "+user.last_name},(error,termini)=>{
            res.render("operater/index",{
                user:user.first_name+" "+user.last_name,
                savetnici:savetnici,
                gradovi:gradovi,                                                       
                brojTermina:termini.length
            })
          })
       })
    })


}

module.exports=operaterController;