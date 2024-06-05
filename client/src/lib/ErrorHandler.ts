import errors from "../lib/data/clientErrors.json";

export class ErrorHandler {
    getErrorMessage(errorKey: string): string {
        return errors[errorKey].message;
    }

    getMissingFieldsErrorMessage(errorKey: string, isALTMissing: boolean, isHISMissing: boolean, isADIMissing: boolean): string {
        const missingFields: string[] = [];
        if (isALTMissing) missingFields.push('ALT');
        if (isHISMissing) missingFields.push('HIS');
        if (isADIMissing) missingFields.push('ADI');

        const missingFieldsString:string = missingFields.join(', ');
        return `${errors[errorKey].message} (${missingFieldsString})`;
    }

}
