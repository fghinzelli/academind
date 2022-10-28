import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

const Expenses = (props) => {
    const [selectedYear, setSelectedYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        console.log('selectedYear', selectedYear)
        setSelectedYear(selectedYear)
    }

    return (
            <Card className="expenses">
                <ExpensesFilter selected={selectedYear} onFilterChange={filterChangeHandler} />
                {props.items.map(item => <ExpenseItem
                    key={item.title}
                    title={item.title}
                    amount={item.amount}
                    date={item.date} />
                )}
            </Card>
    );
}

export default Expenses;