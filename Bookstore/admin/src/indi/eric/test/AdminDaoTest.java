package indi.eric.test;

import indi.eric.dao.AdminDao;
import indi.eric.dao.impl.AdminDaoImpl;
import indi.eric.pojo.Admin;
import indi.eric.pojo.Book;
import indi.eric.pojo.Order;
import org.junit.Test;

public class AdminDaoTest {
    AdminDao adminDao = new AdminDaoImpl();

    @Test
    public void queryUserByUsername() {

        if (adminDao.queryAdminByEmail("gggg@uwaterloo.ca") == null ){
            System.out.println("No such email address");
        } else {
            System.out.println("Email address already exists");
        }
    }
    @Test
    public void queryUserByUsername2() {

        if (adminDao.queryAdminByEmail("nosuchemail@uwaterloo.ca") == null ){
            System.out.println("No such email address");
        } else {
            System.out.println("Email address already exists");
        }
    }

    @Test
    public void queryAdminByEmailAndPassword() {
        if ( adminDao.queryAdminByEmailAndPassword("gggg@uwaterloo.ca","abcde") == null) {
            System.out.println("wrong email and/or password, query failed");
        } else {
            System.out.println("query success");
        }
    }
    @Test
    public void queryAdminByEmailAndPassword2() {
        if ( adminDao.queryAdminByEmailAndPassword("gggg@uwaterloo.ca","aaaaaa") == null) {
            System.out.println("wrong email and/or password, query failed");
        } else {
            System.out.println("query success");
        }
    }

    @Test
    public void saveAdmin() {
        System.out.println( adminDao.saveAdmin(new Admin("123456798","test@gmail.com", "123456", "169 test ave")) );
    }
    @Test
    public void queryBookByBookID() {
        Book queryResult = adminDao.queryBookByBookID(3);
        if (queryResult == null ){
            System.out.println("No such book");
        } else {
            System.out.println("query success");
            System.out.println("bookID: " + queryResult.getBookId() + " bookName: " + queryResult.getBookName() + " author:" + queryResult.getAuthor() + " price: " + queryResult.getPrice() + " quantity: " + queryResult.getQuantity());
        }
    }
    @Test
    public void queryOrderByOrderID() {
        Order queryResult = adminDao.queryOrderByOrderID(0);
        if (queryResult == null ){
            System.out.println("No such order");
        } else {
            System.out.println("query success");
            System.out.println("orderID: " + queryResult.getOrderID() + " bookName: " + queryResult.getBookName() + " Addrss:" + queryResult.getAddrss() + " zipcode: " + queryResult.getZipcode() + " cardnumber: " + queryResult.getCardnumber() + "orderStatus:" + queryResult.getStatus());
        }
    }
}
