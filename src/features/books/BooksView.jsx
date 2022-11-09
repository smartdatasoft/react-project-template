import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteBook } from './BookSlice';

const BooksView = () => {
  const books = useSelector((state) => state.booksReducer.books);
  const dispatch = useDispatch();
  console.log(books);
  const handelDeleteBook = (id) => {
    console.log(id);
    dispatch(deleteBook(id));
  };
  return (
    <div>
      <h1>Books View</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => {
            const { id, title, author } = book;
            return (
              <tr key={id}>
                <td>{title}</td>
                <td>{author}</td>
                <td>
                  <Link to={`/edit-book/${id}`} state={{ id, title, author }}>
                    Edit
                  </Link>
                  <button onClick={() => handelDeleteBook(id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default BooksView;
