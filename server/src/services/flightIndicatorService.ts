import { getRepository, Repository } from "typeorm";
import { FlightIndicator } from "../entities/FlightIndicator";

export class FlightIndicatorService {
    private flightIndicatorRepository: Repository<FlightIndicator>;

    constructor() {
        this.flightIndicatorRepository = getRepository(FlightIndicator);
    }

    async create(data: Partial<FlightIndicator>): Promise<FlightIndicator> {
        const newFlightIndicator:FlightIndicator = this.flightIndicatorRepository.create(data);
        return await this.flightIndicatorRepository.save(newFlightIndicator);
    }

    async findOneById(id: number): Promise<FlightIndicator | null> {
        return await this.flightIndicatorRepository.findOne({ where: { ID: id } });
    }
}