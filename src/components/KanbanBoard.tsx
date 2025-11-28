import React from 'react';
import { Task } from '@/utils/formatTask';
import TaskCard from './TaskCard';

interface KanbanBoardProps {
  tasks: Task[];
}

const KanbanBoard: React.FC<KanbanBoardProps> = ({ tasks }) => {
  return (
    <div className="kanban-board">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};

export default KanbanBoard;