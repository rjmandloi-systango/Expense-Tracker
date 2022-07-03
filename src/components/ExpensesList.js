import React from 'react'
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css'
export default function ExpensesList(props) {
    // let expenseContent = <p style={{ color: 'white', fontSize: '20px' }}>No Data Found</p>;
    if (props.items.length === 0) {
     return <h2 className="expense-list_fallback">No Data Found</h2>
    }

    return (
        <ul className="expenses-list">
          {  props.items.map((expense) => (
            <ExpenseItem
                key={expense.id}
                expenseDate={expense.date}
                expenseTitle={expense.title}
                expenseAmount={expense.amount}
            />
        ))}
        </ul>
    )
}

