import { Request, Response } from "express";
import errors from "../data/errors.json"
export class ErrorHandler {

    handleServerError(err: Error, req: Request, res: Response): void {
        console.error(err.stack);
        res.status(errors.INTERNAL_SERVER_ERROR.statusCode).send(errors.INTERNAL_SERVER_ERROR.message);
    };

    getError(res: Response, errorKey: string): boolean {
        const errorInfo = errors[errorKey];
        res.status(errorInfo.statusCode).json({ message: errorInfo.message });
        return false;
    }
}