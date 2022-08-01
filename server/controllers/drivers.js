import driver from "../models/driver.js";

export const getDrivers = async (req, res) => {
  try {
    const postMessages = await driver.find();
    res.status(200).json(postMessages);
  } catch (error) {
    console.log("test2");
    res.status(404).json({ message: error.message });
  }
};

export const createDriver = async (req, res) => {
  const data = req.body;
  const newDriver = new driver(data);
  try {
    await newDriver.save();
    res.status(201).json(newDriver);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
