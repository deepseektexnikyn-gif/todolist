function Profile() {
  const user = localStorage.getItem('user');
  const role = localStorage.getItem('role');

  return (
    <div>
      <h1>Профиль</h1>
      <p>Вы вошли как: <b>{user}</b></p>
      <p>Роль: <b>{role}</b></p>
    </div>
  );
}
export default Profile;