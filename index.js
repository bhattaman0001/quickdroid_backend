const express = require("express");
const connectMongoDB = require("./connection");
const { logReqRes } = require("./middlewares/middlewaresJS");
const router = require("./routes/routeJS");
// making the application
const app = express();

// connection with DB
connectMongoDB(
  `mongodb+srv://amanbhatt02:aman2001@cluster0.ey10qw7.mongodb.net/bck`
)
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
app.listen(4004, () => console.log(`Server started:`));
