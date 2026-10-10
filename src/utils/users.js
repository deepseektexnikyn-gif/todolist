const USERS_KEY = 'auth_users';

const DEFAULT_USERS = [
  { username: 'admin',   password: '1234', role: 'admin'   },
  { username: 'manager', password: '1234', role: 'manager' },
  { username: 'user',    password: '1234', role: 'user'    },
];

export function initUsers() {
  try {
    if (!localStorage.getItem(USERS_KEY)) {
      localStorage.setItem(USERS_KEY, JSON.stringify(DEFAULT_USERS));
    }
  } catch (err) {
    console.warn('Ошибка initUsers:', err);
  }
}

export function getUsers() {
  try {
    const raw = localStorage.getItem(USERS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function findUser(username, password) {
  return getUsers().find(
    (u) => u.username === username && u.password === password
  );
}

export function userExists(username) {
  return getUsers().some((u) => u.username === username);
}

export function addUser({ username, password, role = 'user' }) {
  if (userExists(username)) {
    return { ok: false, error: 'Пользователь с таким логином уже существует' };
  }
  const users = getUsers();
  users.push({ username, password, role });
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
  return { ok: true };
}

export function deleteUser(username) {
  if (username === 'admin') {
    return { ok: false, error: 'Нельзя удалить главного администратора' };
  }
  const users = getUsers().filter((u) => u.username !== username);
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
  // Удаляем задачи этого пользователя
  localStorage.removeItem(`tasks_${username}`);
  return { ok: true };
}