const express=require("express");
const app=express();
const PORT=8080;    
const mongoose=require("mongoose");
const listing=require("./routes/listings.js");
const path = require("path");
const ejsMate=require("ejs-mate");
const { stat } = require("fs");
const { env } = require("process");
require('dotenv').config();
const session=require("express-session");

let sessionVariables={
    secret:`${env.secret}`,
    resave: false,
    saveUninitialized: true
};
app.use(session(sessionVariables));
const flash=require("connect-flash");
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

