import { Level } from "src/enums/LevelType";
import { Status } from "src/enums/StatusType";
import { Column, Entity, PrimaryGeneratedColumn, Timestamp } from "typeorm";

@Entity()
export class Task {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: "varchar", length: 300 })
    task: string

    @Column({ type: "varchar", length: 1000, default: '' })
    description: string

    @Column({ type: 'date', default: () => 'NOW()' })
    date: Date

    @Column({ type: 'time' })
    start_time: string

    @Column({ type: 'time' })
    end_time: string

    @Column({ type: 'boolean', default: false })
    isDeleted: boolean

    @Column({ enum: Level, default: null })
    level: Level

    @Column({ enum: Status, default: Status.UNDONE })
    status: Status
}