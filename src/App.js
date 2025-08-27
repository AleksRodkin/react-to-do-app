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

  return (
    <div className="wrapper clear p-30">
      <Header />
      <div className="container">
        <div className="container-tasks">
          <div class="container-tasks__opened">
            {openTasks.map((task) => (
              <Task key={task.id} task={task} toggleTask={toggleTask} />
            ))}
          </div>
          <div class="container-tasks__closed">
            {closedTasks.map((task) => (
              <Task key={task.id} task={task} toggleTask={toggleTask} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
