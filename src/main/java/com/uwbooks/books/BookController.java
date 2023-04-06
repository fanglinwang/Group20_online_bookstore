package com.uwbooks.books;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/user/books")
@CrossOrigin
public class BookController {
    @Autowired
    private BookService bookService;
    @GetMapping
    public ResponseEntity<List<Book>> getAllBooks(){
        return new ResponseEntity<List<Book>>(bookService.allBooks(), HttpStatus.OK);
    }
    @PostMapping("/searchbyname")
    public ResponseEntity<Optional<Book>> findBookByName(@RequestBody Map<String, String> payload){
        return new ResponseEntity<Optional<Book>>(bookService.singleBookByName(payload.get("name")), HttpStatus.OK);
    }
    @PostMapping("/searchbyauthor")
    public ResponseEntity<Optional<Book>> findBookByAuthor(String author){
        return new ResponseEntity<Optional<Book>>(bookService.singleBookByAuthor(author), HttpStatus.OK);
    }
    @PostMapping("/searchbyid")
    public ResponseEntity<Optional<Book>> findBookById(String id){
        return new ResponseEntity<Optional<Book>>(bookService.singleBookById(id), HttpStatus.OK);
    }
}