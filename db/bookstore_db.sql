drop database if exists bookstore;

create database if not exists bookstore;

use bookstore;


CREATE TABLE IF NOT EXISTS users (
    Email varchar(255) primary key,
    Passwd varchar(255),
    Address text, 
    phone varchar(255)
);

CREATE TABLE IF NOT EXISTS admins (
    Email varchar(255) primary key,
    Passwd varchar(255)
);

CREATE TABLE IF NOT EXISTS books (
    bookID int primary key, 
    bookName varchar(255),
    price int, 
    images text,
    descriptions text, 
    conditions varchar(255), 
    department varchar(255), 
    stocks int, 
    stars int, 
    reviews int, 
    quantity int
);

CREATE TABLE IF NOT EXISTS orders ( 
    orderID int primary key, 
    Email varchar(255),
    bookID int,
    orderStatus varchar(255),
    Addrss varchar(455), 
    zipcode varchar(255),
    cardnumber varchar(255),
    cardname varchar(255), 
    foreign key(Email) references users(Email),
    foreign key(bookID) references books(bookID)
);

CREATE TABLE IF NOT EXISTS reviews (
    Email varchar(255),
    bookID int, 
    stars int,
    foreign key(Email) references users(Email),
    foreign key(bookID) references books(bookID), 
    PRIMARY KEY(Email, bookID)
);

/*
insert into users values('abcd@uwaterloo.ca', 'abcde', '123 university ave', '8887777888');
insert into users values('gggg@uwaterloo.ca', 'abcde', '123 university ave', '1212233344');
insert into users values('lobe@uwaterloo.ca', 'abcde', '123 university ave', '2223333322');

insert into admins values('admin@uwaterloo.ca', 'abcde');


insert into books values(0, 'java intro 1', 20, 'http://java.png1', 'java', 'brand new', 'computer science', 10, 4, 2, 20);
insert into books values(1, 'java intro 2', 20, 'http://java.png2', 'java', 'brand new', 'computer science', 10, 4, 2, 20);
insert into books values(2, 'java intro 3', 20, 'http://java.png3', 'java', 'brand new', 'computer science', 10, 4, 2, 20);

insert into orders values(0, 'abcd@uwaterloo.ca', 0, 'shipped', '123 university ave', 'N2L 0G7', '1234', 'Bob');
insert into orders values(1, 'abcd@uwaterloo.ca', 0, 'shipped', '123 university ave', 'N2L 0G7', '1234', 'Bob');
insert into orders values(2, 'abcd@uwaterloo.ca', 0, 'shipped', '123 university ave', 'N2L 0G7', '1234', 'Bob');

insert into reviews values('abcd@uwaterloo.ca', 0, 4);
insert into reviews values('abcd@uwaterloo.ca', 1, 3);
*/