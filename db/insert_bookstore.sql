use bookstore;
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

