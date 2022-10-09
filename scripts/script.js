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
        if (form[type="checkbox"]) form.checked = false;
        else form.value = "";
    });
}


function Book(title, author, pages, comment, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.comment = comment;
    this.read = read;  
}

function addBookToLibrary() {
    const newBook = new Book(
        formFields[0].value,
        formFields[1].value,
        formFields[2].value,
        formFields[3].value,
        formFields[4].checked
    );

    myLibrary.push(newBook);
}

function displayBook() {

}