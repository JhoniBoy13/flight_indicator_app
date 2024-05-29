import {DataSource} from "typeorm";
import {FlightIndicator} from "./src/entities/FlightIndicator";
import "reflect-metadata"

export const MysqlDataSource: DataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: 'root',
    password: 'Yoni130904',
    database: 'FlightIndicatorDB',
    entities: [FlightIndicator],
    synchronize: true,
})


