let myLibrary = [];
// const addBookBtn = document.querySelector('button[type="submit"]');
const addBookBtn = document.querySelector('form');
const formFields = document.querySelectorAll('input, textarea');
const booksContainer = document.querySelector('.books-container');


addBookBtn.addEventListener('submit', (event) => {
    event.preventDefault();
    
    let validForm = true;
    formFields.forEach( form => {
        if(form.matches(':invalid')) validForm = false;
    });

    if (validForm) {
        addBookToLibrary();
        window.location = "#";
        clearInputFields();
    }
    
});

function clearInputFields() {
    formFields.forEach( form => {
        if (form.type === 'checkbox') form.checked = false;
        else form.value = "";
    });
}


function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;  
}

function addBookToLibrary() {
    const newBook = new Book(
        formFields[0].value,
        formFields[1].value,
        formFields[2].value,
        formFields[3].checked
    );

    myLibrary.push(newBook);
    displayBook(newBook);
}

function displayBook(book) {
    const newBookDiv = document.createElement('div');
    const removeBtn = document.createElement('button');
    newBookDiv.classList.add('book');
    newBookDiv.dataset.bookNumber = myLibrary.length;
    removeBtn.classList.add('remove-button');
    removeBtn.addEventListener('click', removeBook);
    

    const bookTitle = document.createElement('div');
    const bookAuthor = document.createElement('div');
    const bookPages = document.createElement('div');
    const bookRead = document.createElement('div');

    bookTitle.textContent = book.title;
    bookAuthor.textContent = `By: ${book.author}`;
    bookPages.textContent = book.pages ? `Number of pages: ${book.pages}` : '';
    bookRead.textContent = book.read ? 'Read' : 'Not read';
    removeBtn.textContent = "Remove";

    newBookDiv.append(bookTitle, bookAuthor, bookPages, bookRead, removeBtn);
    booksContainer.appendChild(newBookDiv);
}

function removeBook() {
    const bookNumber = this.parentElement.dataset.bookNumber;
    const removedBook = document.querySelector(`.book[data-book-number="${bookNumber}"]`);

    booksContainer.removeChild(removedBook);
    myLibrary.splice(bookNumber - 1, 1);

    const remainingBooks = Array.from(document.querySelectorAll('.book'));
    remainingBooks
        .filter(book => book.dataset.bookNumber > bookNumber)
        .map(book => book.dataset.bookNumber--);
}

function toggleReadStatus() {
    
}