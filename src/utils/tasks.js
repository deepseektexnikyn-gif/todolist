// Ключ задач зависит от пользователя:
// tasks_admin, tasks_manager, tasks_student ...
function keyFor(username) {
  return `tasks_${username}`;
}

export function loadTasks(username) {
  if (!username) return [];
  try {
    const raw = localStorage.getItem(keyFor(username));
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (err) {
    console.warn('Ошибка чтения задач:', err);
    return [];
  }
}

export function saveTasks(username, tasks) {
  if (!username) return;
  try {
    localStorage.setItem(keyFor(username), JSON.stringify(tasks));
  } catch (err) {
    console.warn('Ошибка сохранения задач:', err);
  }
}