import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setSelectedYear(selectedYear);
  };

  const filteredItems = props.items.filter((item) => {
    return item.date.getFullYear().toString() === selectedYear;
  });

  let listItems = <p>No items found.</p>

  if (filteredItems.length > 0) {
      listItems = filteredItems.map(item => <ExpenseItem
          key={item.title}
          title={item.title}
          amount={item.amount}
          date={item.date} />
      )
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={selectedYear}
        onFilterChange={filterChangeHandler}
      />
      { listItems }
    </Card>
  );
};

export default Expenses;
