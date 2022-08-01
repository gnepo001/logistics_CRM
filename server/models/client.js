import mongoose from "mongoose";

const clientSchema = mongoose.Schema({
  name: String,
  balance: Number,
  trips: Number,
});

const client = mongoose.model("client", clientSchema);

export default client;
