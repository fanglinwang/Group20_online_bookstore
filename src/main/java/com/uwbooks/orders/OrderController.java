package com.uwbooks.orders;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/user/orders")
@CrossOrigin
public class OrderController {
    @Autowired
    private OrderService orderService;
    @PostMapping("/add")
    public ResponseEntity<Order> makePurchase(@RequestBody OrderRequestBody payload){
        return new ResponseEntity<Order>(orderService.newOrder(payload.getEmail(),
                payload.getAddress(),
                payload.getZipcode(),
                payload.getCardNumber(),
                payload.getCardName(),
                payload.getBookIds()), HttpStatus.CREATED);
    }

    @PostMapping("/searchbyemail")
    public ResponseEntity<List<Order>> searchByEmail(@RequestBody Map<String, String> payload){
        return new ResponseEntity<List<Order>>(orderService.findOrderByUser(payload.get("email")), HttpStatus.CREATED);
    }
}

