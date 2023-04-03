package dev.eric.admin;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/admin/books")
@CrossOrigin
public class BookController {

    @Autowired
    private BookService service;

    @GetMapping
    public ResponseEntity<List<Book>> getBooks() {
        return new ResponseEntity<List<Book>>(service.findAllBooks(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Book>> getSingleBook(@PathVariable String id){
        return new ResponseEntity<Optional<Book>>(service.findBookByid(id), HttpStatus.OK);
    }

    @PostMapping(path = "/addBook",consumes = MediaType.APPLICATION_JSON_VALUE,produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Book> addBook (@RequestBody Book book){
        service.insert(book);
        return new ResponseEntity<>(book,HttpStatus.CREATED);
    }

    @GetMapping("/deleteBook/{id}")
    public ResponseEntity deleteBook(@PathVariable String id){
        service.deleteBookByid(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
