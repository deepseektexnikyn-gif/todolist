# Todo-лист с авторизацией

Объединённый проект: Todo-лист (Практика №1) + Авторизация (Практика №3).

## 🚀 Функционал
- Регистрация, вход, выход
- Разграничение по ролям (user / manager / admin)
- Защищённые маршруты (PrivateRoute, AdminRoute)
- Todo-лист у каждого пользователя — свой
- Фильтр по категориям, счётчик задач
- Сохранение в localStorage

## 🛠️ Технологии
- React 18, react-router-dom 6
- Vite
- CSS3

## 📦 Запуск
\`\`\`bash
npm install
npm run dev
\`\`\`

## 🔑 Тестовые аккаунты
| Логин | Пароль | Роль |
|---|---|---|
| admin | 1234 | admin |
| manager | 1234 | manager |
| user | 1234 | user |

## 📁 Структура
\`\`\`
src/
├── main.jsx
├── App.jsx
├── App.css
├── utils/
│   ├── users.js
│   └── tasks.js
├── components/
│   ├── Navbar.jsx
│   ├── PrivateRoute.jsx
│   ├── AdminRoute.jsx
│   ├── TaskForm.jsx
│   ├── TaskList.jsx
│   └── CategoryFilter.jsx
└── pages/
    ├── Home.jsx
    ├── Login.jsx
    ├── Register.jsx
    ├── Dashboard.jsx
    ├── Profile.jsx
    ├── AdminPanel.jsx
    ├── Users.jsx
    └── NotFound.jsx
\`\`\`

## 📸 Скриншоты
Добавьте свои скриншоты в папку screenshots/:
- главная
- форма входа
- todo-лист с задачами
- админ-панель
- таблица пользователей

## 👤 Автор
Ваше Имя — [GitHub](https://github.com/username)# todo-auth-app
