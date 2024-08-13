import mongoose from 'mongoose'
import dotenv from 'dotenv';
// const dotenv = require('dotenv')

dotenv.config();

const connectoMongoDb = async ()=>{
    try {
        const mongoDbUri = process.env.MONGO_DB_URI;
        // console.log("MONGO_DB_URI:", mongoDbUri); 
        // Add this line to debug
        await mongoose.connect(process.env.MONGO_DB_URI,);
        console.log("Connected to MongoDb")
    } catch (error) {
        console.log("Error connecting to Db", error.message)
        
    }
}

export default connectoMongoDb;