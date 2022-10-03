import mongoose from "mongoose";

const expenseSchema = mongoose.Schema({
  type: String,
  date: Date,
  name: String,
  location: String,
  price: Number,
  employee: String,
});

const expense = mongoose.model("expense", expenseSchema);

export default expense;
