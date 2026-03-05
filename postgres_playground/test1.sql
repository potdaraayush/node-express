create table employee (
    emp_id serial primary key,
    fname varchar(50) not null,
    lname varchar(50) not null,
    email varchar(100) not null unique,
    dept varchar(50),
    salary decimal(10, 2) default 30000.00,
    hire_date date not null default current_date
);

select * from employee;

insert into employee (fname, lname, email, dept, salary) 
values('john', 'doe', 'johndoe@email.com', 'IT', 245000.00);

insert into employee (fname, lname, email, dept, salary)
values ('jane', 'smoth', 'janesmith@email.com', 'IT', 600000.00);

insert into employee(fname, lname, email, dept, salary) 
values ('emily', 'davis', 'emilydavis@email.com', 'Finance', 450000.00);

insert into employee(fname, lname, email, dept, salary)
values('michael', 'brown', 'michaelbrown@email.com', 'Finance', 210000.00);

insert into employee (fname, lname, email, dept, salary)
values('olivia', 'martin', 'oliviamartin@email.com', 'Sales', 195000.00);

insert into employee (fname, lname, email, dept, salary)
values('liam', 'anderson', 'liamanderson@email.com', 'IT', 260000.00);

insert into employee (fname, lname, email, dept, salary)
values('sophia', 'thomas', 'sophiathomas@email.com', 'Finance', 225000.00);

insert into employee (fname, lname, email, dept, salary)
values('noah', 'taylor', 'noahtaylor@email.com', 'HR', 180000.00);

insert into employee (fname, lname, email, dept, salary)
values('ava', 'moore', 'avamoore@email.com', 'Marketing', 170000.00);