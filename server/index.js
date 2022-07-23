import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import postRoutes from "./routes/post.js"; //imports routes for webpage

const app = express();
dotenv.config(); //imports senenstive information from .env file replace process.env below with own mongodb connection URL and Port

// app parameters
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/posts", postRoutes);

const PORT = process.env.PORT || 5010;

//connects app to database
mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewURLParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server listening on Port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));
