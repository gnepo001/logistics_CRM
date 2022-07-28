import vehicle from "../models/vehicle.js";

export const getVehicles = async (req, res) => {
  try {
    const postVehicles = await vehicle.find();
    res.status(200).json(postVehicles);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
