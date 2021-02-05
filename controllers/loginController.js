const mongojs=require('mongojs');
const db=mongojs("PROJECT",["users"]);

const loginController=(req,res)=>{
   let email=req.body.email;
   let password=req.body.pass;
   db.users.find({email:email,password:password},(error,data)=>{
        if(error){
            console.log('Greska');
            res.redirect("/")
        }else{
            if(data.length===1){
                let user=data[0];
                req.session.user=user;
                if(user.role=="admin"){
                    res.redirect("/admin")
                }else if(user.role=="operater"){
                    res.redirect("/operater")
                }else if(user.role=="savetnik"){
                    res.redirect("/savetnik")
                }else{
                    res.redirect("/")
                }
            }else{
                console.log('Greska: Takav korisnik ne postoji u bazi');
                res.redirect("/");
            }
        }
    }
)}

module.exports=loginController;