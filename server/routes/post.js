import express from "express";
import { getDrivers } from "../controllers/drivers.js";
import { getExpenses } from "../controllers/expenses.js";
import { getVehicles } from "../controllers/vehicles.js";

const router = express.Router();

router.get("/drivers", getDrivers);
router.get("/expenses", getExpenses);
router.get("/vehicles", getVehicles);

export default router;
