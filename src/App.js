import { useState } from "react";

import Task from "./components/Task";
import Header from "./components/Header";
import tasksData from "./data/tasks";

function App() {
  const [tasks, setTasks] = useState(tasksData);

  const openTasks = tasks.filter((task) => !task.isDone);
  const closedTasks = tasks.filter((task) => task.isDone);

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    );
  };

  const startEditing = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, isEditing: true } : task
      )
    );
  };
  
  const saveTask = (id, newText) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, text: newText, isEditing: false } : task
      )
    );
  };

  return (
    <div className="wrapper clear p-30">
      <Header />
      <div className="container">
        <div className="container-tasks">
          <div className="container-tasks__opened">
            {openTasks.map((task) => (
              <Task key={task.id} task={task} toggleTask={toggleTask} startEditing={startEditing}
              saveTask={saveTask} />
            ))}
          </div>
          <div className="container-tasks__add">
            <button className="button-new-task" type="button">
              + Новый пункт
            </button>

            {/* <button className="button-add">Добавить</button> */}
          </div>
          <div className="container-tasks__closed mt-30">
            {closedTasks.map((task) => (
              <Task key={task.id} task={task} toggleTask={toggleTask} startEditing={startEditing}
              saveTask={saveTask} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
