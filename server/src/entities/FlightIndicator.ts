import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class FlightIndicator {

    @PrimaryGeneratedColumn()
    ID: number;

    @Column()
    ALT: number;

    @Column()
    HIS: number;

    @Column()
    ADI: number;

}