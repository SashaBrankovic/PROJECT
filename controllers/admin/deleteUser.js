const mongojs=require('mongojs');
const db=mongojs("PROJECT",["users"]);

const deleteUser=(req,res)=>{
   let userId=req.params.userId;
   db.users.remove({_id:mongojs.ObjectID(userId)},(error,docs)=>{
    res.send("OK");
   });   
}

module.exports=deleteUser;

