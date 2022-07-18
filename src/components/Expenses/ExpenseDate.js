import React from "react"; // <-- importo React
import "./ExpenseDate.css"; // <-- importo il CSS

const ExpenseDate = (props) => {

    const month = props.date.toLocaleString("it-IT", { month: "long" });
    const year = props.date.getFullYear();
    const day = props.date.toLocaleString("it-IT", { day: "2-digit" });

    return (
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
            <div className="expense-date__day">{day}</div>
        </div>
    )
}

export default ExpenseDate;