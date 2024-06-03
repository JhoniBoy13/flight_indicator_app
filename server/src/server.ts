import express, {Express} from "express";
import {AppDataSource} from "../data-source"
import FlightIndicatorRoutes from "./routes/flightIndicatorRoutes";
import {ErrorHandler} from "./middleware/errorHandler";
import bodyParser from "body-parser";

require('dotenv').config();
const cors = require("cors");
AppDataSource.initialize().then(async (): Promise<void> => {

    const app: Express = express();

    app.use(
        cors({
                origin: "http://localhost:3001",
                type: ["GET", "POST"],
            }
        ))

    const errorHandler: ErrorHandler = new ErrorHandler();
    const port: number = Number(process.env.PORT);

    app.use(bodyParser.json());

    app.use('/api', FlightIndicatorRoutes);

    app.use(errorHandler.handleServerError);

    app.listen(port, () => console.log(`Server listening on port ${port}`));

    console.log(`Express server has started on port ${port}.`);
}).catch(error => console.error(error));

