import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate"; // <-- importo il componente ExpenseDate
import Card from "../UI/Card"; // <-- importo il componente Card
import "./ExpenseItem.css"; // <-- importo il CSS

const ExpenseItem = (props) => {

    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={props.date} />
                <div className="expense-item__description">
                    <h2>{props.title}</h2>
                    <div className="expense-item__price">€{props.amount}</div>
                </div>
            </Card>
        </li>
    )
}

export default ExpenseItem