const mongojs=require('mongojs');
const db=mongojs("PROJECT",["users","gradovi","proizvodi"]);

const adminController=(req,res)=>{
   let user=req.session.user;
   db.users.find({},(error,users)=>{
      db.gradovi.find({},(error,gradovi)=>{
         db.proizvodi.find({},(error,proizvodi)=>{
            let operateri=users.filter(user=>user.role=="operater");
            let savetnici=users.filter(user=>user.role=="savetnik");
            res.render("admin/adminDashboard",{
               name:user.first_name,
               role:user.role,
               gradovi:gradovi,
               proizvodi:proizvodi,
               operateri:operateri,
               savetnici:savetnici
            })
         })
      })
   })
}
module.exports=adminController;
