package com.uwbooks.orders;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collections;
import java.util.Map;

@RestController
@RequestMapping("api/v1/orders")
public class OrderController {
    @Autowired
    private OrderService orderService;
    @PostMapping("/add")
    public ResponseEntity<Order> makePurchase(@RequestBody OrderRequestBody payload){
        return new ResponseEntity<Order>(orderService.newOrder(payload.getEmail(),
                payload.getAddress(),
                payload.getZipCode(),
                payload.getCardNumber(),
                payload.getCardName(),
                payload.getBookIds()), HttpStatus.CREATED);
    }
}

