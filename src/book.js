const createTitle = (title) => {
  return `The ${title}`;
};

const buildMainCharacter = (name, age, pronouns) => {
  const charInfo = {
    name,
    age,
    pronouns
  };

  return charInfo;
};

const saveReview = (review, allReviews) => {
  if (!allReviews.includes(review)) allReviews.push(review);

  return allReviews;
};

const calculatePageCount = (title) => {
  return title.length * 20;
};

const writeBook = (title, mainCharacter, genre) => {
  const book = {
    title,
    mainCharacter,
    pageCount: calculatePageCount(title),
    genre
  };

  return book;
};

const editBook = (book) => {
  book.pageCount = book.pageCount * 0.75;
};

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}