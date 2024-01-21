import React, { useContext } from "react";
import { ContextApi } from "../context/contextApi";

const IncomeExpense = () => {
  const { transactions } = useContext(ContextApi);
  const positiveTransaction = transactions.filter(
    (amount) => amount.amount > 0
  );
  const negiticeTransaction = transactions.filter(
    (amount) => amount.amount < 0
  );
  const pAmount = positiveTransaction.map((transaction) => +transaction.amount);
  const nAmount = negiticeTransaction.map((transaction) => +transaction.amount);
  const income = pAmount.reduce((pre, cur) => pre + cur);
  const expense = nAmount.reduce((pre, cur) => pre + cur);
  return (
    <div className="incomeExpense">
      <div className="income">
        <label htmlFor="#income">Income</label>
        <h2 id="income">₹ {Math.abs(income)}</h2>
      </div>
      <div className="expense">
        <label htmlFor="#expense">Expense</label>
        <h2 id="expense">₹ {Math.abs(expense)}</h2>
      </div>
    </div>
  );
};

export default IncomeExpense;
