import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import { useState } from "react";

const Expenses = (props) => {
  const [changedYear, setChangedYear] = useState("2020");

  const yearSelectHandler = (selectedYear) => {
    setChangedYear(selectedYear);
    console.log(changedYear);
  };

  console.log("final in expenses list");
  console.log(props.items);

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onYearSelect={yearSelectHandler}></ExpensesFilter>
        {props.items.map((item) => (
          <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
