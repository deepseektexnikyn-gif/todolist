import { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { findUser } from '../utils/users';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/dashboard';

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');

    const user = findUser(username.trim(), password);

    if (user) {
      localStorage.setItem('user', user.username);
      localStorage.setItem('role', user.role);
      navigate(from, { replace: true });
    } else {
      setError('Неверный логин или пароль');
    }
  };

  return (
    <div className="form-box">
      <h1>Вход</h1>

      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Логин"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          autoComplete="username"
        />
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />

        {error && <p className="error">{error}</p>}
        <button type="submit">Войти</button>
      </form>

      <p className="hint">
        Нет аккаунта? <Link to="/register">Зарегистрироваться</Link>
      </p>

      <div className="demo-info">
        <b>Тестовые аккаунты:</b>
        <ul>
          <li>admin / 1234 — админ</li>
          <li>manager / 1234 — менеджер</li>
          <li>user / 1234 — пользователь</li>
        </ul>
      </div>
    </div>
  );
}

export default Login;