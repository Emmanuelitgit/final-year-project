import express from "express";
import { getStaff } from "../controllers/staff.js";

const router = express.Router();

router.get("/staff/:role", getStaff)

export default router; 