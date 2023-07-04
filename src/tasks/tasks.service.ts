import { Injectable } from '@nestjs/common';
import { TaskData } from '../data/tasks';
import { Task, TaskStatus } from './task.entity';
import { v4 as uuid } from 'uuid';
import { updateTaskDTO } from './dto/task.dto';

@Injectable()
export class TasksService {
  getAllTasks() {
    return TaskData;
  }

  createTask(title: string, description: string) {
    const t: Task = {
      id: uuid(),
      title,
      description,
      status: TaskStatus.PENDING,
    };
    TaskData.push(t);
    return TaskData;
  }

  getTaskById(id: string) {
    return TaskData.find((t) => t.id === id);
  }

  updateTask(id: string, t: updateTaskDTO): Task {
    const task = this.getTaskById(id);
    const newTask = Object.assign(task, t);
    TaskData[findIndexTask(id)] = newTask;
    return newTask;
  }

  deleteTask(id: string) {
    const indexTask: number = findIndexTask(id);
    return TaskData.splice(indexTask, 1);
  }
}

//utils
const findIndexTask = (id: string) => {
  return TaskData.findIndex((t) => t.id === id);
};
