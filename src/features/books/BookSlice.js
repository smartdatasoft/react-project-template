const { createSlice } = require('@reduxjs/toolkit');
const { v4: uuidv4 } = require('uuid');

const initialBooks = {
  books: [
    { id: uuidv4(), title: 'The Hobbit', author: 'J.R.R. Tolkien' },
    { id: uuidv4(), title: 'The Fellowship of the Ring', author: 'J.R.R. Tolkien' },
    { id: uuidv4(), title: 'The Two Towers', author: 'J.R.R. Tolkien' }
  ]
};

export const booksSlice = createSlice({
  name: 'books',
  initialState: initialBooks,
  reducers: {
    showBooks: (state) => state,
    addBook: (state, action) => {
      state.books.push(action.payload);
    },

    updateBook: (state, action) => {
      const { id, title, author } = action.payload;
      const book = state.books.find((book) => book.id === id);
      if (book) {
        book.title = title;
        book.author = author;
      }
    },
    deleteBook: (state, action) => {
      const id = action.payload;
      return {
        ...state,
        books: state.books.filter((book) => book.id !== id)
      };
    }
  }
});

export const { showBooks, addBook, deleteBook, updateBook } = booksSlice.actions;
export default booksSlice.reducer;
