import { IsEnum } from 'class-validator';
import { TaskStatus } from '../task.model';

export class UpdateTaskStatusDto {
  // IsEnum check that values sent by the user are one of the enum values
  @IsEnum(TaskStatus)
  status: TaskStatus;
}
