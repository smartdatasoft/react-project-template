import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateBook } from './BookSlice';
import { useNavigate } from 'react-router-dom';

const EditBook = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [id, setId] = useState(location.state.id);
  const [title, setTitle] = useState(location.state.title);
  const [author, setAuthor] = useState(location.state.author);

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const book = { id: id, title: title, author: author };
    dispatch(updateBook(book));
    navigate('/show-books', { replace: true });

    // console.log(id, title, author);
  };
  return (
    <div>
      <h1>Edit Book</h1>
      <form className="form-field" onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="author">Author</label>
        <input
          type="text"
          name="author"
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button type="submit">Update Book</button>
      </form>
    </div>
  );
};

export default EditBook;
