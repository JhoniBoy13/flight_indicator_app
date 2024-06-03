import  { Router } from "express";
import {FlightIndicatorController} from "../controllers/flightIndicatorController";

const router: Router = Router();
const flightIndicatorController: FlightIndicatorController = new FlightIndicatorController();

router.post("/flight-indicators", (req, res) => flightIndicatorController.save(req, res));
router.get("/flight-indicators/:id", (req, res) => flightIndicatorController.findOneById(req, res));

export default router;