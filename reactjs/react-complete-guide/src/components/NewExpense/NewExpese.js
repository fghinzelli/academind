import React, { useState } from "react";
import "./NewExpense.css";

import ExpenseForm from "./ExpenseForm";



const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const saveExpenseData = (expenseData) => {
    let newExpense =  {
      ...expenseData,
      id: Math.random().toString()
    }
    props.onAddExpense(newExpense)
  }

  const showFormHandler = () => {
    setShowForm(!showForm)
  }

  let form = <button onClick={showFormHandler}>Add note</button>

  if (showForm) {
    form = <ExpenseForm onCancel={showFormHandler} onSaveExpenseData={saveExpenseData} />
  }

  return (
    <div className="new-expense">
      { form }
    </div>
  );
};

export default NewExpense;
