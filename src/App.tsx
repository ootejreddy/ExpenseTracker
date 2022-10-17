import React from "react";
import logo from "./logo.svg";
// import "./App.css";
// import { ExpenseItem } from "./components/ExpenseItem";
import { Expenses } from "./components/Expenses";
import { NewExpense } from "./components/NewExpense/NewExpense";
interface Expenses {
  id: string;
  title: string;
  amount: number;
  date: Date;
}
const App: React.FC = () => {
  const expenses: Expenses[] = [
    {
      id: "e5",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e5",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e5",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
  ];
  return (
    <div>
      <NewExpense></NewExpense>
      <Expenses items={expenses}></Expenses>
    </div>
  );
};

export default App;
