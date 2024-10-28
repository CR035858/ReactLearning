Create Database If not exists todo;


create table if not exists todo(
	id int auto_increment not null primary key,
    todo_task varchar(50),
    task_complet_incomplet boolean
);

