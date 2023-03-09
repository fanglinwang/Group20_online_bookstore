package indi.eric.service;

import indi.eric.pojo.Admin;
import indi.eric.pojo.Book;
import indi.eric.pojo.Order;

public interface AdminService {
    public void registerAdmin(Admin admin);
    public Admin login(Admin admin);
    public boolean existsAdminEmail(String Email);
    public int addBook(int bookID, String bookName, String author, int price, int quantity);
    public int deleteBook(int bookID, String bookName, String author);
    public Book queryBookByBookID(int bookID);
    public Order queryOrderByOrderID(int orderID);
}
