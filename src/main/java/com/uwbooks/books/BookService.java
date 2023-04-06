package com.uwbooks.books;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookService {
    @Autowired
    private BookRepository bookRepository;
    public List<Book> allBooks(){
        return bookRepository.findAll();
    }
    public Optional<Book> singleBookByName(String name){ return bookRepository.findByName(name);}
    public Optional<Book> singleBookById(String id){ return bookRepository.findById(id);}
    public Optional<Book> singleBookByAuthor(String author){ return bookRepository.findByAuthor(author);}
}