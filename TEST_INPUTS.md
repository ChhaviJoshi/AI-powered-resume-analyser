# Test Inputs

This file contains manual text inputs for testing the Resume Analyser project.

Use these test cases while checking backend APIs, frontend forms, or AI report generation.

## Auth Test Inputs

### Register User

Endpoint:

```txt
POST /api/auth/register
```

Body:

```json
{
  "username": "divyansh",
  "email": "divyansh@example.com",
  "password": "divyansh123"
}
```

Expected result:

```txt
User should be registered and token cookie should be set.
```

### Register With Missing Field

Endpoint:

```txt
POST /api/auth/register
```

Body:

```json
{
  "username": "divyansh",
  "email": "divyansh@example.com"
}
```

Expected result:

```txt
Should return "All fields are required".
```

### Login With Username

Endpoint:

```txt
POST /api/auth/login
```

Body:

```json
{
  "identifier": "divyansh",
  "password": "divyansh123"
}
```

Expected result:

```txt
User should be logged in and token cookie should be set.
```

### Login With Email

Endpoint:

```txt
POST /api/auth/login
```

Body:

```json
{
  "identifier": "divyansh@example.com",
  "password": "divyansh123"
}
```

Expected result:

```txt
User should be logged in and token cookie should be set.
```

### Login With Wrong Password

Endpoint:

```txt
POST /api/auth/login
```

Body:

```json
{
  "identifier": "divyansh@example.com",
  "password": "wrongpassword"
}
```

Expected result:

```txt
Should return "Invalid credentials".
```

## Analyze Resume Test Inputs

Endpoint:

```txt
POST /api/ai/analyze
```

Request type:

```txt
multipart/form-data
```

Required fields:

```txt
resume = PDF file
selfDescriptionData = text
jobDescriptionData = text
```

For resume testing, copy the resume text from a test case into a document, export it as PDF, and upload it as the `resume` file.

## Test Case 1 - Full Stack Developer Good Match

### Resume Text

```txt
Divyansh Rajput

B.Tech Information Technology student focused on full stack web development.

Skills:
JavaScript, React, Next.js, Node.js, Express.js, MongoDB, Mongoose, REST APIs, JWT authentication, Docker, Git, GitHub, C++, Data Structures and Algorithms.

Projects:
AI Powered Resume Analyser:
Built a MERN based resume analyser that compares resume data with job descriptions, performs ATS style analysis, identifies skill gaps, and generates interview questions using AI.

Task Management API:
Created backend APIs with Express, MongoDB, JWT authentication, protected routes, and CRUD operations.

Experience:
Built full stack applications using React frontend, Node.js backend, MongoDB database, authentication systems, and API integration.

Achievements:
Solved 180+ DSA problems on LeetCode.
LeetCode contest rating 1533.
```

### Self Description Data

```txt
I am a B.Tech IT student focused on full stack web development. I have experience with MERN stack, REST APIs, JWT authentication, MongoDB, and AI based projects. I am looking for a full stack developer or software development engineer role. I am confident in building backend APIs and connecting them with frontend applications, but I want to improve my system design and communication skills.
```

### Job Description Data

```txt
We are hiring a Full Stack Developer who can build scalable web applications using React, Node.js, Express, and MongoDB. The candidate should understand REST APIs, authentication, database design, Git, deployment, and basic cloud or Docker concepts. Knowledge of AI integration is a plus. The role requires good problem-solving skills and ability to work in a team.
```

Expected result:

```txt
Match score should be high.
Skill gaps should mention system design, cloud, or deeper deployment knowledge.
Questions should focus on MERN, authentication, API design, MongoDB, and project explanation.
```

## Test Case 2 - Backend Developer Good Match

### Resume Text

```txt
Divyansh Rajput

Backend focused developer with experience in Node.js, Express.js, MongoDB, Mongoose, JWT authentication, REST APIs, middleware, file uploads, and API testing.

Skills:
Node.js, Express.js, MongoDB, Mongoose, JWT, bcryptjs, cookie-parser, Multer, REST API, Docker, Git, JavaScript, C++.

Projects:
Resume Analyser Backend:
Created authentication APIs, protected routes, token blacklisting, resume upload middleware, PDF parsing, and AI report generation service.

DeskFlow API:
Built task management backend with users, projects, tasks, authentication, and MongoDB models.

Strengths:
API design, database models, authentication flow, backend debugging, and writing clean controller logic.
```

### Self Description Data

```txt
I prefer backend development and have built authentication systems, REST APIs, MongoDB models, protected routes, and file upload features. I understand Express middleware and controller structure. I want to work as a backend developer and improve my knowledge of scalability, testing, and production deployment.
```

### Job Description Data

```txt
We need a Backend Developer skilled in Node.js, Express, MongoDB, authentication, API security, file handling, and database design. The candidate should write clean APIs, manage protected routes, handle errors, and understand deployment with Docker. Testing experience and knowledge of scalable backend architecture are preferred.
```

Expected result:

```txt
Match score should be high or medium-high.
Skill gaps may include testing, scalable architecture, and production logging.
Questions should focus on Express middleware, JWT, MongoDB schemas, error handling, and Docker.
```

## Test Case 3 - Frontend Developer Partial Match

### Resume Text

```txt
Divyansh Rajput

Full stack developer with stronger experience in backend development and some frontend experience.

Skills:
JavaScript, React, Next.js, Tailwind CSS, Node.js, Express.js, MongoDB, REST APIs, JWT authentication.

Projects:
Resume Analyser:
Built a full stack app with Next.js frontend and Express backend. Created login, signup, navbar, context API, hooks, and service based API calls.

Backend APIs:
Created multiple REST APIs using Node.js and MongoDB.
```

### Self Description Data

```txt
I have frontend experience with React, Next.js, Tailwind CSS, context API, and hooks. My strongest area is still backend development. I can build forms, pages, API calls, and basic layouts, but I am still improving advanced UI design, accessibility, and performance optimization.
```

### Job Description Data

```txt
We are hiring a Frontend Developer with strong React, Next.js, TypeScript, Tailwind CSS, responsive design, accessibility, performance optimization, component architecture, and frontend testing experience. The candidate should be able to build polished user interfaces from Figma designs and maintain reusable components.
```

Expected result:

```txt
Match score should be medium.
Skill gaps should mention TypeScript, accessibility, frontend testing, component architecture, and advanced UI polish.
Questions should focus on React hooks, Next.js rendering, Tailwind layout, and frontend performance.
```

## Test Case 4 - Low Match Data Analyst Role

### Resume Text

```txt
Divyansh Rajput

Full stack web developer focused on MERN stack development.

Skills:
JavaScript, React, Next.js, Node.js, Express, MongoDB, JWT, Docker, Git, C++, DSA.

Projects:
AI Resume Analyser using MERN stack and AI integration.
Task management backend using Express and MongoDB.
```

### Self Description Data

```txt
I am focused on web development and backend APIs. I have worked with JavaScript, Node.js, Express, MongoDB, and React. I have not worked much with data analysis, Python data libraries, dashboards, or machine learning model training.
```

### Job Description Data

```txt
We are looking for a Data Analyst skilled in Python, SQL, Excel, Power BI, Tableau, statistics, data cleaning, dashboard creation, business reporting, and data visualization. The candidate should be able to analyze large datasets and present insights to stakeholders.
```

Expected result:

```txt
Match score should be low.
Skill gaps should include Python, SQL, Power BI, Tableau, statistics, and data visualization.
Questions should focus on transferable skills and missing data analyst skills.
```

## Test Case 5 - Fresher SDE Role

### Resume Text

```txt
Divyansh Rajput

B.Tech IT student and aspiring software development engineer.

Skills:
C++, JavaScript, Data Structures and Algorithms, OOP, DBMS, Computer Networks basics, React, Node.js, Express.js, MongoDB, Git.

Projects:
Resume Analyser:
Full stack AI based project with authentication, resume upload, AI report generation, and MongoDB storage.

API Projects:
Built REST APIs with authentication and CRUD features.

Achievements:
Solved 180+ DSA problems on LeetCode.
Contest rating 1533.
```

### Self Description Data

```txt
I am a fresher looking for SDE roles. I have good knowledge of DSA, C++, JavaScript, MERN stack, and backend API development. I have built real-world projects and I am improving my system design, operating system fundamentals, and interview communication.
```

### Job Description Data

```txt
We are hiring a Software Development Engineer fresher with strong problem-solving skills, DSA, OOP, DBMS, operating systems, computer networks, and one programming language such as C++ or Java. Web development project experience is a plus. The candidate should write clean code and explain technical decisions clearly.
```

Expected result:

```txt
Match score should be medium-high.
Skill gaps should mention operating systems, deeper computer networks, and system design basics.
Questions should focus on DSA, OOP, DBMS, projects, and backend fundamentals.
```

## Protected Route Test Inputs

### Get Current User

Endpoint:

```txt
GET /api/auth/get-me
```

Requirement:

```txt
Login first so the token cookie is available.
```

Expected result:

```txt
Should return logged in user details.
```

### Get Reports

Endpoint:

```txt
GET /api/ai/reports
```

Requirement:

```txt
Login first and generate at least one report.
```

Expected result:

```txt
Should return all reports for the logged in user.
```

### Get Single Report

Endpoint:

```txt
GET /api/ai/report/:id
```

Example:

```txt
GET /api/ai/report/replace_with_report_id
```

Requirement:

```txt
Use a valid report id from the reports list.
```

Expected result:

```txt
Should return only that report if it belongs to logged in user.
```

## Negative Test Cases

### Analyze Without Login

Endpoint:

```txt
POST /api/ai/analyze
```

Expected result:

```txt
Should return "token not provided".
```

### Analyze Without Resume File

Endpoint:

```txt
POST /api/ai/analyze
```

Fields:

```txt
selfDescriptionData = any valid self description
jobDescriptionData = any valid job description
resume = missing
```

Expected result:

```txt
Should return "No file uploaded".
```

### Get Invalid Report Id

Endpoint:

```txt
GET /api/ai/report/invalid_report_id
```

Expected result:

```txt
Should return error response or report not found depending on id format.
```

