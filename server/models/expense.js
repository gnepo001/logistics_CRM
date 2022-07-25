import mongoose from "mongoose";

const expenseSchema = mongoose.Schema({
  type: String,
  cost: Number,
});

const expense = mongoose.model("expense", expenseSchema);

export default expense;
