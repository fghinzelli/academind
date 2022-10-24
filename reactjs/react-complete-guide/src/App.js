
import Expenses from './components/Expenses';

function App() {

  const items = [
    { title: "Mercado", amount: 500, date: new Date(2022, 5, 1)},
    { title: "Combustível", amount: 100, date: new Date(2022, 7, 2)},
    { title: "Energia Elétrica", amount: 200, date: new Date(2022, 8, 3)},
  ];

  return (<Expenses items={items} />)
}

export default App;
