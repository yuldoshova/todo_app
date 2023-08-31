require('dotenv').config()
import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Task } from "src/task/entities/task.entity";

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    password: process.env.DB_PASSWORD,
    username: process.env.DB_USERNAME,
    entities: [Task],
    database: process.env.DB_NAME,
    synchronize: true,
    logging: false,
}
