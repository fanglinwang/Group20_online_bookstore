package com.uwbooks.books;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Image {
    private String id;
    private int width;
    private int height;
    private String url;
    private String filename;
    private int size;
    private String type;
    private Thumbnail thumbnails;

}