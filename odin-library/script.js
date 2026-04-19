let myLibrary = [];

function Book(title, author, pages, read) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.getInfo = function () {
  return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? "read" : "not read yet"}`;
};

function addBook() {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read").checked;

  const newBook = new Book(title, author, pages, read);

  myLibrary.push(newBook);
}

function displayLibrary() {
  const libraryContainer = document.getElementById("library");
  libraryContainer.innerHTML = "";

  myLibrary.forEach((book) => {
    const bookElement = document.createElement("div");
    bookElement.textContent = book.getInfo();
    libraryContainer.append(bookElement);
  });
  console.log("🚀 ~ displayLibrary ~ myLibrary:", myLibrary);
}

document.getElementById("book-form").addEventListener("submit", function (e) {
  e.preventDefault();
  addBook();
  displayLibrary();
  this.reset();
});

// Initial render
myLibrary.push(new Book("The Great Gatsby", "F. Scott Fitzgerald", 180, false));
displayLibrary();
