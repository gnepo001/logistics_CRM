import mongoose from "mongoose";
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
    const data = await event.find().sort({ date: 1 }); //returns data by earliest
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deleteEvent = async (req, res) => {
  const { id: _id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("No event with that id");
  }
  await event.findByIdAndRemove(_id);
  res.json({ message: "Post deleted successfully" });
};

export const updateEvent = async (req, res) => {
  const { id: _id } = req.params;
  const updatedEvent = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No post with that id");
  const newPost = await event.findByIdAndUpdate(
    _id,
    { ...updatedEvent, _id },
    { new: true }
  );
  res.json(newPost);
};
