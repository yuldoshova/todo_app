import { IsEnum, IsNotEmpty, IsString } from "class-validator"
import { Level } from "src/enums/LevelType"
import { Status } from "src/enums/StatusType"

export class CreateTaskDto {

    @IsString()
    @IsNotEmpty()
    task: string

    @IsString()
    description?: string

    @IsString()
    date: Date

    @IsString()
    @IsNotEmpty()
    start_time: string

    @IsString()
    @IsNotEmpty()
    end_time: string

    @IsEnum(Level)
    @IsNotEmpty()
    level: Level

    @IsEnum(Status)
    status?: Status

}
