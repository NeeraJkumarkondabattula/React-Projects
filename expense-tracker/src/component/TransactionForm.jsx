import React, { useContext, useState } from "react";
import { ContextApi } from "../context/contextApi";

const TransactionForm = () => {
  const [purpose, setPurpose] = useState("");
  const [amount, setAmount] = useState(0);
  const { addTransaction } = useContext(ContextApi);
  const { transactions } = useContext(ContextApi);

  const last = transactions.map((res) => res.id);

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = last.pop();
    const transaction = {
      id: id + 1,
      purpose,
      amount: amount,
    };
    addTransaction(transaction);
    console.log(transaction);
    setAmount(0);
    setPurpose("");
  };
  return (
    <>
      <h2>Add Transaction</h2>
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="text">Purpose</label>
        <input
          type="text"
          placeholder="Enter spend purpose.."
          value={purpose}
          onChange={(e) => setPurpose(e.target.value)}
        />
        <label htmlFor="text">Amount</label>
        <input
          type="text"
          placeholder="Enter spend purpose.."
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button>Add Transaction</button>
      </form>
    </>
  );
};

export default TransactionForm;
