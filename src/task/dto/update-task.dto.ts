import { IsDate, IsEnum, IsInt, IsString } from 'class-validator';
import { Level } from 'src/enums/LevelType';
import { Status } from 'src/enums/StatusType';

export class UpdateTaskDto {

    @IsInt()
    id?: number

    @IsString()
    task?: string

    @IsString()
    description?: string

    @IsDate()
    date?: Date

    @IsString()
    start_time?: string

    @IsString()
    end_time?: string

    @IsEnum({ enum: Level })
    level?: Level

    @IsEnum({ enum: Status })
    status?: Status
}
