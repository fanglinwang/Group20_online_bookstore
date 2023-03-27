package com.uwbooks.orders;

import com.uwbooks.books.Book;
import com.uwbooks.users.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import java.util.List;
import java.util.Optional;

@Document(collection = "orders")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Order {
    @Id
    private ObjectId id;
    private String email;
    private String status;
    private String address;
    private String zipCode;
    private String cardNumber;
    private String cardName;
    @DocumentReference
    private User userId;
    @DocumentReference
    private List<Book> bookIds;

    public Order(String email, String status, String address, String zipCode, String cardNumber, String cardName, User userId, List<Book> bookIds) {
        this.email = email;
        this.status = status;
        this.address = address;
        this.zipCode = zipCode;
        this.cardNumber = cardNumber;
        this.cardName = cardName;
        this.userId = userId;
        this.bookIds = bookIds;
    }

}
