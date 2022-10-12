import mongoose from "mongoose";
import client from "../models/client.js";
import invoiceClient from "../models/invoiceClient.js";
import invoice from "../models/invoiceClient.js";

//collects all clients
export const getClients = async (req, res) => {
  try {
    const postClients = await client.find();
    res.status(200).json(postClients);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// returns exact post by Id
export const findById = async (req, res) => {
  const { id: _id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("No Client with tht id");
  }
  try {
    const data = await client.findById(_id);
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//create new client
export const createClient = async (req, res) => {
  const data = req.body;
  const newClient = new client(data);
  try {
    await newClient.save();
    res.status(201).json(newClient);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

//client Invoices
export const createInvoice = async (req, res) => {
  const data = req.body;
  const newInvoice = new invoice(data);
  try {
    await newInvoice.save();
    res.status(201).json(newInvoice);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const fetchInvoices = async (req, res) => {
  const client = req.query.client; //gets data from url query
  try {
    const data = await invoiceClient.find({ client: client }); //finds documents with spefific data
    res.status(200).json(data);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateInvoice = async (req, res) => {
  const { id: _id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No Invoice with that id");
  const newInvoice = await invoice.findByIdAndUpdate(
    _id,
    {
      completed: true,
    },
    { new: true }
  );
  res.json(newInvoice);
};
