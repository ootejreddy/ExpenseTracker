import "./ExpenseForm.css";
import { useState } from "react";
export const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const titleChangeHandler = (event: any) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event: any) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event: any) => {
    setEnteredDate(event.target.value);
  };
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control" onChange={amountChangeHandler}>
          <label>Amount</label>
          <input type="number" min="0.1" step="0.01" />
        </div>
        <div className="new-expense__control" onChange={dateChangeHandler}>
          <label>Date</label>
          <input type="Date" min="2019-01-01" max="2024-01-01" />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Submit Form</button>
        </div>
      </div>
    </form>
  );
};
