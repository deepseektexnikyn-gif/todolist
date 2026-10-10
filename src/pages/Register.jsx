import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { addUser } from '../utils/users';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [role, setRole] = useState('user');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    setError('');

    const trimmed = username.trim();

    if (trimmed.length < 3) return setError('Логин минимум 3 символа');
    if (password.length < 4) return setError('Пароль минимум 4 символа');
    if (password !== confirm) return setError('Пароли не совпадают');

    const result = addUser({ username: trimmed, password, role });
    if (!result.ok) return setError(result.error);

    alert('Регистрация успешна! Войдите.');
    navigate('/login');
  };

  return (
    <div className="form-box">
      <h1>Регистрация</h1>

      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Логин"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Подтвердите пароль"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
        />
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="user">Пользователь</option>
          <option value="manager">Менеджер</option>
          <option value="admin">Администратор</option>
        </select>

        {error && <p className="error">{error}</p>}
        <button type="submit">Зарегистрироваться</button>
      </form>

      <p className="hint">
        Уже есть аккаунт? <Link to="/login">Войти</Link>
      </p>
    </div>
  );
}

export default Register;