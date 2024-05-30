import {Request, Response} from 'express';
import {FlightIndicator} from "../entities/FlightIndicator";
import {FlightIndicatorService} from "../services/flightIndicatorService";


export class FlightIndicatorController {
    private flightIndicatorService: FlightIndicatorService = new  FlightIndicatorService();
    async save(req: Request, res: Response): Promise<any> {
        const {ALT, HIS, ADI} = req.body;

        if (!ALT || !HIS || !ADI) {
            return res.status(400).json({ message: 'Missing required fields (ALT, HIS, ADI)' });
        }

        if (ALT < 0 || ALT > 3000) {
            return res.status(400).json({ message: 'ALT must be between 0 and 3000' });
        }

        if (HIS < 0 || HIS > 360) {
            return res.status(400).json({ message: 'HIS must be between 0 and 360' });
        }

        if (ADI < -100 || ADI > 100) {
            return res.status(400).json({ message: 'ADI must be between -100 and 100' });
        }

        const newFlightIndicator: FlightIndicator = new FlightIndicator();
        newFlightIndicator.ALT = ALT;
        newFlightIndicator.HIS = HIS;
        newFlightIndicator.ADI = ADI;

        try {
            const savedFlightIndicator: FlightIndicator = await this.flightIndicatorService.createFlightIndicator(newFlightIndicator);
            await res.status(201).json(savedFlightIndicator);
        }
        catch (error) {
            console.error(error);
            await res.status(500).json({message: 'Internal Server Error'});
        }
    }

    async findOneById(req: Request, res: Response): Promise<any> {
        const id: string = req.params.id;

        try {
            const flightIndicator: FlightIndicator = await this.flightIndicatorService.findOneById(parseInt(id));

            if (!flightIndicator) {
                return res.status(404).json({message: 'Flight Indicator not found'});
            }
            res.json(flightIndicator);
        }
        catch (error) {
            console.error(error);
            await res.status(500).json({message: 'Internal Server Error'});
        }
    }
}