export class LibrarySystem {
  #books;

  constructor() {
    this.#books = [];
  }

  addBooks(book) {
    return this.#books.push(book);
  }

  getAvailableBooks() {
    return this.#books.filter((book) => book.isAvailable);
  }

  getAllBooks() {
    return this.#books;
  }

  getBookById(id) {
    return this.#books.find((b) => b.id === id);
  }
}
