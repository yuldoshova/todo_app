import { Module } from '@nestjs/common';
import { TaskModule } from './task/task.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './constants/db_config';

@Module({
  imports: [
    TaskModule,
    TypeOrmModule.forRoot(typeOrmConfig),]
})
export class AppModule { }
