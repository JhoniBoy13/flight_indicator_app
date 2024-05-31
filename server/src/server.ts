import express from "express";
import * as bodyParser from "body-parser"
import {AppDataSource} from "../data-source"
import FlightIndicatorRoutes from "./routes/flightIndicatorRoutes";
import {ErrorHandler} from "./middleware/errorHandler";
import {Express} from "express";

AppDataSource.initialize().then(async () : Promise<void> => {

    const app: Express = express();
    const errorHandler: ErrorHandler = new ErrorHandler();

    app.use(bodyParser.json());

    app.use('/api', FlightIndicatorRoutes);

    app.use(errorHandler.handleServerError);

    app.listen(3000, () => console.log(`Server listening on port 3000`));

    console.log("Express server has started on port 3000.");
}).catch(error => console.error(error));

