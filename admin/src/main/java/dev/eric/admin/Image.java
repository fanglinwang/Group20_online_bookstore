package dev.eric.admin;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "Images")
@Data
@NoArgsConstructor
public class Image {
    private String id;
    private int width;
    private int height;
    private int size;
    private String url;
    private String filename;
    private String type;
    //private List<thumbnail> thumbnails;

    public Image(String id, int width, int height, int size, String url, String filename, String type) {
        this.id = id;
        this.width = width;
        this.height = height;
        this.size = size;
        this.url = url;
        this.filename = filename;
        this.type = type;
        //this.thumbnails = thumbnails;
    }
}