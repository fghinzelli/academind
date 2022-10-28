import React from "react";
import "./NewExpense.css";

import ExpenseForm from "./ExpenseForm";



const NewExpense = (props) => {
  const saveExpenseData = (expenseData) => {
    let newExpense =  {
      ...expenseData,
      id: Math.random().toString()
    }
    props.onAddExpense(newExpense)
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseData} />
    </div>
  );
};

export default NewExpense;
