import React, { useState } from "react"; // <-- importo React
import Card from "../UI/Card"; // <-- importo il componente Card
import ExpensesFilter from "./ExpensesFilter"; // <-- importo il componente ExpensesFilter
import ExpensesList from "./ExpensesList"; // <-- importo il componente ExpensesList
import ExpensesChart from "./ExpensesChart"; // <-- importo il componente ExpensesChart
import "./Expenses.css"; // <-- importo il CSS

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState("2020");

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter((expense) => expense.date.getFullYear().toString() === filteredYear);

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList items={filteredExpenses} />
        </Card>
    )
}

export default Expenses;