const mongoose=require("mongoose");
const Schema=mongoose.Schema;

let carSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    model:{
        type:String,
        required:true,
    },
    year:{
        type:Number,
        required:true,
    },
    kms:{
        type:Number,
        required:true,
    },
    fuel:{
        type:String,
        required:true,
    },
    colour:{
        type:String,
        required:true,
    },
    owner:{
        type:String,
        required:true,
    },
    insurance:{
        type:String,
        required:true,
    },
    i_expiry:{
        type:Date,
        required:true,
    },
    image:{
        type:String,
        default:"https://www.shutterstock.com/image-photo/szczecinpolandjuly-2024bugatti-tourbillon-v16-1800-600nw-2492193479.jpg",
        set:(v)=>
            v===""?"https://www.shutterstock.com/image-photo/szczecinpolandjuly-2024bugatti-tourbillon-v16-1800-600nw-2492193479.jpg":v
        
    },
    price:{
        type:Number,
        required:true,
    },
    dealer:{
        type:Schema.Types.ObjectId,
        ref:"User",
    }
});
const car=new mongoose.model("car",carSchema);
module.exports=car;