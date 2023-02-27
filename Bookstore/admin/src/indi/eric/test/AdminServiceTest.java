package indi.eric.test;

import indi.eric.pojo.Admin;
import indi.eric.service.AdminService;
import indi.eric.service.impl.AdminServiceImpl;
import org.junit.Test;

public class AdminServiceTest {
    AdminService as = new AdminServiceImpl();

    @Test
    public void AdminReg() {
        as.registerAdmin(new Admin("43994399","new@gmail.com","abc123","986 King ave"));
    }

    @Test
    public void login(){
        System.out.println(as.login(new Admin(null,"new@gmail.com","abc123",null)));
    }
    @Test
    public void login2(){
        System.out.println(as.login(new Admin(null,"fail@gmail.com","78978978978",null)));
    }

    @Test
    public void AdminEmailExists(){
        if (as.existsAdminEmail("new@gmail.com")){
            System.out.println("admin email exists");
        } else {
            System.out.println("no such admin email address exists");
        }
    }
    @Test
    public void AdminEmailExists2(){
        if (as.existsAdminEmail("fail@gmail.com")){
            System.out.println("admin email exists");
        } else {
            System.out.println("no such admin email address exists");
        }
    }

    @Test
    public void addBook(){
        System.out.println(as.addBook(10,"test book","test author", 200,1));
    }

    @Test
    public void deleteBook(){
        System.out.println(as.deleteBook(10,"test book","test author"));
    }

}
