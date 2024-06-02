import {FlightIndicator} from "./interfaces/FlightIndicator";

export class ApiHandler {
    static baseURL: string = "http://localhost:3000/api/flight-indicators";

    async loadFlightIndicator(id: string): Promise<FlightIndicator> {
        const url:string = `${ApiHandler.baseURL}/${id}`;
        const headers: HeadersInit = {
            'Content-Type': 'application/json',
        };

        try {
            const response: Response = await fetch(url, {method: 'GET', headers: headers});
            if (!response.ok) {
                throw new Error(`Failed to fetch flight indicator with id ${id}`);
            }
            const data = await response.json();
            return data;
        }
        catch (error) {
            console.error('Error loading flight indicator:', error);
            throw error;
        }
    }
}
