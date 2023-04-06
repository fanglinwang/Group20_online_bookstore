package com.uwbooks.orders;

import com.uwbooks.books.Book;
import com.uwbooks.books.BookRepository;
import com.uwbooks.users.User;
import com.uwbooks.users.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Update;
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

    @Autowired
    private MongoTemplate mongoTemplate;

    public Order newOrder(String email, String address, String zipcode, String cardNumber, String cardName, List<String> bookIds) {
        List<Book> bookList = new ArrayList<Book>();
        for (String bookId : bookIds) {
            if (bookRepository.findById(bookId).isPresent()) {
                bookList.add(bookRepository.findById(bookId).get());
            }
        }
        if (userRepository.existsByEmail(email)) {
            Order order = orderRepository.insert(new Order(email, null, address, zipcode, cardNumber, cardName, bookList));
            mongoTemplate.update(User.class)
                    .matching(Criteria.where("email").is(email))
                    .apply(new Update().push("orders").value(order))
                    .first();
            return order;
        }

        return null;
    }

    public List<Order> findOrderByUser(String email){
        return orderRepository.findByEmail(email);
    }
}
