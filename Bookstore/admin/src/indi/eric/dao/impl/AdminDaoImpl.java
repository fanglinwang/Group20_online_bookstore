package indi.eric.dao.impl;

import indi.eric.dao.AdminDao;
import indi.eric.pojo.Admin;
import indi.eric.pojo.Book;
import indi.eric.pojo.Order;

public class AdminDaoImpl extends BaseDao implements AdminDao {

    @Override
    public Admin queryAdminByEmail(String Email) {
        String sql = "select `Email`,`Passwd`,`Address`,`phone` from admins where Email = ?";
        return queryForOne(Admin.class, sql, Email);
    }

    @Override
    public Admin queryAdminByEmailAndPassword(String Email, String Passwd) {
        String sql = "select `Email`,`Passwd`,`Address`,`phone` from admins where Email = ? and Passwd = ?";
        return queryForOne(Admin.class, sql, Email,Passwd);
    }

    @Override
    public int saveAdmin(Admin admin) {
        String sql = "insert into admins(`Email`,`Passwd`,`Address`,`phone`) values(?,?,?,?)";
        return update(sql, admin.getEmail(),admin.getPassword(),admin.getAddress(),admin.getPhone());
    }

    @Override
    public int addBook(int bookID, String bookName, String author, int price, int quantity) {
        String sql = "insert into books(`bookID`,`bookName`,`author`,`price`,`quantity`) values(?,?,?,?,?)";
        return update(sql,bookID, bookName, author, price, quantity);
    }

    @Override
    public int deleteBook(int bookID, String bookName, String author) {
        String sql = "delete from books where bookID = ? and bookName = ? and author = ?";
        return update(sql,bookID, bookName, author);
    }

    @Override
    public Book queryBookByBookID(int bookID) {
        String sql = "select `bookID`,`bookName`,`author`,`price`,`quantity` from books where bookID = ?";
        return queryForOne(Book.class, sql, bookID );
    }

    @Override
    public Order queryOrderByOrderID(int orderID) {
        String sql = "select `orderID`,`Email`,`phone`,`bookName`,`orderStatus`,`Addrss`,`zipcode`,`cardnumber`,`cardname` from orders where orderID = ?";
        return queryForOne(Order.class, sql, orderID);
    }
}
