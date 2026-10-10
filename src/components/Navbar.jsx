import { NavLink, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const user = localStorage.getItem('user');
  const role = localStorage.getItem('role');

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('role');
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <NavLink to="/">Главная</NavLink>

      {user ? (
        <>
          <NavLink to="/dashboard">Мои задачи</NavLink>
          <NavLink to="/profile">Профиль</NavLink>
          {role === 'admin' && <NavLink to="/admin">Админ</NavLink>}

          <span className="nav-user">
            👤 {user} <span className="role-tag">{role}</span>
          </span>
          <button onClick={handleLogout} className="logout-btn">
            Выйти
          </button>
        </>
      ) : (
        <>
          <NavLink to="/login">Войти</NavLink>
          <NavLink to="/register">Регистрация</NavLink>
        </>
      )}
    </nav>
  );
}

export default Navbar;