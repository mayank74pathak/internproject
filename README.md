<img width="597" h<img width="1031" height="696" alt="Screenshot 2026-06-09 at 10 54 57 PM" src="https://github.com/user-attachments/assets/8a39a5de-80cf-47f9-a53c-91afe950d2a6" />
<img width="711" height="714" alt="Screenshot 2026-06-09 at 10 53 53 PM" src="https://github.com/user-attachments/assets/2cbe8d28-bde7-43c3-a79c-8f1d792694d5" />
<img width="956" height="623" alt="Screenshot 2026-06-09 at 10 54 27 PM" src="https://github.com/user-attachments/assets/309d264f-4d2f-45b1-b37c-7fa42f7595dd" />
<img width="702" height="649" alt="Screenshot 2026-06-09 at 10 53 33 PM" src="https://github.com/user-attachments/assets/72661865-cfd0-47b3-a2f9-8edbe53177f5" />
eight="566" alt="Screenshot 2026-06-09 at 10 55 16 PM" src="https://github.com/user-attachments/assets/4891c41f-3491-48b6-aea0-1d53137376ca" />
# Task Management System

A full-stack Task Management application built with **Node.js, Express.js, MongoDB Atlas, React.js, JWT Authentication, Role-Based Access Control (RBAC), and Docker**.

## Features

### Backend

* User Registration
* User Login
* Password Hashing using bcryptjs
* JWT Authentication
* Protected Routes
* Role-Based Access Control (Admin/User)
* Task CRUD Operations
* Request Validation using express-validator
* Global Error Handling Middleware
* Swagger API Documentation
* MongoDB Atlas Integration
* REST API Versioning (`/api/v1`)

### Frontend

* User Registration Page
* User Login Page
* Protected Dashboard
* Create Task
* View Tasks
* Update Tasks
* Delete Tasks
* Logout Functionality

---

## Tech Stack

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JWT
* bcryptjs
* express-validator
* Swagger

### Frontend

* React.js
* Vite
* Axios
* React Router DOM

### DevOps

* Docker
* Docker Compose

---

## Project Structure

```text
internproject/
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── app.js
│   │   └── server.js
│   │
│   ├── Dockerfile
│   ├── .dockerignore
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── Dockerfile
│   ├── .dockerignore
│   └── package.json
│
├── docker-compose.yml
│
└── README.md
```

---

## Environment Variables

Create a `.env` file inside the backend folder.

```env
PORT=8000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

---

## Backend Installation

```bash
cd backend

npm install

npm run dev
```

Backend runs on:

```text
http://localhost:8000
```

---

## Frontend Installation

```bash
cd frontend

npm install

npm run dev
```

Frontend runs on:

```text
http://localhost:3000
```

---

## Docker Setup

### Run Complete Application

```bash
docker compose up --build
```

### Services

Frontend:

```text
http://localhost:3000
```

Backend:

```text
http://localhost:8000
```

Swagger:

```text
http://localhost:8000/api-docs
```

---

## API Endpoints

### Authentication

| Method | Endpoint              | Description      |
| ------ | --------------------- | ---------------- |
| POST   | /api/v1/auth/register | Register User    |
| POST   | /api/v1/auth/login    | Login User       |
| GET    | /api/v1/auth/profile  | Get User Profile |
| GET    | /api/v1/auth/admin    | Admin Route      |

---

### Tasks

| Method | Endpoint          | Description |
| ------ | ----------------- | ----------- |
| POST   | /api/v1/tasks     | Create Task |
| GET    | /api/v1/tasks     | Get Tasks   |
| PUT    | /api/v1/tasks/:id | Update Task |
| DELETE | /api/v1/tasks/:id | Delete Task |

---

## Authentication Flow

1. Register a new user.
2. Login with credentials.
3. Receive JWT token.
4. Store JWT in localStorage.
5. Send JWT in Authorization header.

```text
Authorization: Bearer <token>
```

6. Access protected routes.

---

## Database Schema

### User

```js
{
  name: String,
  email: String,
  password: String,
  role: String
}
```

### Task

```js
{
  title: String,
  description: String,
  status: String,
  user: ObjectId
}
```

---

## Security Features

* Password Hashing using bcryptjs
* JWT Authentication
* Protected Routes
* Role-Based Authorization
* Input Validation
* Global Error Handling
* Secure API Design

---

## Swagger Documentation

Open:

```text
http://localhost:8000/api-docs
```

Interactive API documentation is available using Swagger UI.

---

## Screenshots

### Login Page

(Add Screenshot)

### Register Page

(Add Screenshot)

### Dashboard

(Add Screenshot)

### Swagger Documentation

(Add Screenshot)

---

## Scalability Considerations

Current Architecture:

* Modular REST API
* JWT Authentication
* MongoDB Atlas
* Role-Based Access Control

Future Enhancements:

* Redis Caching
* Docker Deployment
* Load Balancing
* Microservices Architecture
* CI/CD Pipeline
* AWS Deployment
* Centralized Logging

---

## Author

Mayank Pathak

M.Tech Computer Science, DTU

Backend Developer Internship Assignment
