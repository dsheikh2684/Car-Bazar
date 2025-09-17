const express=require("express");
const app=express();
const PORT=8080;    
const mongoose=require("mongoose");
const listing=require("./routes/listings.js");
const user=require("./routes/users.js");
const path = require("path");
const ejsMate=require("ejs-mate");
const { stat } = require("fs");
const { env } = require("process");
require('dotenv').config();
const session=require("express-session");
const passport=require("passport");
const LocalStrategy=require("passport-local");
const User=require("./models/user.js");
let sessionVariables={
    secret:`${env.secret}`,
    resave: false,
    saveUninitialized: true
};
app.use(session(sessionVariables));
const flash=require("connect-flash");

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use(flash());
app.use((req,res,next)=>{
    res.locals.succMsg=req.flash("success");
    res.locals.errMsg=req.flash("error");
    next();
})
//ser view engine as ejs
app.set("view engine","ejs");

app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));

const methodOverride=require("method-override");
const { name } = require("ejs");
app.use(methodOverride("_method"));
app.engine("ejs",ejsMate);

app.use(express.static(path.join(__dirname,"/public")));


//call main function to connect with mongoDB
main()
.then(()=>{
    console.log("Connection Successful");
})
.catch((err)=>{
    console.log(err);
})
//function to connect with DB
async function main() {
    mongoose.connect(process.env.MONGO_URL);
}

app.listen(PORT,()=>{
    console.log(`Listening on Port ${PORT}`);
})
//home route
app.get("/",(req,res)=>{
    res.send("Home Route");
});

app.use("/listings",listing);
app.use("/user",user);
// app.get("/demoUser",async(req,res)=>{
//     let demoUser=new User({
//         email:"buyer@gmail.com",
//         username:"Buyer2"
//     });

//     let user=await User.register(demoUser,"Password1122");
//     console.log(user);
//     res.send("User Saved");
// })

