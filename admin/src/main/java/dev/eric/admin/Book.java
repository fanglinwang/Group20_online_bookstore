package dev.eric.admin;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import java.util.List;

@Document(collection = "books")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Book {
    @Id
    private ObjectId _id;
    private String id;
    private int price;
    private String author;
    private int stock;
    private String image;
    private String name;
    private String description;
    private List<Image> images;
    private List<String> conditions;
    @DocumentReference
    private List<Review> reviews;

    public Book(String id, int price, String image, String name, String description, List<String> conditions, List<Image> images, String author, int stock) {
        this.id = id;
        this.price = price;
        this.image = image;
        this.name = name;
        this.description = description;
        this.conditions = conditions;
        this.images = images;
        this.author = author;
        this.stock = stock;
    }
}
