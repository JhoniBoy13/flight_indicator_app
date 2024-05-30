import {Request, Response} from "express";

export const handleError = (err: Error, req: Request, res: Response):void => {
    console.error(err.stack);
    res.status(500).send('Internal Server Error');
};