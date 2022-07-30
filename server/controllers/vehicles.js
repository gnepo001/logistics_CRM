import vehicle from "../models/vehicle.js";

export const getVehicles = async (req, res) => {
  try {
    const postVehicles = await vehicle.find();
    res.status(200).json(postVehicles);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const post = req.body;
  const newPost = new vehicle(post.vehicle);
  console.log(newPost);
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
