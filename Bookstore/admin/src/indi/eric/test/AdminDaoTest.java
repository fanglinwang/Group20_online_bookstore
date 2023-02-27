package indi.eric.test;

import indi.eric.dao.AdminDao;
import indi.eric.dao.impl.AdminDaoImpl;
import indi.eric.pojo.Admin;
import org.junit.Test;

public class AdminDaoTest {
    AdminDao userDao = new AdminDaoImpl();

    @Test
    public void queryUserByUsername() {

        if (userDao.queryAdminByEmail("gggg@uwaterloo.ca") == null ){
            System.out.println("No such email address");
        } else {
            System.out.println("Email address already exists");
        }
    }
    @Test
    public void queryUserByUsername2() {

        if (userDao.queryAdminByEmail("nosuchemail@uwaterloo.ca") == null ){
            System.out.println("No such email address");
        } else {
            System.out.println("Email address already exists");
        }
    }

    @Test
    public void queryAdminByEmailAndPassword() {
        if ( userDao.queryAdminByEmailAndPassword("gggg@uwaterloo.ca","abcde") == null) {
            System.out.println("wrong email and/or password, query failed");
        } else {
            System.out.println("query success");
        }
    }
    @Test
    public void queryAdminByEmailAndPassword2() {
        if ( userDao.queryAdminByEmailAndPassword("gggg@uwaterloo.ca","aaaaaa") == null) {
            System.out.println("wrong email and/or password, query failed");
        } else {
            System.out.println("query success");
        }
    }

    @Test
    public void saveAdmin() {
        System.out.println( userDao.saveAdmin(new Admin("123456798","test@gmail.com", "123456", "169 test ave")) );
    }
}
