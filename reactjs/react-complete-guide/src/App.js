
import React, { useState } from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpese";

const INITIAL_ITEMS = [
  { title: "Market", amount: 500, date: new Date(2020, 5, 1) },
  { title: "Fuel", amount: 100, date: new Date(2021, 7, 2) },
  { title: "Energy", amount: 200, date: new Date(2022, 8, 3) },
];

const App = () => {
  
  const [ items, setItems ] = useState(INITIAL_ITEMS);

  const addExpenseHandler = (newExpense) => {
    setItems(prevItems => {
      return [newExpense, ...prevItems];
    })
  }


  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={items} s/>
    </>
  );
};

export default App;
