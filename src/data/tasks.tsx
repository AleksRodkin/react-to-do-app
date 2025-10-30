import type { Task } from "../types"

const tasks: Task[] = [
  { id: 1, text: "Написать претензию", isDone: false, isEditing: false },
  { id: 2, text: "Забрать почту", isDone: false, isEditing: false },
  { id: 3, text: "Довольно большая заметка с разными словами для проверки переноса слов на другу строку и другие (не)ровности", isDone: false, isEditing: false },
  { id: 4, text: "Потыкать кнопки", isDone: true, isEditing: false },
  { id: 5, text: "Довольно большая заметка с разными словами для проверки переноса слов на другу строку и другие (не)ровности", isDone: true, isEditing: false },
];

export default tasks;
