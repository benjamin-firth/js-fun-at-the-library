const shelfBook = (book, shelf) => {
  if (shelf.length < 3) shelf.unshift(book);
};

const unshelfBook = (name, shelf) => {
  shelf.splice(shelf.findIndex(book => book.title === name), 1);
};

const listTitles = (shelf) => {
  return shelf.map(book => book.title).join(', ');
};

const searchShelf = (shelf, name) => {
  return listTitles(shelf).includes(name);
};

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};