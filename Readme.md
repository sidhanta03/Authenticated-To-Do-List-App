# MERN Todo App

A full-stack Todo application built with **MongoDB, Express.js, React (Vite), and Node.js**, styled using **Tailwind CSS**.  
Users can **sign up, log in, add tasks, update, and delete tasks** securely.

---

## 🚀 Tech Stack
- **Frontend:** React (Vite) + Tailwind CSS + Axios + React Router
- **Backend:** Node.js + Express.js + MongoDB + JWT Authentication
- **Database:** MongoDB (Atlas or local)
- **Other:** dotenv for environment variables

---

## 📂 Project Structure

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


---

## 🔧 Backend Setup

1. Go inside backend folder:
   ```bash
   cd backend


Install dependencies:

npm install


Create a .env file in backend/ and add:

PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret


Start the server:

npm start


Server runs on: http://localhost:5000

🎨 Frontend Setup

Go inside frontend folder:

cd frontend


Install dependencies:

npm install


Create a .env file in frontend/ and add:

VITE_API_URL=http://localhost:5000


Start the client:

npm run dev


App runs on: http://localhost:5173

🛠 Features

User authentication (Register/Login with JWT)

Secure password hashing (bcrypt)

Add, edit, delete tasks

Fetch tasks per logged-in user

Tailwind CSS responsive UI

📡 API Documentation
Auth Routes
Method	Endpoint	Description	Body Example
POST	/auth/register	Register new user	{ "username": "test", "email": "test@gmail.com", "password": "123456" }
POST	/auth/login	Login user & get JWT	{ "email": "test@gmail.com", "password": "123456" }
Task Routes (Protected with JWT)
Method	Endpoint	Description	Body Example
GET	/tasks	Get all tasks of user	—
POST	/tasks	Create new task	{ "title": "Learn MERN", "completed": false }
PUT	/tasks/:id	Update task	{ "completed": true }
DELETE	/tasks/:id	Delete task	—
📝 Environment Variables
Backend (/backend/.env)
PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret

Frontend (/frontend/.env)
VITE_API_URL=http://localhost:5000

📜 Scripts
Backend
npm start      # Start server

Frontend
npm run dev    # Run development server