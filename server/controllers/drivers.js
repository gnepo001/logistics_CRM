import driver from "../models/driver.js";

//fetchdata
export const getDrivers = async (req, res) => {
  try {
    const postMessages = await driver.find();
    res.status(200).json(postMessages);
  } catch (error) {
    console.log("test2");
    res.status(404).json({ message: error.message });
  }
};
