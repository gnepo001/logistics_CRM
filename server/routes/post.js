import express from "express";
import { getVehicles, createVehicle } from "../controllers/vehicles.js";
import { getClients, findById, createClient } from "../controllers/clients.js";
import { getDrivers, createDriver } from "../controllers/drivers.js";
import { getExpenses, createExpense } from "../controllers/expenses.js";

const router = express.Router();

//--Get Routes
router.get("/vehicles", getVehicles);
router.get("/clients", getClients);
router.get("/drivers", getDrivers);
router.get("/expenses", getExpenses);

//--FindBy Routes
router.get("/clients/:id", findById);

//--Post Routes
router.post("/vehicles", createVehicle);
router.post("/clients", createClient);
router.post("/drivers", createDriver);
router.post("/expenses", createExpense);

export default router;
