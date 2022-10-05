import mongoose from "mongoose";

const eventSchema = mongoose.Schema({
  date: Date,
  name: String,
  description: String,
});

const event = mongoose.model("event", eventSchema);

export default event;
