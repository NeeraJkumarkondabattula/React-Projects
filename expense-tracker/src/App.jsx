import { useState } from "react";
import "./App.css";
import Header from "./component/header";
import Balance from "./component/Balance";
import IncomeExpense from "./component/IncomeExpense";
import Transactions from "./component/Transactions";
import TransactionForm from "./component/TransactionForm";
import { ContextProvider } from "./context/contextApi";

function App() {
  return (
    <ContextProvider>
      <Header />
      <div className="container">
        <Balance />
        <hr />
        <IncomeExpense />
        <hr />
        <Transactions />
        <hr />
        <TransactionForm />
      </div>
    </ContextProvider>
  );
}

export default App;
