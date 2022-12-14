/**
 * 1. Create a connection function for mongodb
 * 2. Start a local mongodb server connection
 */

 const mongoose = require("mongoose");
 require("dotenv").config();
 const { MONGO_URI } = process.env;
 
 // Create the connection function
 // const connectDB = () => {
 //     mongoose.connect(MONGO_URI, {
 //         useNewUrlParser: true,
 //         useCreationIndex: true,
 //         useUnifiedTopology: true,
 //         useFindAndModify: false
 //     })
 //     .then(() => {
 //         console.log("MongoDB connected")
 
 //         // Seed data
 //     })
 //     .catch((err) => {
 //         console.error(err.message);
 
 //         // Exit with failure
 //         process.exit(1);
 //     })
 // }
 //   OR
 
 // Async mongoose connection
 const connectDB = async () => {
   try {
     await mongoose.connect(MONGO_URI, {
       useNewUrlParser: true,
       // useCreationIndex: true,
       useUnifiedTopology: true,
       // useFindAndModify: false,
     });
 
     console.log("MongoDB connected");
 
     // Seed data
   } catch (error) {
     console.error(error.message);
 
     // Exit with failure
     process.exit(1);
   }
 };
 
 module.exports = connectDB; 