package indi.eric.pojo;

public class Book {
    private int bookID;
    private String bookName;
    private String author;
    private int price;
    private int quantity;

    public int getBookId() {
        return bookID;
    }

    public void setBookId(int bookID) {
        this.bookID = bookID;
    }

    public String getBookName() {
        return bookName;
    }

    public void setBookName(String bookName) {
        this.bookName = bookName;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    @Override
    public String toString() {
        return "Book{" +
                "bookID=" + bookID +
                ", bookName='" + bookName + '\'' +
                ", author='" + author + '\'' +
                ", price=" + price +
                ", quantity=" + quantity +
                '}';
    }

    public Book() {
    }

    public Book(int bookID, String bookName, String author, int price, int quantity) {
        this.bookID = bookID;
        this.bookName = bookName;
        this.author = author;
        this.price = price;
        this.quantity = quantity;
    }
}
