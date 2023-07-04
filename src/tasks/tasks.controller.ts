import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { createTaskDTO, updateTaskDTO } from './dto/task.dto';
import { Task } from './task.entity';

@Controller('tasks')
export class TasksController {
  //forma 1 recomendada
  //   private readonly _TasksService: TasksService;
  //   constructor(TasksService: TasksService) {
  //     this._TasksService = TasksService;
  //   }

  //forma 2 no tan recomendada
  // }constructor(private readonly _TasksService: TasksService) {}

  private readonly _TasksService: TasksService;

  constructor(TasksService: TasksService) {
    this._TasksService = TasksService;
  }

  @Get()
  getAllTasks(): Task[] {
    return this._TasksService.getAllTasks();
  }

  @Get(':id')
  getTaskById(@Param('id') id: string): Task {
    return this._TasksService.getTaskById(id);
  }

  @Post()
  createNewTask(@Body() body: createTaskDTO) {
    return this._TasksService.createTask(body.title, body.description);
  }

  @Put(':id')
  updateTask(@Param('id') id: string, @Body() body: updateTaskDTO): Task {
    return this._TasksService.updateTask(id, body);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string): Task[] {
    return this._TasksService.deleteTask(id);
  }
}
