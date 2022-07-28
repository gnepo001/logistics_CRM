import mongoose from "mongoose";

const vehicleSchema = mongoose.Schema({
  model: String,
  make: String,
  vin: String,
  year: Number,
  repairs: Number,
});

const vehicle = mongoose.model("vehicle", vehicleSchema);

export default vehicle;
