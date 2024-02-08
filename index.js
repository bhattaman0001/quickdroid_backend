const express = require("express");
const connectMongoDB = require("./connection");
const { logReqRes } = require("./middlewares/middlewaresJS");
const router = require("./routes/routeJS");
// making the application
const app = express();

const PORT = 4004;
// connection with DB
connectMongoDB("mongodb://127.0.0.1:27017/quickdroid-backend")
  .then(() => {
    return console.log("Database connected!!");
  })
  .catch((error) => {
    return console.log(`Error in DB connection is: ${error}`);
  });

// middleware plugin
app.use(express.urlencoded({ extended: false }));
app.use(logReqRes("log.txt"));
app.use("/files", router);
app.listen(PORT, () => console.log(`Server started at port: ${PORT}`));
