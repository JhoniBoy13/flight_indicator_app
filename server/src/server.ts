import * as express from "express"
import {Express} from "express"
import * as bodyParser from "body-parser"
import {AppDataSource} from "../data-source"
import FlightIndicatorRoutes from "./routes/flightIndicatorRoutes";
import {handleError} from "./middleware/errorHandler";

AppDataSource.initialize().then(async () : Promise<void> => {

    const app: Express = express();
    app.use(bodyParser.json());

    app.use('/api', FlightIndicatorRoutes);

    app.use(handleError);

    app.listen(3000, () => console.log(`Server listening on port 3000`));

    console.log("Express server has started on port 3000.");
}).catch(error => console.error(error));

