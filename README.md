📚 Task Manager Application
🚀 GitHub Repository Link
Task Manager GitHub Repository

🌐 Deployment Link (Optional)
Live Demo

📄 Project Overview
This is a full-stack Task Management application that allows users to:

Add, update, and delete tasks.

Assign categories, status, priority, and due dates.

Seamlessly manage tasks with an intuitive UI.

🛠️ Technologies & Libraries Used
📌 Frontend:
React JS

Axios

CSS for styling

📌 Backend:
Spring Boot

Spring Security

MySQL (Database)

Hibernate/JPA

REST API

⚙️ Setup and Run Instructions
💻 Backend Setup:
Clone the repository:

bash
Copy
Edit
git clone https://github.com/your-username/task-manager.git
Navigate to the backend folder:

bash
Copy
Edit
cd task-manager/backend
Configure the Database:

Update application.properties with your MySQL username and password.

properties
Copy
Edit
spring.datasource.url=jdbc:mysql://localhost:3306/task_manager
spring.datasource.username=root
spring.datasource.password=your_password
Run the Backend Application:

bash
Copy
Edit
mvn spring-boot:run
🎨 Frontend Setup:
Navigate to the frontend folder:

bash
Copy
Edit
cd task-manager/frontend
Install dependencies:

bash
Copy
Edit
npm install
Run the Frontend Application:

bash
Copy
Edit
npm start
📡 API Endpoints
➡️ Authentication:
POST /api/auth/login - Authenticate user

POST /api/auth/register - Register a new user

➡️ Task Management:
GET /api/tasks - Fetch all tasks

POST /api/tasks - Add a new task

PUT /api/tasks/{id} - Update a task

DELETE /api/tasks/{id} - Delete a task

🎯 Assumptions Made
The user must log in before accessing task management.

JWT tokens are used for user authentication.

The backend URL is configured to http://localhost:8080/api/.

🚧 Challenges Faced and Solutions

1. Security with Spring Security
Problem: Protecting endpoints while allowing login and signup access.

Solution: Configured Spring Security to allow unauthenticated access for login and signup APIs.

2. Axios Network Errors
Problem: Network errors due to incorrect backend URL.

Solution: Configured Axios base URL properly to http://localhost:8080/api.

📝 Future Enhancements
Role-based authentication and authorization.

Task assignment to different users.

Notification system for upcoming task deadlines.
