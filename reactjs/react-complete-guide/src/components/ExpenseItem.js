import './ExpenseItem.css';

export default function ExpenseItem() {
  const expenseDate = new Date(2022, 9, 22);
  const expenseTitle = "Mercado";
  const expenseAmount = 20.0;

  return (
    <div className="expense-item">
        <div>{ expenseDate.toISOString('pt-BR') }</div>
        <div className="expense-item__description">
            <h2>{ expenseTitle }</h2>
            <div className="expense-item__price">{ expenseAmount }</div>
        </div>
    </div>
    )
}
