import ExpensesChart from "./ExpensesChart";
import ExpenseList from "../NewExpense/ExpenseList";
import Card from "../UI/Card";
import ExpenseFilter from "../NewExpense/ExpenseFilter";
import React, { useState } from "react";
import "./Expenses.css";
function Expenses(props) {
  const [addYear, setAddYear] = useState("2020");
  const addChangeYearHandler = (year) => {
    setAddYear(year);
  };
  const filteredItems = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === addYear;
    {
      /* Returns true or false based on the condition and keeps the things which are true */
    }
  });
  console.log(filteredItems);
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={addYear}
          onChangeYear={addChangeYearHandler}
        ></ExpenseFilter>
        <ExpensesChart expense={filteredItems}></ExpensesChart>
      <ExpenseList items={filteredItems}></ExpenseList>
      </Card>
    </div>
  );
}
export default Expenses;
