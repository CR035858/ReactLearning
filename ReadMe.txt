Organizer Pro

Overview:
Organizer Pro is a comprehensive task management application that allows users to register, login, create categories, and manage their to-do lists within those categories. It provides a user-friendly interface for organizing tasks efficiently.

Features:
- User registration and login functionality.
- Secure authentication using Spring Security.
- Creation of categories to organize tasks effectively.
- CRUD operations for categories (Create, Read, Update, Delete).
- CRUD operations for to-do lists within categories.
- Responsive and intuitive frontend design using React.js, HTML, and CSS.

Installation:

1. Navigate to the project directory:
 

2. Backend setup:
   - Make sure you have Java and Maven installed.
   - Navigate to the backend directory:
     cd backend
   - Build the project:
     mvn clean install
   - Run the Spring Boot application:
     java -jar target/organizer-pro-backend.jar

3. Frontend setup:
   - Make sure you have Node.js and npm installed.
   - Navigate to the frontend directory:
     cd frontend
   - Install dependencies:
     npm install
   - Start the development server:
     npm start

Usage:
1. Open your web browser and navigate to http://localhost:3000 to access Organizer Pro.
2. Register a new account or login with existing credentials.
3. Create categories to organize your tasks.
4. Within each category, add, view, update, or delete tasks as needed.
5. Enjoy an organized approach to task management!

Technologies Used:
- Backend: Spring Boot, Spring Security
- Frontend: React.js, HTML, CSS
- Database: MySQL ,Spring Data JPA