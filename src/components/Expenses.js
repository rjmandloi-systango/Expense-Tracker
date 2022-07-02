import React, { useState } from "react";
import Card from "./Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
export default function Expenses(props) {

  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    console.log(selectedYear);
    setFilteredYear(selectedYear);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />

       {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          expenseDate={expense.date}
          expenseTitle={expense.title}
          expenseAmount={expense.amount}
        />
      ))} 


    </Card>
  );
}
