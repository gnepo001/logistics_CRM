import mongoose from "mongoose";

const invoiceClientSchema = mongoose.Schema({
  client: String,
  date: Date,
  from: String,
  to: String,
  quantity: Number,
  loadType: String,
  price: Number,
  note: String,
  completed: Boolean,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const invoiceClient = mongoose.model("invoiceClient", invoiceClientSchema);

export default invoiceClient;
