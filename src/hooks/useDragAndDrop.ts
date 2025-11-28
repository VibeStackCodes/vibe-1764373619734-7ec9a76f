import { useState } from 'react';

const useDragAndDrop = () => {
  const [draggedTask, setDraggedTask] = useState<string | null>(null);

  const handleDragStart = (taskId: string) => {
    setDraggedTask(taskId);
  };

  const handleDrop = (targetId: string) => {
    // Logic to handle drop
    setDraggedTask(null);
  };

  return { draggedTask, handleDragStart, handleDrop };
};

export default useDragAndDrop;