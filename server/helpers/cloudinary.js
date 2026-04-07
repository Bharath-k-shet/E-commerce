// const cloudinary = require('cloudinary').v2
// const multer = require('multer')
// require("dotenv").config();

// cloudinary.config({
//     cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//     api_key:  process.env.CLOUDINARY_API_KEY,
//     api_secret:  process.env.CLOUDINARY_API_SECRET
// });

// const storage = new multer.memoryStorage();

// async function ImageUploadUtil(file) {
//     const result = await cloudinary.uploader.upload(file, {
//         resource_type: "auto",
//     });
//     return result;
// }

// const upload = multer({ storage });

// module.exports = { upload, ImageUploadUtil };
const cloudinary = require('cloudinary').v2
const multer = require('multer')
require("dotenv").config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

// ✅ memory storage
const storage = multer.memoryStorage();

// ✅ FIXED FUNCTION
async function ImageUploadUtil(file) {
    try {
        // convert buffer to base64
        const b64 = Buffer.from(file.buffer).toString("base64");
        const dataURI = "data:" + file.mimetype + ";base64," + b64;

        const result = await cloudinary.uploader.upload(dataURI, {
            resource_type: "auto",
            folder: "ecommerce"
        });

        return result;

    } catch (error) {
        console.log("Cloudinary Error:", error);
        throw error;
    }
}

const upload = multer({ storage });

module.exports = { upload, ImageUploadUtil };