package indi.eric.pojo;

public class Order {
    private int orderID;
    private String email;
    private String phone;
    private String bookName;
    private enum orderStatus {placed, shipped, delivered};
    private String Addrss;
    private String zipcode;
    private String cardnumber;
    private String cardname;

    public int getOrderID() {
        return orderID;
    }

    public void setOrderID(int orderID) {
        this.orderID = orderID;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getBookName() {
        return bookName;
    }

    public void setBookName(String bookName) {
        this.bookName = bookName;
    }

    public String getAddrss() {
        return Addrss;
    }

    public void setAddrss(String addrss) {
        Addrss = addrss;
    }

    public String getZipcode() {
        return zipcode;
    }

    public void setZipcode(String zipcode) {
        this.zipcode = zipcode;
    }

    public String getCardnumber() {
        return cardnumber;
    }

    public void setCardnumber(String cardnumber) {
        this.cardnumber = cardnumber;
    }

    public String getCardname() {
        return cardname;
    }

    public void setCardname(String cardname) {
        this.cardname = cardname;
    }

    orderStatus status = orderStatus.placed;

    public orderStatus getStatus() {
        return status;
    }

    public void setStatus(orderStatus status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return "Order{" +
                "orderID=" + orderID +
                ", email='" + email + '\'' +
                ", phone='" + phone + '\'' +
                ", bookName='" + bookName + '\'' +
                ", Addrss='" + Addrss + '\'' +
                ", zipcode='" + zipcode + '\'' +
                ", cardnumber='" + cardnumber + '\'' +
                ", cardname='" + cardname + '\'' +
                '}';
    }

    public Order() {
    }

    public Order(int orderID, String email, String phone, String bookName, String addrss, String zipcode, String cardnumber, String cardname) {
        this.orderID = orderID;
        this.email = email;
        this.phone = phone;
        this.bookName = bookName;
        Addrss = addrss;
        this.zipcode = zipcode;
        this.cardnumber = cardnumber;
        this.cardname = cardname;
    }
}
