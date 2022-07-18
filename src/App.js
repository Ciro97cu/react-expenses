import React, { useState } from "react"; // <-- importo React
import Expenses from './components/Expenses/Expenses'; // <-- importo il componente ExpensesComponent
import NewExpense from './components/NewExpense/NewExpense'; // <-- importo il componente NewExpense

const DEFAULT_EXPENSES = [ // <-- array di spese
  {
    id: 'e1',
    title: 'Carta Igienica',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e2',
    title: 'TV nuova',
    amount: 799.49,
    date: new Date(2021, 2, 12)
  },
  {
    id: 'e3',
    title: 'Assicurazione Auto',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'Scrivania nuova (In Legno)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {

  const [expenses, setExpenses] = useState(DEFAULT_EXPENSES)

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
