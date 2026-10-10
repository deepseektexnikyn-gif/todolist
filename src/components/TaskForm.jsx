import { useState } from 'react';

const CATEGORIES = ['Работа', 'Учёба', 'Дом'];

function TaskForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState(CATEGORIES[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = title.trim();
    if (!trimmed) return;

    onAdd(trimmed, category);
    setTitle('');
    setCategory(CATEGORIES[0]);
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Название задачи..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        maxLength={100}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        {CATEGORIES.map((cat) => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
      <button type="submit" disabled={!title.trim()}>Добавить</button>
    </form>
  );
}

export default TaskForm;