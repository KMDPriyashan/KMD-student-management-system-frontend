# SMS Portal

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=323330)](https://developer.mozilla.org/docs/Web/JavaScript)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)

**SMS Portal** is a responsive student management dashboard for educational institutions. It provides a clean interface for managing students, courses, instructors, and library books while connecting to a Spring Boot backend through REST APIs.

![SMS Portal Dashboard](assets/images/Student%20Management%20Dashboard%20Workspace.png)

---

## Overview

The application is organized around four core academic management areas:

- **Students** - personal, academic, and contact records
- **Courses** - course codes, duration, fees, credits, and descriptions
- **Instructors** - staff profiles, subjects, and contact details
- **Library** - ISBN records, authors, categories, and available stock

The current frontend uses static HTML pages, custom CSS, Bootstrap 5, Font Awesome, and vanilla JavaScript.

## Key Features

- Responsive navigation and layouts
- Dedicated management pages for every module
- Bootstrap modal forms for adding records
- Student, course, instructor, and book search interfaces
- Clear success and error feedback for API requests
- Consistent cards, tables, pagination, badges, and action controls
- Ready-to-use course search filtering
- Postman collection for backend API testing

## Pages

| Page | Description |
| --- | --- |
| `index.html` | Home page, product introduction, module cards, and dashboard preview |
| `student.html` | Student management and add-student form |
| `course.html` | Course management, search, and add-course form |
| `instructor.html` | Instructor management and add-instructor form |
| `book.html` | Library management and add-book form |

## Technology Stack

| Area | Technology |
| --- | --- |
| Structure | HTML5 |
| Styling | CSS3, Bootstrap 5 |
| Icons | Font Awesome 6 |
| Typography | Google Fonts - Poppins |
| Frontend logic | JavaScript (Fetch API) |
| Backend | Spring Boot REST APIs |
| API testing | Postman |

## Project Structure

```text
KMD-student-management-system-frontend/
├── assets/
│   ├── css/
│   │   ├── homePage.css
│   │   ├── student.css
│   │   ├── course.css
│   │   ├── instructor.css
│   │   └── book.css
│   ├── js/
│   │   ├── student.js
│   │   ├── course.js
│   │   ├── instructor.js
│   │   └── book.js
│   └── images/
│       └── Student Management Dashboard Workspace.png
├── postman/
│   └── collections/
├── index.html
├── student.html
├── course.html
├── instructor.html
└── book.html
```

## Getting Started

### Prerequisites

- A modern web browser
- A local HTTP server
- The Spring Boot backend running on port `8080`
- Network access for Bootstrap, Font Awesome, and Google Fonts CDNs

### 1. Clone the repository

```bash
git clone https://github.com/KMDPriyashan/KMD-student-management-system-frontend.git
cd KMD-student-management-system-frontend
```

### 2. Start the frontend

Use VS Code Live Server or run a local server with Python:

```bash
python -m http.server 5500
```

Then open:

```text
http://localhost:5500/index.html
```

### 3. Start the backend

Start the Spring Boot application and ensure it is available at:

```text
http://localhost:8080
```

The frontend also requires the backend to allow browser CORS requests and expose the API endpoints shown below.

## REST API Integration

The frontend sends JSON requests to the following default endpoints:

| Module | Method | Endpoint |
| --- | --- | --- |
| Students | `POST` | `http://localhost:8080/student/add` |
| Courses | `POST` | `http://localhost:8080/course/add` |
| Instructors | `POST` | `http://localhost:8080/instructor/add` |
| Books | `POST` | `http://localhost:8080/book/add` |

### Student payload

```json
{
  "indexNumber": "ST004-2026",
  "fullName": "Dulash Priyashan",
  "nic": "200114002793",
  "dateOfBirth": "2001-05-19",
  "address": "Gampaha",
  "gender": "Male",
  "phoneNumber": "0724719902",
  "email": "priyashan@example.com"
}
```

### Course payload

```json
{
  "code": "C004",
  "name": "Java Spring Boot",
  "description": "Full-stack Java application development",
  "fee": 45000,
  "duration": "6 Months",
  "credit": 3
}
```

## Configuration

API URLs are currently defined directly in the JavaScript files:

- `assets/js/student.js`
- `assets/js/course.js`
- `assets/js/instructor.js`
- `assets/js/book.js`

For deployment, replace `http://localhost:8080` with the public backend URL in each module or centralize the API configuration in a shared JavaScript configuration file.

## Current Implementation Status

The interface provides record creation and local search behavior. Table rows and pagination are currently demonstration data and are not yet loaded from backend GET endpoints.

Items still planned or under development:

- Load and refresh records from the backend
- Edit and delete operations
- Role-based authentication and authorization
- Client-side and server-side validation improvements
- API configuration through environment variables
- Loading states and reusable notifications
- Automated frontend tests

## Browser Support

The interface targets modern versions of Chrome, Edge, Firefox, and Safari.

## Contributing

Contributions are welcome.

1. Fork the repository.
2. Create a feature branch.
3. Make your changes.
4. Test the affected pages in a browser.
5. Open a pull request with a clear description.

## Author

**KMD Priyashan**  
GitHub: [@KMDPriyashan](https://github.com/KMDPriyashan)

---

<p align="center">
  Built for simple, accessible, and efficient educational administration.
</p>
