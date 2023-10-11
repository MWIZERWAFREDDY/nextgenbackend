const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors"); // Import the cors package
const StudentRouter = require("./routers/StudentRouter");

const app = express();
dotenv.config();

// Use the cors middleware to enable CORS
app.use(cors());

app.use(express.json());
app.use("/api/students", StudentRouter);

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
  })
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("server is running and connected to db");
    });
  })
  .catch((error) => {
    console.log("can't connect to db");
  });
