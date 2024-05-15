import React from 'react';
import './Loan.css';

interface LoanProps {
  id: number;
  author: string;
  borrower: string;
  borrowDate: string;
  returnDate: string;
}

interface LoansListProps {
  loans: LoanProps[];
}

const Loan: React.FC<LoanProps> = ({
  author,
  borrower,
  borrowDate,
  returnDate,
}) => {
  return (
    <div className="Loan">
      <div>Author: {author}</div>
      <div>Borrower: {borrower}</div>
      <div>Borrow date: {borrowDate}</div>
      <div>Return date: {returnDate}</div>
    </div>
  );
};

const LoansList: React.FC<LoansListProps> = ({ loans }) => {
  return (
    <div className="Loan-list">
      {loans.map((loan) => (
        <Loan key={loan.id} {...loan} />
      ))}
    </div>
  );
};

export default LoansList;
