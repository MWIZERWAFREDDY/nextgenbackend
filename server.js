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

const mongoURI = process.env.MONGODB_URI; // Access the environment variable

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Server is running and connected to the database");
    });
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });
