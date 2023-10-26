import mongoose from "mongoose";

const connectDB = async()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB conneted to: ${conn.connection.host}`.cyan.underline);
    }
    catch(err){
        console.log(`Error while connecting database: ${err.message}`);
        process.exit(1);
    }
}

export default connectDB;