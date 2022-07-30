import express from "express";
import { getDrivers } from "../controllers/drivers.js";
import { getExpenses } from "../controllers/expenses.js";
import { getVehicles, createPost } from "../controllers/vehicles.js";

const router = express.Router();

router.get("/drivers", getDrivers);
router.get("/expenses", getExpenses);
router.get("/vehicles", getVehicles);
router.post("/vehicles", createPost);

export default router;
