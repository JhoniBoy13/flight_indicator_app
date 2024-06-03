import { FlightIndicator } from "./interfaces/FlightIndicator";
import {ValidationHandler} from "./ValidationHandler";

export class ApiHandler {
    static baseURL: string = "http://localhost:3000/api/flight-indicators";
    static validationHandler: ValidationHandler = new ValidationHandler();
    static headers: HeadersInit = {
        'Content-Type': 'application/json',
    };

    async loadFlightIndicator(id: number): Promise<FlightIndicator> {
        const url: string = `${ApiHandler.baseURL}/${id}`;

        try {
            ApiHandler.validationHandler.validateId(id);
            const response: Response = await fetch(url, { method: 'GET', headers: ApiHandler.headers });
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message);
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error loading flight indicator:', error);
            throw error;
        }
    }


    async saveFlightIndicator(flightIndicator: FlightIndicator): Promise<FlightIndicator> {
        try {
            ApiHandler.validationHandler.validateFlightIndicator(flightIndicator);
            const response: Response = await fetch(ApiHandler.baseURL, {
                method: 'POST',
                headers: ApiHandler.headers,
                body: JSON.stringify(flightIndicator),
            });
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message);
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error saving flight indicator:', error);
            throw error;
        }
    }
}
