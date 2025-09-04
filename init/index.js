const mongoose=require("mongoose");
const Schema=new mongoose.Schema;
const car=require("../models/cars.js");
const data=require("../init/init.js")
const URL="mongodb://localhost:27017/"
main()
.then(()=>{
    console.log("Connection Successful");
})
.catch((err)=>{
    console.log(err);
})
async function main() {
    await mongoose.connect(URL)
    console.log("Connections Successful");
}

let  initDB = async ()=>{
    await car.deleteMany({});
    await car.insertMany(data.data);
    console.log("Saved Successfully");
}
initDB();