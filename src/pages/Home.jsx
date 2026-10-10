import { Link } from 'react-router-dom';

function Home() {
  const user = localStorage.getItem('user');

  return (
    <div>
      <h1>🏠 Добро пожаловать!</h1>
      <p>Это объединённый проект: Todo-лист + авторизация.</p>

      {user ? (
        <p>
          Вы вошли как <b>{user}</b>. Перейти к{' '}
          <Link to="/dashboard">своим задачам</Link>.
        </p>
      ) : (
        <p>
          <Link to="/login">Войдите</Link> или{' '}
          <Link to="/register">зарегистрируйтесь</Link>, чтобы вести свои задачи.
        </p>
      )}
    </div>
  );
}

export default Home;