const mongojs=require('mongojs');
const db=mongojs("PROJECT",["users","gradovi"]);

const createGrad=(req,res)=>{
   let placeName=req.body.placeName;
   let zipCode=req.body.zipCode;

   db.gradovi.insert({place_name:placeName,zip_code:zipCode},(error,docs)=>{
      if(error){

      }else{
          res.redirect("/admin");
      }
   })
}

module.exports=createGrad;