import React, { useContext } from "react";
import Transaction from "./Transaction";
import { ContextApi } from "../context/contextApi";

const Transactions = () => {
  const { transactions } = useContext(ContextApi);
  console.log(transactions);
  return (
    <div>
      <h2>Transactions</h2>
      <ul className="transactions">
        {transactions.map((transaction) => (
          <Transaction transaction={transaction} key={transaction.id} />
        ))}
      </ul>
    </div>
  );
};

export default Transactions;
