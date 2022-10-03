import mongoose from "mongoose";

const driverSchema = mongoose.Schema({
  firstname: String,
  lastname: String,
  startdate: Date,
});

const driver = mongoose.model("driver", driverSchema);

export default driver;
