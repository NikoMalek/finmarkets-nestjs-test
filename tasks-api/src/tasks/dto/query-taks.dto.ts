import { IsEnum, IsOptional } from 'class-validator';
import { TaskPriority, TaskStatus } from '../entities/task.entity';

export class QueryTaskDto {
  @IsOptional()
  @IsEnum(TaskStatus)
  status?: TaskStatus;

  @IsOptional()
  @IsEnum(TaskPriority)
  priority?: TaskPriority;
}