import { TaskStatus } from '../task.entity';
import {
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class createTaskDTO {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  title: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  description: string;
}
export class updateTaskDTO {
  @IsString()
  @MinLength(3)
  @IsOptional()
  title?: string;

  @IsString()
  @MinLength(5)
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  @IsEnum(TaskStatus)
  status?: TaskStatus;
}
