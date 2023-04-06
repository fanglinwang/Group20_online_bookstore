package com.uwbooks.orders;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document
@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrderRequestBody {
    private String email;
    private String address;
    private String zipcode;
    private String cardNumber;
    private String cardName;
    private List<String> bookIds;
}
