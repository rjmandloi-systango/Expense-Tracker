import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'
export default function NewExpense(props) {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.floor((Math.random() * 1000).toString())
    }
    // console.log(expenseData);
    props.onAddExpense(expenseData)
  }
  // const [showAddButton , setShowAddButton]=useState(true)
  const [formStatus, setFormStatus] = useState(false)
  const onClickHandlerOnAdd = () => {
    setFormStatus(true)
  }
  const cancelAddDataHandler = () => {
    setFormStatus(false)
  }

  return (
    <div className='new-expense'>
      {formStatus ? <ExpenseForm onCancel={cancelAddDataHandler} onSaveExpenseData={saveExpenseDataHandler} /> : <button onClick={onClickHandlerOnAdd}>Add New Expense</button>}
    </div>
  )
}
