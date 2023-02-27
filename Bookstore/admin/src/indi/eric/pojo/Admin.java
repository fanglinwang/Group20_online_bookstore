package indi.eric.pojo;

public class Admin {
    private String phone;
    private String email;
    private String password;
    private String address;

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    @Override
    public String toString() {
        return "Admin{" +
                "phone=" + phone +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", address='" + address + '\'' +
                '}';
    }

    public Admin() {
    }

    public Admin(String phone, String email, String password, String address) {
        this.phone = phone;
        this.email = email;
        this.password = password;
        this.address = address;
    }
}
