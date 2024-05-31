import { Request, Response } from 'express';
import { FlightIndicator } from "../entities/FlightIndicator";
import { FlightIndicatorService } from "../services/flightIndicatorService";
import { ErrorHandler } from "../middleware/errorHandler";
import flightIndicatorData from "../data/flightIndicatorData.json"

export class FlightIndicatorController {
    private flightIndicatorService: FlightIndicatorService = new FlightIndicatorService();
    private errorHandlers: ErrorHandler = new ErrorHandler();

    async validateSaveRequest(req: Request, res: Response): Promise<boolean> {
        const { ALT, HIS, ADI } = req.body;

        if (!ALT || !HIS || !ADI) {
            return this.errorHandlers.getError(res, 'MISSING_FIELDS');
        }
        if (ALT < flightIndicatorData.alt.min || ALT > flightIndicatorData.alt.max) {
            return this.errorHandlers.getError(res, 'INVALID_ALT');
        }
        if (HIS < flightIndicatorData.his.min || HIS > flightIndicatorData.his.max) {
            return this.errorHandlers.getError(res, 'INVALID_HIS');
        }
        if (ADI < flightIndicatorData.adi.min || ADI > flightIndicatorData.adi.max) {
            return this.errorHandlers.getError(res, 'INVALID_ADI');
        }
        return true;
    }

    async save(req: Request, res: Response): Promise<void> {
        const { ALT, HIS, ADI } = req.body;

        if (!(await this.validateSaveRequest(req, res))) {
            return;
        }

        const newFlightIndicator: FlightIndicator = new FlightIndicator();
        newFlightIndicator.ALT = ALT;
        newFlightIndicator.HIS = HIS;
        newFlightIndicator.ADI = ADI;

        try {
            const savedFlightIndicator: FlightIndicator = await this.flightIndicatorService.createFlightIndicator(newFlightIndicator);
            res.status(201).json(savedFlightIndicator);
        } catch (error) {
            this.errorHandlers.getError(res, 'INTERNAL_SERVER_ERROR');
        }
    }

    async validateFindByIdRequest(req: Request, res: Response): Promise<boolean> {
        const id: string = req.params.id;

        if (!id) {
            return this.errorHandlers.getError(res, 'ID_MISSING');
        }

        const parsedId: number = parseInt(id);

        if (isNaN(parsedId) || !Number.isInteger(parsedId)) {
            return this.errorHandlers.getError(res, 'INVALID_ID');
        }

        if (parsedId <= 0) {
            return this.errorHandlers.getError(res, 'ID_POSITIVE');
        }

        return true;
    }

    async findOneById(req: Request, res: Response): Promise<void> {
        const id: string = req.params.id;

        if (!(await this.validateFindByIdRequest(req, res))) {
            return;
        }

        try {
            const flightIndicator: FlightIndicator = await this.flightIndicatorService.findOneById(parseInt(id));

            if (!flightIndicator) {
                this.errorHandlers.getError(res, 'FLIGHT_INDICATOR_NOT_FOUND');
                return;
            }
            res.json(flightIndicator);
        } catch (error) {
            this.errorHandlers.getError(res, 'INTERNAL_SERVER_ERROR');
        }
    }
}
