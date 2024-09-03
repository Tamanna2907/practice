const mongoose=require("mongoose")

const URI=process.env.MONGODB_URI;

const connectDb=async()=>{
    try {
        await mongoose.connect(URI);
        console.log("connection successful...")
    } catch (error) {
        console.error("error encountered: ", error);
        process.exit(0);
    }
}   

module.exports=connectDb;