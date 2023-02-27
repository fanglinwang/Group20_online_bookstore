package indi.eric.service;

import indi.eric.pojo.Admin;

public interface AdminService {
    public void registerAdmin(Admin admin);
    public Admin login(Admin admin);
    public boolean existsAdminEmail(String Email);
    public int addBook(int bookID, String bookName, String author, int price, int quantity);
    public int deleteBook(int bookID, String bookName, String author);
}
