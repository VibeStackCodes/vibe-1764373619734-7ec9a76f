export interface Task {
  id: string;
  title: string;
  description: string;
  status: string;
}

export const formatTask = (task: any): Task => {
  return {
    id: task.id,
    title: task.title,
    description: task.description,
    status: task.status,
  };
};