function Task({ task, toggleTask }) {
  return (
    <div>
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={() => toggleTask(task.id)}
      />
      <span style={{ textDecoration: task.isDone ? "line-through" : "none" }}>
        {task.text}
      </span>
    </div>
  );
}

export default Task;

