package dev.eric.admin;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookService {

    @Autowired
    private BookRepository repository;

    public List<Book> findAllBooks() {
        return repository.findAll();
    }
    public Optional<Book> findBookByid(String id) {
        return repository.findBookByid(id);
    }
    public Book insert(Book book){return repository.insert(book);}
    public List<Book> insert(List<Book> books) {return repository.insert(books);}
    public void deleteBookByid(String id) {repository.deleteBookByid(id);}
}

