let myLibrary = [];
// const addBookBtn = document.querySelector('button[type="submit"]');
const addBookBtn = document.querySelector('form');
const formFields = document.querySelectorAll('input, textarea');


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
    const booksContainer = document.querySelector('.books-container');
    const newBookDiv = document.createElement('div.book');
    const bookTitle = document.createElement('div');
    const bookAuthor = document.createElement('div');
    const bookPages = document.createElement('div');
    const bookRead = document.createElement('div');

    bookTitle.textContent = book.title;
    bookAuthor.textContent = `By: ${book.author}`;
    bookPages.textContent = book.pages ? `Number of pages: ${book.pages}` : '';
    bookRead.textContent = book.read ? 'Read' : 'Not read';

    newBookDiv.append(bookTitle, bookAuthor, bookPages, bookRead);
    booksContainer.appendChild(newBookDiv);
}

function deleteBook() {

}

function toggleReadStatus() {
    
}