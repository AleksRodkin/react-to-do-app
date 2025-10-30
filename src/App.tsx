import { useState } from "react";

import Task from "./components/Task";
import Header from "./components/Header";
import tasksData from "./data/tasks";
import type { TaskType } from "./types";

const App = () => {
  const [tasks, setTasks] = useState<TaskType[]>(tasksData);

  const openTasks = tasks.filter((task) => !task.isDone);
  const closedTasks = tasks.filter((task) => task.isDone);

  const toggleTask = (id: number) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    );
  };

  const addNewTask = () => {
    const newTask: TaskType = {
      id: Date.now(),
      text: "",  
      isDone: false,            
      isEditing: true        
    };
    setTasks((prev) => [...prev, newTask]);
  };

  const startEditing = (id: number) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, isEditing: true } : task
      )
    );
  };
  
  const saveTask = (id: number, newText: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, text: newText, isEditing: false } : task
      )
    );
  };

  const deleteTask = (id: number) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <div className="wrapper clear p-30">
      <Header />
      <div className="container">
        <div className="container-tasks">
          <div className="container-tasks__opened">
            {openTasks.map((task) => (
              <Task key={task.id} task={task} toggleTask={toggleTask} startEditing={startEditing}
              saveTask={saveTask} deleteTask={deleteTask}/>
            ))}
          </div>
          <div className="container-tasks__add">
            <button className="button-new-task" type="button" onClick={addNewTask}>
              + Новый пункт
            </button>
          </div>
          <div className="container-tasks__closed mt-30">
            {closedTasks.map((task) => (
              <Task key={task.id} task={task} toggleTask={toggleTask} startEditing={startEditing}
              saveTask={saveTask} deleteTask={deleteTask} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
