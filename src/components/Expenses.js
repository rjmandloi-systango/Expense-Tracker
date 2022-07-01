import React from 'react'
import Card from './Card'
import ExpenseItem from './ExpenseItem'
import './Expenses.css'
export default function Expenses(props) {
    return (
        <Card className='expenses'>
            {props.expenses.map(expense =>
                <ExpenseItem key={expense.id} expenseDate={expense.date} expenseTitle={expense.title} expenseAmount={expense.amount} />
            )}
        </Card>
    )
}
