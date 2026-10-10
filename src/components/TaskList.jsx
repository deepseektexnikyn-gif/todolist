function TaskList({ tasks, onToggle, onDelete }) {
  if (!tasks || tasks.length === 0) {
    return <p className="empty">Задач пока нет 🎉</p>;
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task.id} className={`task-item ${task.done ? 'done' : ''}`}>
          <input
            type="checkbox"
            checked={task.done}
            onChange={() => onToggle(task.id)}
            aria-label={`Отметить «${task.title}» выполненной`}
          />
          <span className="task-title">{task.title}</span>
          <span className={`badge badge-${task.category}`}>
            {task.category}
          </span>
          <button
            type="button"
            className="delete-btn"
            onClick={() => onDelete(task.id)}
            aria-label={`Удалить «${task.title}»`}
          >
            ✕
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;