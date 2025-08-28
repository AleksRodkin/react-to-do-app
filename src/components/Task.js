function Task({ task, toggleTask, startEditing, saveTask }) {
  return (
    <div className="task">
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={() => toggleTask(task.id)}
        style={{ accentColor: "grey" }}
      />
      {task.isEditing ? (
        <input
          type="text"
          defaultValue={task.text}
          autoFocus
          onBlur={(e) => saveTask(task.id, e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") saveTask(task.id, e.target.value);
          }}
        />
      ) : (
        <span
          style={{ textDecoration: task.isDone ? "line-through" : "none" }}
          onDoubleClick={() => startEditing(task.id)}
        >
          {task.text}
        </span>
      )}
    </div>
  );
}

export default Task;

