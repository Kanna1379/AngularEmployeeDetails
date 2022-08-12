create database EmployeeManagement;
use EmployeeManagement;
show tables;

select * from employee;

desc Employee;
create table Department(deptno int primary key, deptname varchar(50),location varchar(50));
create table Employee(empno int primary key, ename text,job text, hiredate text,mangerid int,salary bigint,commission int,deptno int, foreign key(deptno) references Department(deptno));

create table Department(DeptNo int primary key,DepartmentName varchar(50),Location varchar(50));
create table Employee(EmpNo int primary key, EName text,Job text, HireDate text,MangerID int,Salary bigint,Commission int,DeptNo int, foreign key(DeptNo) references Department(DeptNo));
create table LoginCredentials(EmpNo int, emailID varchar(50),password text, foreign key(EmpNo) references Employee(EmpNo));

desc Employee;
select * from Employee;
insert into Department values(1,"Testing","Hyderabad");
insert into Department values(2,"Developer","Chennai");
insert into Department values(3,"Admin","Pune");

insert into Employee values(101,"Rama","TE",'02-08-2021',501,35000,3000,1);
insert into Employee values(102,"Ramya","SE",'10-05-2020',501,45000,2000,2);
insert into Employee values(103,"Ram","Support Engineer",'20-05-2021',501,35000,1000,3);

insert into LoginCredentials values(101,"rama.kanna@gmail.com","rama@123");
insert into LoginCredentials values(102,"ramya.kanna@gmail.com","ramya@123");
insert into LoginCredentials values(103,"ram.kanna@gmail.com","ram@123");

create table timeSheet(EmpNo int, noOfWorkingDays int, month int, year int);
drop table timeSheet;
select * from  timeSheet;



desc Employee;
desc Department;
