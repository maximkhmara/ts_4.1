"use strict";
class BookService {
    constructor() {
        this.books = [
            { id: "1", title: "Книжка1", authorId: "101" },
            { id: "2", title: "Книжка2", authorId: "102" },
            { id: "3", title: "Книжка3", authorId: "103" },
        ];
        this.authors = [
            { id: "101", name: "Автор1" },
            { id: "102", name: "Автор2" },
            { id: "103", name: "Автор3" },
        ];
    }
    getBooks() {
        return this.books;
    }
    getBookById(id) {
        return this.books.find(book => book.id === id) || null;
    }
    getAuthors() {
        return this.authors;
    }
    getAuthorById(id) {
        return this.authors.find(author => author.id === id) || null;
    }
    getBooksByAuthor(authorId) {
        return this.books.filter(book => book.authorId === authorId);
    }
    getAuthorByBookId(bookId) {
        const book = this.books.find(book => book.id === bookId);
        if (book) {
            return this.getAuthorById(book.authorId);
        }
        return null;
    }
    search(query) {
        const lowerCaseQuery = query.toLowerCase();
        return this.books.filter(book => book.title.toLowerCase().includes(lowerCaseQuery) ||
            this.authors.some(author => author.id === book.authorId && author.name.toLowerCase().includes(lowerCaseQuery)));
    }
}
const bookService = new BookService();
console.log("Усі книги:", bookService.getBooks());
console.log("Книга за ID (1):", bookService.getBookById("1"));
console.log("Автор за ID (101):", bookService.getAuthorById("101"));
console.log("Книги автора 'Автор1':", bookService.getBooksByAuthor("101"));
console.log("Автор книги з ID (2):", bookService.getAuthorByBookId("2"));
console.log("Пошук 'Автор1':", bookService.search("Автор1"));
