import ExpenseItem from './ExpenseItem';
import './Expenses.css';

function Expenses(props) {
    return (
        <>
            {props.items.map(item => <ExpenseItem 
                key={item.title} 
                title={item.title} 
                amount={item.amount} 
                date={item.date}/>
            )}
        </>
    );
}

export default Expenses;