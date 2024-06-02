import { Repository } from 'typeorm/repository/Repository';
import {FlightIndicator} from "../entities/FlightIndicator";
import {AppDataSource} from "../../data-source";

export class FlightIndicatorService {

    private flightIndicatorRepository: Repository<FlightIndicator> = AppDataSource.getRepository(FlightIndicator)
    async createFlightIndicator(flightIndicator: FlightIndicator): Promise<FlightIndicator> {
        return await this.flightIndicatorRepository.save(flightIndicator);
    }
    async findOneById(id: number): Promise<FlightIndicator | undefined> {
        return await this.flightIndicatorRepository.findOneBy({ ID: id });
    }
}