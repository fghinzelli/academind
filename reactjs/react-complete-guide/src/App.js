import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpese";

const App = () => {
  const items = [
    { title: "Market", amount: 500, date: new Date(2022, 5, 1) },
    { title: "Fuel", amount: 100, date: new Date(2022, 7, 2) },
    { title: "Energy", amount: 200, date: new Date(2022, 8, 3) },
  ];

  return (
    <>
      <NewExpense />
      <Expenses items={items} />
    </>
  );
};

export default App;
