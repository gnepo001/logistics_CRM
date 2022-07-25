import express from "express";
import { getDrivers } from "../controllers/drivers.js";
import { getExpenses } from "../controllers/expenses.js";

const router = express.Router();

router.get("/drivers", getDrivers);
router.get("/expenses", getExpenses);

export default router;
