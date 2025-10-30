export interface Task {
  id: number;
  text: string;
  isDone: boolean;
  isEditing: boolean;
}

export interface TaskProps {
  task: Task;
  toggleTask: (id: number) => void;
  startEditing: (id: number) => void;
  saveTask: (id: number, newText: string) => void;
  deleteTask: (id: number) => void;
}

export interface TaskType {
  id: number;
  text: string;
  isDone: boolean;
  isEditing: boolean;
}