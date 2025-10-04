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
    images:[
        {
            url:String,
            filename:String,
        }],
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