const express=require('express');
const app=express();
const routes=require('./routes');
const session=require('express-session');
const HALF_HOUR = 1000*60*30;
const {
   PORT=2000,
   NODE_ENV="development",
   SESS_NAME="sid",
   SESS_SECRET="project",
   SESS_LIFETIME=HALF_HOUR
}=process.env;
const IN_PRODUCTION=NODE_ENV=="production";

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(express.static(__dirname+"/public"));
app.set("view engine","ejs");
app.use(session({
   name:SESS_NAME,
   resave:false,
   saveUninitialized:false,
   secret:SESS_SECRET,
   cookie:{
      maxAge:SESS_LIFETIME,
      sameSite:true,
      secure:IN_PRODUCTION
   }
}));
app.use("/",routes);
app.listen(80,()=>{
})
