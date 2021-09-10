import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import React, { useState } from "react";
function ExpenseItem(props) {
  // //useState()This should be called only inside the function not a nested function
  // const [title,setTitle]=useState(props.title);  
  // const ClickHandler = () => {
  //   setTitle('Updated!!!')
  //   // console.log(title);
  // };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price"> &#8377; {props.amount}</div>
      </div>
      {/* we dont use ClickHandler() because it would then get automatically executed with the block of code written under return */}
    </Card>
  );
}
export default ExpenseItem;
