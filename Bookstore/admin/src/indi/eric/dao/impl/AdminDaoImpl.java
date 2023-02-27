package indi.eric.dao.impl;

import indi.eric.dao.AdminDao;
import indi.eric.pojo.Admin;

public class AdminDaoImpl extends BaseDao implements AdminDao {

    @Override
    public Admin queryAdminByEmail(String Email) {
        String sql = "select `Email`,`Passwd`,`Address`,`phone` from users where Email = ?";
        return queryForOne(Admin.class, sql, Email);
    }

    @Override
    public Admin queryAdminByEmailAndPassword(String Email, String Passwd) {
        String sql = "select `Email`,`Passwd`,`Address`,`phone` from users where Email = ? and Passwd = ?";
        return queryForOne(Admin.class, sql, Email,Passwd);
    }

    @Override
    public int saveAdmin(Admin admin) {
        String sql = "insert into users(`Email`,`Passwd`,`Address`,`phone`) values(?,?,?,?)";
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
}
