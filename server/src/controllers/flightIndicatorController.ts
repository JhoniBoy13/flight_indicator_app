import {Request, Response} from "express";
import {getRepository, Repository} from "typeorm";
import {FlightIndicator} from "../entities/FlightIndicator";

export const createFlightIndicator = async (req: Request, res: Response) => {
    try {
        const flightIndicatorRepository: Repository<FlightIndicator> = getRepository(FlightIndicator);
        const newFlightIndicator: FlightIndicator[] = flightIndicatorRepository.create(req.body);
        await flightIndicatorRepository.save(newFlightIndicator);
        res.status(201).json(newFlightIndicator);
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error("failed to add the flight indicators:", error.message);
        } else {
            console.error("Unknown error:", error);
        }
    }
};

export const getFlightIndicatorById = async (req: Request, res: Response) => {
    try {
        const flightIndicatorRepository = getRepository(FlightIndicator);
        const flightIndicator = await flightIndicatorRepository.findOneById(req.params.id);
        if (!flightIndicator) {
            res.status(404).json({message: "Flight indicator not found"});
        } else {
            res.status(201).json(flightIndicator);
        }
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({message: "Failed to fetch flight indicator", error: error.message});
        } else {
            console.error("Unknown error:", error);
        }
    }
};