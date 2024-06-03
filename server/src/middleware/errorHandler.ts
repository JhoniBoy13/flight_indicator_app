import {Response} from "express";
import errors from "../data/serverErrors.json";

export class ErrorHandler {
    handleServerError(err: Error): void {
        console.error(err.stack);
        throw new Error( errors.INTERNAL_SERVER_ERROR.message);
    };

    getError(res: Response, errorKey: string): boolean {
        const errorInfo = errors[errorKey];
        res.status(errorInfo.statusCode).json({message: errorInfo.message});
        return false;
    }
}
