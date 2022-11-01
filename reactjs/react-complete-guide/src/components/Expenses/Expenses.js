import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

const Expenses = (props) => {
    const [selectedYear, setSelectedYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        setSelectedYear(selectedYear);
    }

    const filteredItems = props.items.filter(item => {
        return item.date.getFullYear().toString() === selectedYear
    })

    return (
            <Card className="expenses">
                <ExpensesFilter selected={selectedYear} onFilterChange={filterChangeHandler} />
                {filteredItems.map(item => <ExpenseItem
                    key={item.title}
                    title={item.title}
                    amount={item.amount}
                    date={item.date} />
                )}
            </Card>
    );
}

export default Expenses;