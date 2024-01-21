import React, { useContext } from "react";
import { ContextApi } from "../context/contextApi";

const Balance = () => {
  const { transactions } = useContext(ContextApi);
  const amount = transactions.map((transaction) => +transaction.amount);
  const balance = amount.reduce((pre, cur) => pre + cur);
  return <h1>₹ {balance}</h1>;
};

export default Balance;
