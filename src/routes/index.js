import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Error from '../pages/Error';
import Navbar from '../layouts/Navbar';
import BooksView from '../features/books/BooksView';
import AddBook from '../features/books/AddBook';
import EditBook from '../features/books/EditBook';

const index = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/show-books" element={<BooksView />} />
          <Route path="/add-book" element={<AddBook />} />
          <Route path="/edit-book/:id" element={<EditBook />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default index;
