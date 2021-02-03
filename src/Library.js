const createLibrary = (name) => {
  return { 
    name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: [],
    }
  };
};

const addBook = (library, book) => {
  library.shelves[book.genre].push(book);
};

const checkoutBook = (library, bookTitle, shelf) => {
  const bookIndex = library.shelves[shelf]
    .findIndex(book => book.title === bookTitle);

  if (bookIndex === -1) {
    return `Sorry, there are currently no copies of ${bookTitle} available at the ${library.name}`
  } else {
    library.shelves[shelf].splice(bookIndex, 1);
  
    return `You have now checked out ${bookTitle} from the ${library.name}`;
  };
};

module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};