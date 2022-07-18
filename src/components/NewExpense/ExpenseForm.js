import React, { useState } from "react"; // <-- importo React
import "./ExpenseForm.css"; // <-- importo il CSS

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: "",
    //     enteredAmount: "",
    //     enteredDate: "",
    // });

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);

        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // });

        // setUserInput((prevState) => {
        //     return { ...prevState, enteredTitle: event.target.value };
        // });
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        if (enteredTitle.trim().length === 0 || enteredAmount.trim().length === 0 || enteredDate.trim().length === 0) {
            alert("Compila i campi")
        } else if (isNaN(enteredAmount)) {
            alert("Inserisci un numero")
        } else if (enteredAmount < 0) {
            alert("Inserisci un importo positivo")
        } else {
            const expenseData = {
                title: enteredTitle,
                amount: +enteredAmount,
                date: new Date(enteredDate)
            }
            props.onSaveExpenseData(expenseData);
            setEnteredTitle("");
            setEnteredAmount("");
            setEnteredDate("");
            props.onDisplayForm()
        }
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="title">Titolo</label>
                    <input type="text" name="title" placeholder="Inserisci il titolo" value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="amount">Importo</label>
                    <input type="number" min="0.01" step="0.01" name="amount" value={enteredAmount} placeholder="Inserisci l'importo" onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="date">Data</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" name="date" value={enteredDate} onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onDisplayForm}>Annulla</button>
                <button type="submit">Aggiungi spesa</button>
            </div>
        </form>
    )
}

export default ExpenseForm;