import React, { useState } from "react";
import Card from "./Card";
// import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
export default function Expenses(props) {

  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    // console.log(selectedYear);
    setFilteredYear(selectedYear);
  };

  const filteredExpenes = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear
  })
  
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />

      {/* {filteredExpenes.length > 0 ? filteredExpenes.map((expense) => (
        <ExpenseItem
          key={expense.id}
          expenseDate={expense.date}
          expenseTitle={expense.title}
          expenseAmount={expense.amount}
        />
      )) : <p style={{ color: 'white', fontSize: '20px' }}>No Data Found</p>
      } */}
      {<ExpensesList items={filteredExpenes} /> }
    </Card>
  );
}
