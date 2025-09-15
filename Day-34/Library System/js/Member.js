import { User } from "./User.js";

const borrowedBook = new WeakMap();

export class Member extends User {
  constructor(name, email) {
    super(name, email);
    const borrowedFromStorage =
      JSON.parse(localStorage.getItem("borrowedBooks")) || [];
    borrowedBook.set(this, borrowedFromStorage)
  }

  getRole() {
    return "Member";
  }

  borrowBook(book) {
    const borrow = borrowedBook.get(this)
    borrow.push(book)
    book.isAvailable = false;
    localStorage.setItem('borrowedBooks', JSON.stringify(borrow))
  }

  getBorrowedBooks() {
    return borrowedBook.get(this)
  }
  returnBook(bookId) {}
}
