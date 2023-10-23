import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import empRoute from "./routes/empRoute.js";

import "dotenv/config";
const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;

const app = express();
app.use(express.json());

// Middleware for handling CORS POLICY
// Option 1: Allow All Origins with Default of cors(*)
app.use(cors());
// Option 2: Allow Custom Origins
// app.use(
//   cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type'],
//   })
// );

app.get("/", (req, res) => {
  res.status(200).send("Welcome Home");
});

app.use("/emp", empRoute);

/* 404 NOT FOUND */
app.use((req, res) => {
  res.status(404).json({ error: "NOT A DIRECTORY" });
});

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("Server is connected to database");
    app.listen(PORT, () => {
      console.log("Server is listening to port: " + PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
