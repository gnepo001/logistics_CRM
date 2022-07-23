import mongoose from "mongoose";
import driver from "../models/driver.js";

//fetchdata
export const getPosts = async (req, res) => {
  try {
    const postMessages = await driver.find();
    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
