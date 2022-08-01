import client from "../models/client.js";

export const getClients = async (req, res) => {
  try {
    const postClients = await client.find();
    res.status(200).json(postClients);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

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
