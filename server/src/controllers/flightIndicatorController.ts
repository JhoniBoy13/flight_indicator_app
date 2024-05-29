import { Request, Response } from "express";
import { FlightIndicatorService } from "../services/flightIndicatorService";
import { FlightIndicator } from "../entities/FlightIndicator";

const flightIndicatorService: FlightIndicatorService = new FlightIndicatorService();

function getControllerErrorMessage(error: unknown, message: string, res: Response): void {
    if (error instanceof Error) {
        res.status(500).json({
            message: message,
            error: error.message
        });
    } else {
        console.error("Unknown error:", error);
        res.status(500).json({ message: "Unknown error" });
    }
}

export const createFlightIndicator = async (req: Request, res: Response): Promise<void> => {
    try {
        const newFlightIndicator: FlightIndicator = await flightIndicatorService.create(req.body);
        res.status(201).json(newFlightIndicator);
    } catch (error: unknown) {
        getControllerErrorMessage(error, "Failed to add the flight indicators", res);
    }
};

export const getFlightIndicatorById = async (req: Request, res: Response): Promise<void> => {
    try {
        const flightIndicator: FlightIndicator | null = await flightIndicatorService.findOneById(Number(req.params.id));
        if (!flightIndicator) {
            res.status(404).json({ message: "Flight indicator not found" });
        } else {
            res.status(200).json(flightIndicator);
        }
    } catch (error: unknown) {
        getControllerErrorMessage(error, "Failed to fetch flight indicator", res);
    }
};
