import React from "react";

const Transaction = ({ transaction }) => {
  return (
    <>
      <li
        className={
          transaction.amount < 0 ? "transaction ex " : "transaction in"
        }>
        <p>{transaction.purpose}</p>
        <p className={transaction.amount > 0 ? "income" : "expense"}>
          {transaction.amount < 0
            ? `- ₹ ${Math.abs(transaction.amount)}`
            : `+ ₹ ${Math.abs(transaction.amount)}`}
        </p>
      </li>
    </>
  );
};

export default Transaction;
