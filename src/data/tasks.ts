import { Task, TaskStatus } from 'src/tasks/task.entity';

export const TaskData: Task[] = [
  {
    id: '1',
    title: 'Task 1',
    description: 'Description 1',
    status: TaskStatus.PENDING,
  },
];
