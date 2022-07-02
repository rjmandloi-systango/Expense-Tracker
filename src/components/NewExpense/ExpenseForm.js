import React, { useState } from 'react'
import './ExpenseForm.css'
export default function ExpenseForm(props) {
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
        // the below approach is not good here we are also depends on the previous state therefore we use another approach instead of this 
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.val
        // })

        //this apporach is mostly used when our current state is also depends on the previous state 
        //    setUserInput((prevState)=>{
        //     return {
        //         ...prevState,
        //         enteredTitle:event.target.value
        //     }
        //    })

    }
    const amountChangeHandler = (event) => {
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.val
        // })
        setEnteredAmount(event.target.value)
    }
    const dateChangeHandler = (event) => {
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.val
        // })
        setEnteredDate(event.target.value)
    }

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // })

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        // console.log(expenseData);
        props.onSaveExpenseData(expenseData);
        setEnteredAmount('')
        setEnteredDate('')
        setEnteredTitle('')
    }
    
    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} required />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={enteredAmount} min='0.01' step="0.01" onChange={amountChangeHandler} required />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min='2022-01-01' value={enteredDate} max='2023-01-01' onChange={dateChangeHandler} required />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type='button' onClick={props.onCancel}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}
 