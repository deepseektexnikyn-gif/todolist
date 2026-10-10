import { useState, useEffect } from 'react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import CategoryFilter from '../components/CategoryFilter';
import { loadTasks, saveTasks } from '../utils/tasks';

function Dashboard() {
  const username = localStorage.getItem('user');

  const [tasks, setTasks] = useState(() => loadTasks(username));
  const [filter, setFilter] = useState('Все');

  // Сохраняем задачи при каждом изменении
  useEffect(() => {
    saveTasks(username, tasks);
  }, [tasks, username]);

  const addTask = (title, category) => {
    const newTask = {
      id: Date.now() + Math.random(),
      title,
      category,
      done: false,
    };
    setTasks((prev) => [...prev, newTask]);
  };

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const filteredTasks =
    filter === 'Все' ? tasks : tasks.filter((t) => t.category === filter);

  return (
    <div>
      <h1>📝 Мои задачи</h1>
      <p className="subtitle">Пользователь: <b>{username}</b></p>

      <TaskForm onAdd={addTask} />
      <CategoryFilter current={filter} onChange={setFilter} tasks={tasks} />
      <TaskList
        tasks={filteredTasks}
        onToggle={toggleTask}
        onDelete={deleteTask}
      />

      <p className="stats">
        Всего: <b>{tasks.length}</b> · Выполнено:{' '}
        <b>{tasks.filter((t) => t.done).length}</b> · Осталось:{' '}
        <b>{tasks.filter((t) => !t.done).length}</b>
      </p>
    </div>
  );
}

export default Dashboard;