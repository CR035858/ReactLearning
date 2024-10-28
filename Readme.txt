Steps to Execute the Project

I) Backend

1. Open MySQL workbench and log in to the MySQL Server.
2. After logging in go to File and select Open SQL Script option from the dropdown.
3. Then browse to the Folder that contains the Frontend and the backend folders of the project.
4. You will see a .sql file named Executable_Queries.sql file. Select it and Open it.
5. Execute all the written queries.
6. Now Go to the Extracted Folder.
7. Open the Todo_Backend Folder.
8. Inside the Todo_Backend Folder, A Single Folder named Todo will be present. Open that Folder.
9. Now Open that Todo named folder in Eclipse IDE or in IntelliJ Community Edition IDE or Visual Studio Code.
10. Now from the Project Explorer on the Left Hand Side of the IDE go to src -> main -> resources -> application.properties.
11. In application.properties file change the password of the sql which is written in spring.datasource.password to the MySQL Server password for your system.
12. Now after changing the password, go to src -> main -> java -> com.Example.Todo -> TodoApplication.java.
13. Now Run the TodoApplication.java file using the run button in the top navigation bar of the IDE.
14. Wait till the statement "Started TodoApplication in 12.522 seconds (process running for 14.495)" appears in the run console.

II) Frontend

1. Now Go to the Extracted Folder.
2. Open the Todo_Frontend Folder.
3. You will see a todo-fe folder. Go inside that folder.
4. Open that folder in Visual Studio Code IDE.
5. Now Go to View and Click on Terminal Option From the Top Navigation Bar.
6. Now on the Terminal run the "npm install" command to download all the required packages for the project.
7. After the download, run the "npm run dev" command.
8. Wait till the run console shows the following:
   
  VITE v5.2.11  ready in 497 ms
  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help

9. Go to the web browser and type the url "http://localhost:5173"
10. You will see the project in action.