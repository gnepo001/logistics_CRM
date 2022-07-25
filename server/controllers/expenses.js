import expense from "../models/expense.js";

//fetchdata
export const getExpenses = async (req, res) => {
  try {
    const postMessages = await expense.find();
    res.status(200).json(postMessages);
  } catch (error) {
    console.log("test2");
    res.status(404).json({ message: error.message });
  }
};
