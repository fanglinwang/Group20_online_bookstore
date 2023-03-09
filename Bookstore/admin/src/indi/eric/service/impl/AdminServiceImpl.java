package indi.eric.service.impl;

import indi.eric.dao.AdminDao;
import indi.eric.dao.impl.AdminDaoImpl;
import indi.eric.pojo.Admin;
import indi.eric.pojo.Book;
import indi.eric.pojo.Order;
import indi.eric.service.AdminService;

public class AdminServiceImpl implements AdminService{
    private AdminDao ad = new AdminDaoImpl();
    @Override
    public void registerAdmin(Admin admin) {
        ad.saveAdmin(admin);
    }

    @Override
    public Admin login(Admin admin) {
        return ad.queryAdminByEmailAndPassword(admin.getEmail(), admin.getPassword());
    }

    @Override
    public boolean existsAdminEmail(String Email) {
        if (ad.queryAdminByEmail(Email) == null) {
            return false;
        }
        return true;
    }
    public int addBook(int bookID, String bookName, String author, int price, int quantity){
        return ad.addBook(bookID, bookName, author, price, quantity);
    }

    @Override
    public int deleteBook(int bookID, String bookName, String author) {
        return ad.deleteBook(bookID, bookName, author);
    }

    @Override
    public Book queryBookByBookID(int bookID) {
        return ad.queryBookByBookID(bookID);
    }

    @Override
    public Order queryOrderByOrderID(int orderID) {
        return ad.queryOrderByOrderID(orderID);
    }


}
