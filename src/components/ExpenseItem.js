import React, { useState } from 'react'
import Card from './Card'
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'

export default function ExpenseItem(props) {

    const [title, setTitle] = useState(props.expenseTitle)
    const changeTitleHandler = () => {
        setTitle("Title Updated")
    }
    //we can also pass normal props in card components 
    //all the custom and built in html tags wrapped by Card is passes as props.children 
    return (
        <li>
            <Card className='expense-item'>
                <div>
                    <ExpenseDate expenseDate={props.expenseDate} />
                </div>
                <div className='expense-item__description'>
                    {/* <h2>{props.expenseTitle}</h2> */}
                    <h2>{title}</h2>

                    <div className='expense-item__price'>{props.expenseAmount}</div>
                    <button onClick={changeTitleHandler}>change title</button>
                </div>
            </Card>
        </li>
    )
}
