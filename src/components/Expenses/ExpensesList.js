import React from "react"; // <-- importo React
import ExpenseItem from "./ExpenseItem"; // <-- importo il componente ExpenseItem
import "./ExpensesList.css"; // <-- importo il CSS

const ExpensesList = (props) => {

    if (props.items.length === 0) { // <-- se ci sono spese mostro le spese filtrate
        return <h2 className="expenses-list__fallback">Non ci sono spese!!</h2>
    }

    return (
        <ul className="expenses-list">
            {props.items.map((expense) => (
                <ExpenseItem
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                    key={expense.id}
                />
            ))}
        </ul>
    )
};

export default ExpensesList;