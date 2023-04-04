# Group20_online_bookstore 
Get all books: send GET to /api/admin/books  
Find a book by id: send GET to /api/admin/books/{id}  
Add a book: send POST with book JSON to /api/admin/books/addBook  
Delete a book by id: send GET to /api/admin/books/deleteBook/{id}  
Create a review for a book: send POST with review JSON to /api/admin/reviews, ex. 
{
    "reviewBody":"This is a test review.",
    "id":"test"
}
