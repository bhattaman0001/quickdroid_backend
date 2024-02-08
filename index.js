const express = require("express");
const connectMongoDB = require("./connection");
const { logReqRes } = require("./middlewares/middlewaresJS");
const router = require("./routes/routeJS");
// making the application
const app = express();
const mongoose = require("mongoose");

// connection with DB
// connectMongoDB("mongodb+srv://pqrst:abc@cluster0.r6wyviz.mongodb.net/aman")
connectMongoDB(
  "mongodb+srv://amanbhatt02:aman2001@cluster0.ey10qw7.mongodb.net/bck"
)
  .then(async () => {
    console.log("Database connected!!");
    // Access the collection directly and fetch all documents
    const collection = mongoose.connection.db.collection("bck"); // Replace 'your_collection_name' with your actual collection name
    const allData = await collection.find({}).toArray();

    // Print all JSON data
    console.log("All data:", allData);
  })
  .catch((error) => {
    return console.log(`Error in DB connection is: ${error}`);
  });

// middleware plugin
app.use(express.urlencoded({ extended: false }));
app.use(logReqRes("log.txt"));
app.use("/files", router);
app.listen(4004, () => console.log(`Server started:`));
