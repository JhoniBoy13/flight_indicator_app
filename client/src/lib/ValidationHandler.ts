import {ErrorHandler} from "./ErrorHandler";
import {FlightIndicator} from "./interfaces/FlightIndicator";
import flightIndicatorData from "../lib/data/flightIndicatorData.json";


export class ValidationHandler {

    private errorHandlers: ErrorHandler = new ErrorHandler();

    validateId = (id: number): boolean => {

        if (!id) {
            throw new Error(this.errorHandlers.getErrorMessage('ID_MISSING'));
        }

        if (id < 0) {
            throw new Error(this.errorHandlers.getErrorMessage('ID_NEGATIVE'));
        }

        return true;
    }

    validateFlightIndicator = ({ALT, HIS, ADI}: FlightIndicator): boolean => {

        if (!ALT || !HIS || !ADI) {
            throw new Error(this.errorHandlers.getMissingFieldsErrorMessage('MISSING_FIELDS', !ALT, !HIS, !ADI));
        }

        if (ALT < flightIndicatorData.alt.min || ALT > flightIndicatorData.alt.max) {
            throw new Error(this.errorHandlers.getErrorMessage('INVALID_ALT'));
        }

        if (HIS < flightIndicatorData.his.min || HIS > flightIndicatorData.his.max) {
            throw new Error(this.errorHandlers.getErrorMessage('INVALID_HIS'));
        }

        if (ADI < flightIndicatorData.adi.min || ADI > flightIndicatorData.adi.max) {
            throw new Error(this.errorHandlers.getErrorMessage('INVALID_ADI'));
        }

        return true;
    }

}
