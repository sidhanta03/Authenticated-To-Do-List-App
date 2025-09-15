# 📋 MERN Todo App

A full-stack Todo application built with **MongoDB, Express.js, React (Vite), and Node.js**, styled using **Tailwind CSS**.  
Users can **sign up, log in, add tasks, update, and delete tasks** securely.

---

## ⚡ Quick Test with Dummy Data

If you want to quickly test the deployed app, you can use the **Vercel frontend link**:  
[https://authenticated-to-do-list-app.vercel.app/](https://authenticated-to-do-list-app.vercel.app/)

### Dummy User Credentials
| Field      | Value                 |
|------------|----------------------|
| Username   | testuser             |
| Email      | testuser@gmail.com   |
| Password   | 123456               |

> ✅ Use these credentials to log in and test adding, editing, and deleting tasks.
---

## 🚀 Tech Stack
- **Frontend:** React (Vite) + Tailwind CSS + Axios + React Router  
- **Backend:** Node.js + Express.js + MongoDB + JWT Authentication  
- **Database:** MongoDB (Atlas or local)  
- **Other:** dotenv for environment variables  

---

## 📂 Project Structure
```bash
MERN_TODO_APP/
│
├── backend/ # Express.js + MongoDB server
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── index.js
│ ├── package.json
│ └── .env
│
├── frontend/ # React + Vite + Tailwind CSS client
│ ├── src/
│ ├── public/
│ ├── index.html
│ ├── package.json
│ └── .env
│
└── README.md
```


---

## 🔧 Backend Setup

1. **Go inside backend folder:**
```bash
cd backend
```

2. **Install dependencies:**
```bash
npm install
```

3. **Create a .env file in backend/ and add:**
```bash
PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
```

4. **Start the server:**
```bash
npm start
```

---

## 🎨 Frontend Setup

**Go inside frontend folder:**
```bash
cd frontend
```

1. **Install dependencies:**
```bash
npm install
```

2. **Create a .env file in frontend/ and add:**
```bash
VITE_API_URL=http://localhost:5000
```

**⚠️ After backend deployment, replace VITE_API_URL with your Render backend URL.**

3. **Start the client:**
```bash
npm run dev
```

---

## 🛠 Features
```bash
🔐 User authentication (Register/Login with JWT)

🔑 Secure password hashing (bcrypt)

📝 Add, edit, delete tasks

📌 Fetch tasks per logged-in user

🎨 Tailwind CSS responsive UI
```

---

## 📡 API Documentation
```bash
🔑 Auth Routes
Method	Endpoint	Description	Body Example
POST	/auth/register	Register new user	{ "username": "test", "email": "test@gmail.com", "password": "123456" }
POST	/auth/login	Login & get JWT	{ "email": "test@gmail.com", "password": "123456" }
```
## 📋 Task Routes (Protected with JWT)
```bash
Method	Endpoint	Description	Body Example
GET	/tasks	Get all tasks of user	—
POST	/tasks	Create new task	{ "title": "Learn MERN", "completed": false }
PUT	/tasks/:id	Update task	{ "completed": true }
DELETE	/tasks/:id	Delete task	—
```

## 📝 Environment Variables

### Backend (`/backend/.env`)
```bash
PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
```
### Frontend (/frontend/.env)
```bash
VITE_API_URL=Your API Url
```

### 📜 Scripts
**Backend**
```bash
npm start      # Start server
```

**Frontend**
```bash
npm run dev    # Run development server
```
