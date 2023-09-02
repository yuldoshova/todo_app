import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TaskService {

  constructor(
    @InjectRepository(Task)
    private readonly taskRepo: Repository<Task>
  ) { }

  async create(create: CreateTaskDto) {
    const isExist = await this.taskRepo.findOneBy({ task: create.task })
    if (isExist) {
      throw new ConflictException("Already exists!!!")
    }

    const newTask = new Task()
    newTask.task = create.task;
    newTask.description = create.description;
    newTask.date = create.date;
    newTask.start_time = create.start_time;
    newTask.end_time = create.end_time
    newTask.level = create.level
    return this.taskRepo.save(newTask)
  }

  findAll() {
    return this.taskRepo.find();
  }

  findOne(id: number) {
    return this.taskRepo.findOneBy({ id });
  }

  async update({ ...update }) {
    const isExist = await this.taskRepo.findOneBy({ id: update.id })
    if (!isExist) {
      throw new NotFoundException("This user not found!!!")
    }
    isExist.task = update.task;
    isExist.description = update.description
    isExist.date = update.date;
    isExist.start_time = update.start_time;
    isExist.end_time = update.end_time
    isExist.level = update.level

    return this.taskRepo.save(isExist)
  }

  async delete(id: number, softDelete: boolean) {
    const isExist = await this.taskRepo.findOneBy({ id })
    if (!isExist) {
      throw new NotFoundException("This task not found!!!")
    }

    if (softDelete) {
      await this.taskRepo.delete({ id })
      return "Successfully deleted!!!"
    }
    else {
      isExist.isDeleted = true
      return isExist;
    }
  }
}
