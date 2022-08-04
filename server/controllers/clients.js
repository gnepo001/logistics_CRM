import mongoose from "mongoose";
import client from "../models/client.js";

//collects all clients
export const getClients = async (req, res) => {
  try {
    const postClients = await client.find();
    res.status(200).json(postClients);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// returns exact post by Id
export const findById = async (req, res) => {
  const { id: _id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("No Client with tht id");
  }
  try {
    const data = await client.findById(_id);
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//create new client
export const createClient = async (req, res) => {
  const data = req.body;
  const newClient = new client(data);
  try {
    await newClient.save();
    res.status(201).json(newClient);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
