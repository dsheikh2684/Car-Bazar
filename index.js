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


// //middleware
app.use((err,req,res,next)=>{
    let {statusCode=500,message="Somethig Went Wrong"}=err; 
    res.status(statusCode).render("../error.ejs",{err});
});
