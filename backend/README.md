# Task Management API

A scalable REST API built with Node.js, Express.js, MongoDB Atlas, and JWT Authentication. This project implements secure user authentication, role-based access control (RBAC), and CRUD operations for task management.

## Features

### Authentication

* User Registration
* User Login
* Password Hashing using bcryptjs
* JWT Authentication
* Protected Routes

### Authorization

* Role-Based Access Control (User/Admin)
* Admin-only routes

### Task Management

* Create Task
* Get All User Tasks
* Update Task
* Delete Task

### Validation & Error Handling

* Request Validation using express-validator
* Centralized Error Handling Middleware

### API Documentation

* Swagger UI Documentation

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

---

## Project Structure

backend/

├── src/

│ ├── config/

│ ├── controllers/

│ ├── middleware/

│ ├── models/

│ ├── routes/

│ ├── utils/

│ ├── app.js

│ └── server.js

├── .env

├── package.json

└── README.md

---

## Environment Variables

Create a `.env` file in the root directory.

PORT=8000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

---

## Installation

Clone the repository

git clone <repository-url>

Navigate to backend folder

cd backend

Install dependencies

npm install

Start development server

npm run dev

---

## API Endpoints

### Authentication

POST /api/v1/auth/register

POST /api/v1/auth/login

GET /api/v1/auth/profile

GET /api/v1/auth/admin

### Tasks

POST /api/v1/tasks

GET /api/v1/tasks

PUT /api/v1/tasks/:id

DELETE /api/v1/tasks/:id

---

## Swagger Documentation

Run the application and open:

http://localhost:8000/api-docs

---

## Authentication Flow

1. Register a user.
2. Login using credentials.
3. Receive JWT token.
4. Send token in Authorization header.

Authorization: Bearer <token>

5. Access protected endpoints.

---

## Database Schema

### User

* name
* email
* password
* role

### Task

* title
* description
* status
* user

---

## Security Features

* Password hashing using bcryptjs
* JWT-based authentication
* Protected routes
* Role-based authorization
* Request validation
* Error handling middleware

---

## Scalability Considerations

Current Architecture:

* Modular Monolithic Architecture

Future Improvements:

* Redis Caching
* Docker Containerization
* Microservices Architecture
* Load Balancing
* Centralized Logging
* CI/CD Pipeline
* AWS Deployment

---

## Author

Mayank Pathak
