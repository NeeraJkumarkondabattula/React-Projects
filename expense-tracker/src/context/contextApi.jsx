import React, { createContext, useReducer } from "react";
import { AppReducer } from "./AppReducer";

const initialState = {
  transactions: [
    {
      id: 1,
      purpose: "book",
      amount: 26,
    },
    {
      id: 2,
      purpose: "fruits",
      amount: -40,
    },
    {
      id: 3,
      purpose: "juice",
      amount: -25,
    },
    {
      id: 4,
      purpose: "pen",
      amount: 10,
    },
    {
      id: 5,
      purpose: "pizza",
      amount: 120,
    },
    {
      id: 6,
      purpose: "drink",
      amount: 22,
    },
  ],
};

export const ContextApi = createContext(initialState);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const addTransaction = (transaction) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  };
  return (
    <ContextApi.Provider
      value={{ transactions: state.transactions, addTransaction }}>
      {children}
    </ContextApi.Provider>
  );
};
