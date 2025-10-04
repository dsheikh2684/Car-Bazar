const cloudinary=require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const { env } = require("process");
require('dotenv').config();

cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_secret:process.env.API_SECRET,
    api_key:process.env.API_KEY,
});

const storage= new CloudinaryStorage({
    cloudinary:cloudinary,
    params:{
        folder:'Car_Bazar_Listings',
        allowedFormats:["png","jpg","jpeg"],
    }
});

module.exports={storage,cloudinary};