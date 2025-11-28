import React from 'react';
import { Task } from '@/utils/formatTask';

interface TaskCardProps {
  task: Task;
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  return (
    <div className="task-card">
      <h3 className="font-bold text-lg">{task.title}</h3>
      <p>{task.description}</p>
    </div>
  );
};

export default TaskCard;