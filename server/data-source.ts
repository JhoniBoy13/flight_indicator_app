import "reflect-metadata"
import { DataSource } from "typeorm"
import {FlightIndicator} from "./src/entities/FlightIndicator";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: 'root',
    password: 'Yoni130904',
    database: 'FlightIndicatorDB',
    synchronize: false,
    entities: [FlightIndicator],
    migrations: [],
    subscribers: [],
})