import express from "express";
import * as bodyParser from "body-parser"
import {AppDataSource} from "../data-source"
import FlightIndicatorRoutes from "./routes/flightIndicatorRoutes";
import {ErrorHandler} from "./middleware/errorHandler";
import {Express} from "express";
require('dotenv').config();
AppDataSource.initialize().then(async () : Promise<void> => {

    const app: Express = express();
    const errorHandler: ErrorHandler = new ErrorHandler();

    const port : number = Number(process.env.PORT) ;


    app.use(bodyParser.json());

    app.use('/api', FlightIndicatorRoutes);

    app.use(errorHandler.handleServerError);

    app.listen(port, () => console.log(`Server listening on port ${port}`));

    console.log(`Express server has started on port ${port}.`);
}).catch(error => console.error(error));

