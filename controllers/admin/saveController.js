const mongojs=require('mongojs');
const db=mongojs("PROJECT",["users"]);

const saveController=(req,res)=>{
   let first_name=req.body.first_name;
   let last_name=req.body.last_name;
   let email=req.body.email;
   let password=req.body.password;
   let role=req.body.role;
   db.users.insert({first_name:first_name,last_name:last_name,email:email,password:password,role:role},(error,docs)=>{
      if(error){

      }else{
          res.redirect("/admin");
      }
   });
}

module.exports=saveController;
