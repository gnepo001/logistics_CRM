import expense from "../models/expense.js";

//fetchdata
export const getExpenses = async (req, res) => {
  try {
    const postMessages = await expense.find().sort({ date: 1 });
    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createExpense = async (req, res) => {
  const data = req.body;
  const newExpense = new expense(data);
  try {
    await newExpense.save();
    res.status(201).json(newExpense);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getExpenseByType = async (req, res) => {
  const type = req.query;
  if (type.type == "all") {
    try {
      const data = await expense.find();
      res.status(200).json(data);
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
  } else {
    try {
      const data = await expense.find({ type: "Fuel" });
      res.status(200).json(data);
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
  }
};
