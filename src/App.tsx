import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './home-page/HomePage';
import LoginForm from './login-form/LoginForm';
import BookList from './login-form/Book';
import LoansList from './login-form/Loan';

const bookData = [
  { id: 1, title: 'Ab', author: '1234' },
  { id: 2, title: 'ABcd', author: '4321' },
  { id: 3, title: 'ABCD', author: '5678' },
];

const loansData = [
  {
    id: 1,
    author: 'A1',
    borrower: 'Bor1',
    borrowDate: '2024-05-01',
    returnDate: '2024-05-05',
  },
  {
    id: 2,
    author: 'B1',
    borrower: 'Bor2',
    borrowDate: '2024-05-05',
    returnDate: '2024-05-15',
  },
  {
    id: 3,
    author: 'C1',
    borrower: 'Bor3',
    borrowDate: '2024-05-10',
    returnDate: '2024-05-20',
  },
];

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/home" element={<HomePage />}>
        <Route path="1" element={<BookList books={bookData} />} />
        <Route path="2" element={<LoansList loans={loansData} />} />
      </Route>
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
  );
}

export default App;
