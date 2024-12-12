import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import mongoose from "mongoose";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// https://www.mongodb.com/cloud/atlas we need to connect to our database

const CONNECTION_URL =
  "mongodb+srv://new_user1:test1@cluster0.ydhxu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
//   "mongodb+srv://mugunthnarayanan13:Mugunth@108851126365@cluster0.ydhxu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL)
  .then(() => {
    console.log("Mongoose connected successfully");
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
  })
  .catch((error) => console.log(error.message));
