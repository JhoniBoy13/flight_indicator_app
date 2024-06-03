import {Request, Response} from 'express';
import {FlightIndicator} from "../entities/FlightIndicator";
import {FlightIndicatorService} from "../services/flightIndicatorService";
import {ErrorHandler} from "../middleware/errorHandler";

export class FlightIndicatorController {
    private flightIndicatorService: FlightIndicatorService = new FlightIndicatorService();
    private errorHandlers: ErrorHandler = new ErrorHandler();
    async save(req: Request, res: Response): Promise<void> {
        const {ALT, HIS, ADI} = req.body;

        const newFlightIndicator: FlightIndicator = new FlightIndicator();
        newFlightIndicator.ALT = ALT;
        newFlightIndicator.HIS = HIS;
        newFlightIndicator.ADI = ADI;

        try {
            const savedFlightIndicator: FlightIndicator = await this.flightIndicatorService.createFlightIndicator(newFlightIndicator);
            res.status(201).json(savedFlightIndicator);
        }
        catch (error) {
            this.errorHandlers.handleServerError(error);
        }
    }
    async findOneById(req: Request, res: Response): Promise<FlightIndicator> {
        const id: string = req.params.id;

        try {
            const flightIndicator: FlightIndicator = await this.flightIndicatorService.findOneById(parseInt(id));

            if (!flightIndicator) {
                this.errorHandlers.getError(res, 'FLIGHT_INDICATOR_NOT_FOUND');
                return;
            }
            res.status(201).json(flightIndicator);
            return flightIndicator;
        }
        catch (error) {
            this.errorHandlers.handleServerError(error);
        }
    }
}
