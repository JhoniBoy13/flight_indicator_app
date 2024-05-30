import * as express from "express"
import {Request, Response} from "express"
import * as bodyParser from "body-parser"
import {AppDataSource} from "../data-source"
import FlightIndicatorRoutes from "./routes/flightIndicatorRoutes";
const handleError = (err: Error, req: Request, res: Response) => {
    console.error(err.stack); // Log the error for debugging
    res.status(500).send('Internal Server Error'); // Send generic error response
};

AppDataSource.initialize().then(async () => {

    const app = express();
    app.use(bodyParser.json());

    app.use('/api', FlightIndicatorRoutes);

    app.use(handleError);

    app.listen(3000, () => console.log(`Server listening on port 3000`));

    console.log("Express server has started on port 3000.");
}).catch(error => console.error(error));