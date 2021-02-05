const express=require('express');
const router=express.Router();

router.use(checkAdmin);

router.get("/",require('../controllers/admin/adminController'));

router.get("/create",(req,res)=>{
   res.render("admin/adminCreateForm")
})
router.get("/create/grad",(req,res)=>{
   res.render("admin/createGrad")
})
router.get("/create/proizvod",(req,res)=>{
   res.render("admin/createProizvod")
})
router.post("/create/save",require('../controllers/admin/saveController'));
router.post("/create/grad/save",require('../controllers/admin/createGrad'));
router.post("/create/proizvod/save",require('../controllers/admin/createProizvod'));

router.get("/delete/user/:userId", require('../controllers/admin/deleteUser'));
router.get("/delete/product/:id",require('../controllers/admin/deleteProduct'));
router.get("/delete/place/:id",require('../controllers/admin/deletePlace'));

//savetnik

router.get("/savetnik/termini/:id",require('../controllers/admin/savetnikTerminiController'))

function checkAdmin(req,res,next){
   let user=req.session.user;
   if(user){
      if(user.role=="admin"){
         next();
      }else{
         res.redirect("/")
      }
   }else{
      res.redirect("/")
   }
}

module.exports=router;