create database if not exists bookstore;

use bookstore;


CREATE TABLE IF NOT EXISTS users (
    Email varchar(255) primary key,
    Passwd varchar(255),
    Address text, 
    phone varchar(255)
);



CREATE TABLE IF NOT EXISTS orders (
    orderID int primary key, 
    Email varchar(255),
    phone varchar(255),
    bookName varchar(255),
    orderStatus ENUM('placed', 'shipped', 'delivered'),
    Addrss varchar(455), 
    zipcode varchar(255),
    cardnumber varchar(255),
    cardname varchar(255)
);

CREATE TABLE IF NOT EXISTS books (
    bookID int primary key, 
    bookName varchar(255),
    author varchar(255),
    price int, 
    quantity int
);


insert into users values('abcd@uwaterloo.ca', 'abcde', '123 university ave', '8887777888');
insert into users values('gggg@uwaterloo.ca', 'abcde', '123 university ave', '1212233344');
insert into users values('lobe@uwaterloo.ca', 'abcde', '123 university ave', '2223333322');

insert into books values(0, 'java intro 1', 'Mickey Davis', 22, 30);
insert into books values(1, 'java intro 2', 'Mickey Davis', 22, 30);
insert into books values(2, 'java intro 3', 'Mickey Davis', 22, 30);
insert into books values(3, 'java intro 4', 'Mickey Davis', 22, 30);