class Librarian {
  constructor(name, library) {
    this.name = name;
    this.library = library;
  };

  greetPatron(name, isMorning) {
    return isMorning ? `Good morning, ${name}!` : `Hello, ${name}!`;
  };

  findBook(bookName) {
    const foundBook = Object.keys(this.library.shelves).reduce((hasBook, shelf) => {
      let bookIndex = this.library.shelves[shelf]
        .findIndex(book => book.title === bookName);

      if (bookIndex !== -1) {
        this.library.shelves[shelf].splice(bookIndex, 1);
        return hasBook = true;
      };

      return hasBook;
    }, false);

    return foundBook ?
      `Yes, we have ${bookName}`: 
      `Sorry, we do not have ${bookName}`;
  };

  calculateLateFee(daysLate) {
    return Math.ceil(daysLate * 0.25);
  };
};

module.exports = Librarian;