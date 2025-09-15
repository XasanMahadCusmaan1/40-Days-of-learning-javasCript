import { Admin } from "./Admin.js";
import { Member } from "./Member.js";
import { Book } from "./Book.js";
import { LibrarySystem } from "./libraryService.js";

const userSwitcher = document.getElementById("userViewSelection");
const booksSection = document.getElementById("newBook");
const borowedSection = document.getElementById("barowedBooksSection");
const borrowedListBooks = document.getElementById("baBooks");

const bookForm = document.getElementById("bookForm");
const bookList = document.getElementById("avBooks");

const library = new LibrarySystem();
let currentUser;

userSwitcher.addEventListener("change", (e) => {
  const selected = e.target.value;
  currentUser =
    selected === "admin"
      ? new Admin("Hassan", "xasan@gamil.com")
      : new Member("Alice", "alice@gamil.com");

  booksSection.style.display = selected === "admin" ? "block" : "none";
  borowedSection.style.display = selected === "member" ? "block" : "none";

  renderBooks();
  renderBorrowed();
});

bookForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let title = document.getElementById("bookTitle").value;
  let author = document.getElementById("bookAuthor").value;
  let genre = document.getElementById("bookGenre").value;

  const book = new Book(title, author, genre);

  library.addBooks(book);
  bookForm.reset();
  document.getElementById("bookTitle").focus();
  renderBooks();
});

function renderBooks() {
  bookList.innerHTML = "";
  if (!currentUser) return;
  library.getAllBooks().forEach((book) => {
    const li = document.createElement("li");
    li.className =
      "bg-white p-4 rounded-sm shadow-sm my-4 flex justify-between items-center";
    let controls = "";
    if (currentUser.getRole() === "Member" && book.isAvailable) {
      controls = `<button class=" bg-emerald-600 text-white p-2 cursor-pointer text-xl rounded-sm" data-action='Borrow' data-id='${book.id}'>Borrow</button>`;
    } else if (currentUser.getRole() === "Admin") {
      controls = `<span>${book.isAvailable ? "Available" : "Borrowed"}</span>`;
    }

    li.innerHTML = `
      <div>
        <strong>${book.title}</strong> by ${book.author} <em>(${book.genre})</em>
      </div>
      ${controls}
    `;
    bookList.appendChild(li);
  });
}

function renderBorrowed() {
  borrowedListBooks.innerHTML = "";
  if (!currentUser || currentUser.getRole() !== "Member") return;
  const borrowedBook = currentUser.getBorrowedBooks();
  borrowedBook.forEach((book) => {
    const li = document.createElement("li");
    li.className =
      "bg-white p-4 rounded-sm shadow-sm my-4 flex justify-between items-center";
    li.innerHTML = `
      <div>
        <strong>${book.title}</strong> by ${book.author} <em>(${book.genre})</em>
      </div>
      <button class=" bg-emerald-600 text-white p-2 cursor-pointer text-xl rounded-sm" data-action='Return' data-id='${book.id}'>Return</button>
    `;
    borrowedListBooks.appendChild(li);
  });
}



bookList.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    const id = e.target.getAttribute("data-id");
    const action = e.target.getAttribute("data-action");
    const book = library.getBookById(id);
    if (
      action === "Borrow" &&
      currentUser.getRole() === "Member" &&
      book.isAvailable
    ) {
      currentUser.borrowBook(book);
      renderBooks();
      renderBorrowed();
    }
  }
});

// add return button handler
borrowedListBooks.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    const id = e.target.getAttribute("data-id");
    const action = e.target.getAttribute("data-action");
    if (action === "Return" && currentUser && currentUser.getRole() === "Member") {
      const borrowed = currentUser.getBorrowedBooks() || [];
      const idx = borrowed.findIndex((b) => b.id === id);
      if (idx !== -1) {
        const libBook = library.getBookById(id);
        if (libBook) {
          libBook.isAvailable = true;
        }
        // Update borrowed list
        borrowed[idx].isAvailable = true;
        borrowed.splice(idx, 1);
        localStorage.setItem("borrowedBooks", JSON.stringify(borrowed));
        renderBooks();
        renderBorrowed();
      }
    }
  }
});

// initial state: trigger initial view setup based on current selection
userSwitcher.dispatchEvent(new Event("change"));