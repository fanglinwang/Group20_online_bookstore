package com.uwbooks.orders;

import com.uwbooks.books.Book;
import com.uwbooks.books.BookRepository;
import com.uwbooks.users.User;
import com.uwbooks.users.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class OrderService {
    @Autowired
    private OrderRepository orderRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private BookRepository bookRepository;

    public Order newOrder(String email, String address, String zipcode, String cardNumber, String cardName, List<String> bookIds) {
        List<Book> bookList = new ArrayList<Book>();
        for (String bookId : bookIds) {
            if (bookRepository.findById(bookId).isPresent()) {
                bookList.add(bookRepository.findById(bookId).get());
            }
        }
        if (userRepository.existsByEmail(email)) {
            return (Order) orderRepository.insert(new Order(email, null, address, zipcode, cardNumber, cardName, userRepository.findByEmail(email), bookList));
        }

        return null;
    }
}
