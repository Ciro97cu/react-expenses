import React, { useState } from "react"; // <-- importo React
import "./NewExpense.css"; // <-- importo il CSS
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

    const [visibilityForm, setVisibilityForm] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.floor(Math.random() * 1000).toString()
        }
        props.onAddExpense(expenseData);
    }

    const visibilityFormHandler = () => setVisibilityForm((prevState) => !prevState);

    return (
        <div className="new-expense">
            {visibilityForm ? (
                <ExpenseForm
                    visibility={visibilityForm}
                    onSaveExpenseData={saveExpenseDataHandler}
                    onDisplayForm={visibilityFormHandler} />
            ) : (
                <button type="button" onClick={visibilityFormHandler}>Aggiungi Nuova Spesa</button>
            )}

        </div>
    )
};

export default NewExpense;