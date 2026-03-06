# Student Management App

A full-stack Student Management Application built with **Spring Boot** (REST API) and **React.js**, featuring CRUD operations, JWT-based admin authentication, and student data management with a **MySQL** database.

Live Demo: [Student Management Application](https://student.akhilrt.com)

---

## Features

- Secure Admin Authentication with JWT (Login / Logout)
- Protected Routes — all dashboard pages require a valid token
- Full CRUD Operations — Add, View, Edit, Delete students
- Paginated Student List
- Admin Dashboard with live stats
- REST API backend with Spring Boot
- Responsive UI built with React.js

---

## Tech Stack

| Layer      | Technology                        |
|------------|-----------------------------------|
| Frontend   | React.js                          |
| Backend    | Spring Boot (Java)                |
| Database   | MySQL                             |
| Auth       | JWT (JSON Web Token)              |
| Styling    | CSS                               |
| Deployment | Vercel (Frontend)                 |
|            | Render (Backend)                  |
|            | Railway (MySQL Database)          |

---

## Getting Started

### Prerequisites

- Java 17+
- Node.js 18+
- MySQL 8+
- Maven

---

### 1. Clone the Repository
```bash
git clone https://github.com/iakhilrt/student-management-app.git
cd student-management-app
```

---

### 2. Backend Setup (Spring Boot)
```bash
cd backend
```

Configure `src/main/resources/application.properties`:
```properties
spring.application.name=student-management

spring.datasource.url=${DB_URL}
spring.datasource.username=${DB_USERNAME}
spring.datasource.password=${DB_PASSWORD}
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

spring.jpa.database-platform=org.hibernate.dialect.MySQL8Dialect
spring.jpa.hibernate.ddl-auto=update

server.port=${PORT:8080}

jwt.secret=${JWT_SECRET}
jwt.expiration=86400000
```

Set these environment variables (or in Render dashboard):
```
DB_URL=jdbc:mysql://your_host/student_db
DB_USERNAME=your_username
DB_PASSWORD=your_password
JWT_SECRET=your_jwt_secret_key
```

Run the backend:
```bash
mvn spring-boot:run
```

Backend runs on: `http://localhost:8080`

---

### 3. Frontend Setup (React)
```bash
cd frontend
npm install
npm run dev
```

Create a `.env` file inside the `frontend/` directory:
```dotenv
VITE_API_URL=http://localhost:8080
```

> For production, replace with your Render backend URL:
> `VITE_API_URL=https://your-app.onrender.com`

Frontend runs on: `http://localhost:5173`

---

## API Endpoints

| Method   | Endpoint                          | Description              | Auth Required |
|----------|-----------------------------------|--------------------------|---------------|
| `POST`   | `/api/admin/login`                | Admin login              | ❌            |
| `GET`    | `/api/students`                   | Get all students (paged) | ✅            |
| `GET`    | `/api/students/{id}`              | Get student by ID        | ✅            |
| `POST`   | `/api/students/register`          | Add a new student        | ✅            |
| `PUT`    | `/api/students/update/{id}`       | Update student           | ✅            |
| `DELETE` | `/api/students/delete/{id}`       | Delete student           | ✅            |

> All protected endpoints require the header:
> `Authorization: Bearer <token>`

---

## Database Setup
```sql
CREATE DATABASE student_db;
```

Spring Boot will auto-create the required tables on first run.

---

## Project Structure
```
student-management-app/
├── backend/
│   ├── src/
│   │   └── main/
│   │       ├── java/com/student/studentmanagement/
│   │       │   ├── config/
│   │       │   ├── controller/
│   │       │   ├── filter/
│   │       │   ├── model/
│   │       │   ├── repository/
│   │       │   ├── response/
│   │       │   ├── service/
│   │       │   └── util/
│   │       └── resources/
│   │           └── application.properties
│   └── pom.xml
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.jsx
│   ├── .env
│   ├── package.json
│   └── vercel.json
└── README.md
```

---

## Screenshots

### Landing Page
![Landing](screenshots/Landing.png)

### Admin Login
![Login](screenshots/Login.png)

### Dashboard
![Dashboard](screenshots/Dashboard.png)

### Student List
![StudentList](screenshots/StudentList.png)

### Add Student
![AddStudent](screenshots/AddStudent.png)

### Student Details
![ViewStudent](screenshots/ViewStudent.png)

---

## License

This project is open-source under the [MIT License](LICENSE).

---

## Author

**Akhil RT** — [@iakhilrt](https://github.com/iakhilrt)
