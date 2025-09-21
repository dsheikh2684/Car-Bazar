const mongoose=require("mongoose");
const Schema=new mongoose.Schema;
const car=require("../models/cars.js");
const data=require("../init/init.js");
const { stat } = require("fs");
const { env } = require("process");
require('dotenv').config({ path: __dirname + '/../.env' });
main()
.then(()=>{
    console.log("Connection Successful");
})
.catch((err)=>{
    console.log(err);
})
async function main() {
    console.log(process.env.MONGO_URL)
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connections Successful");
}

let  initDB = async ()=>{
    await car.deleteMany({});
    data.data=data.data.map((car)=>({...car,dealer:"68d03ffe824a52f293a4cc60"}));
    await car.insertMany(data.data);
    console.log("Saved Successfully");
}
initDB();