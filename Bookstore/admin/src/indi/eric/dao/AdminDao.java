package indi.eric.dao;

import indi.eric.pojo.Admin;
import indi.eric.pojo.Book;
import indi.eric.pojo.Order;

public interface AdminDao {
    public Admin queryAdminByEmail(String Email);
    public Admin queryAdminByEmailAndPassword(String Email,String password);
    public int saveAdmin(Admin admin);
    public int addBook(int bookID, String bookName, String author, int price, int quantity);
    public int deleteBook(int bookID, String bookName, String author);
    public Book queryBookByBookID(int bookID);
    public Order queryOrderByOrderID(int orderID);
}
