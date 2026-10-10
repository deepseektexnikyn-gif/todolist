import { useState, useEffect } from 'react';
import { getUsers, deleteUser } from '../utils/users';

function Users() {
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState('');

  const refresh = () => setUsers(getUsers());

  useEffect(() => {
    refresh();
  }, []);

  const handleDelete = (username) => {
    if (!window.confirm(`Удалить пользователя «${username}»?`)) return;
    const result = deleteUser(username);
    if (!result.ok) setMessage(result.error);
    else {
      setMessage('');
      refresh();
    }
  };

  return (
    <div>
      <h1>Пользователи</h1>
      <p>Всего: {users.length}</p>

      {message && <p className="error">{message}</p>}

      <table className="users-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Логин</th>
            <th>Роль</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u, i) => (
            <tr key={u.username}>
              <td>{i + 1}</td>
              <td>{u.username}</td>
              <td>{u.role}</td>
              <td>
                <button
                  onClick={() => handleDelete(u.username)}
                  disabled={u.username === 'admin'}
                >
                  Удалить
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;