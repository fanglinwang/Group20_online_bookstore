package indi.eric.servlet;

import indi.eric.pojo.Admin;
import indi.eric.service.AdminService;
import indi.eric.service.impl.AdminServiceImpl;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class AdminServlet extends Servlet {
    private AdminService adminService = new AdminServiceImpl();
    protected void register(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String phone = req.getParameter("phone");
        String email = req.getParameter("email");
        String password = req.getParameter("password");
        String address = req.getParameter("address");

        if (adminService.existsAdminEmail(email)) {
            System.out.println("This email address[" + email + "] already exists");
            req.setAttribute("msg", "This email address already exists");
            req.setAttribute("email", email);
            // register failed, email address already exists, go back to register page
            req.getRequestDispatcher("").forward(req, resp);
        } else {
            adminService.registerAdmin(new Admin(phone, email, password, address));
            // register success, go to register success page
            req.getRequestDispatcher("").forward(req, resp);
        }
    }
    protected void login(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String email = req.getParameter("email");
        String password = req.getParameter("password");
        Admin loginAdmin = adminService.login(new Admin(null, email, password, null));
        if (loginAdmin == null) {
            req.setAttribute("msg", "email or password error");
            req.setAttribute("email", email);
            // login failed, go back to login page
            req.getRequestDispatcher("").forward(req, resp);
        } else {
            // login success, go to login success page
            req.getRequestDispatcher("").forward(req, resp);
        }

    }
}
