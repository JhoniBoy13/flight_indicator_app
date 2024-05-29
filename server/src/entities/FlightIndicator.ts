import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
@Entity({ name: "FLIGHTINDICATORLOG" })
export class FlightIndicator {

    @PrimaryGeneratedColumn({name: "ID"})
    ID: number;

    @Column({name: "ALT"})
    ALT: number;

    @Column({name: "HIS"})
    HIS: number;

    @Column({name: "ADI", nullable: true}) // Specify that ADI column can be NULL
    ADI: number;
}