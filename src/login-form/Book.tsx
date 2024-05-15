import React from 'react';
import './Book.css';

interface BookProps {
  id: number;
  title: string;
  author: string;
}

interface BookListProps {
  books: BookProps[];
}

const Book: React.FC<BookProps> = ({ title, author }) => {
  return (
    <div className="Book">
      <div>Title: {title}</div>
      <div>Author: {author}</div>
    </div>
  );
};

const BookList: React.FC<BookListProps> = ({ books }) => {
  return (
    <div className="Book-list">
      {books.map((book) => (
        <Book key={book.id} {...book} />
      ))}
    </div>
  );
};

export default BookList;
