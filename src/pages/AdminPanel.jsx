import { Link } from 'react-router-dom';

function AdminPanel() {
  return (
    <div>
      <h1>Админ-панель</h1>
      <p>Доступ только для администратора.</p>
      <Link to="/admin/users">→ Управление пользователями</Link>
    </div>
  );
}
export default AdminPanel;