import moongoose from "mongoose";
import event from "../models/event.js";

export const createEvent = async (req, res) => {
  const data = req.body;
  const newEvent = new event(data);
  try {
    await newEvent.save();
    res.status(201).json(newEvent);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getEvents = async (req, res) => {
  try {
    const data = await event.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
