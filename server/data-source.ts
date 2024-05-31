import { DataSource } from "typeorm";
import { FlightIndicator } from "./src/entities/FlightIndicator";
require('dotenv').config();

export const AppDataSource: DataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [FlightIndicator],
    synchronize: false,
});