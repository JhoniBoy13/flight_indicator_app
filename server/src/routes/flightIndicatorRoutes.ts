import express, {Router} from "express";
import {createFlightIndicator, getFlightIndicatorById} from "../controllers/flightIndicatorController";

const router:Router = express.Router();

router.post("/flight-indicators/post", createFlightIndicator);
router.get("/flight-indicators/get/:id", getFlightIndicatorById);

export default router;