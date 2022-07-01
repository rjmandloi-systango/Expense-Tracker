import React, { useState } from 'react'
import './ExpenseForm.css'
export default function ExpenseForm() {
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('00')
    const [enteredDate, setEnteredDate] = useState('2022-01-01')

    const titleChangeHandler = (event) => {
        // the below approach is not good here we are also depends on the previous state therefore we use another approach instead of this 
        setUserInput({
            ...userInput,
            enteredTitle: event.target.val
        })

        //this apporach is mostly used when our current state is also depends on the previous state 
        //    setUserInput((prevState)=>{
        //     return {
        //         ...prevState,
        //         enteredTitle:event.target.value
        //     }
        //    })

    }
    const amountChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            enteredAmount: event.target.val
        })
    }
    const dateChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            enteredDate: event.target.val
        })
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
            date: enteredDate
        }

    }
    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min='0.01' step="0.01" onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min='2022-01-01' max='2023-01-01' onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}
