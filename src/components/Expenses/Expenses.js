import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {
          props.items.map((expense)=>(
            <ExpenseItem
            /*
            react doesnt know how to differentiate between list elements .
            so becuase of this whenever a new data in added t renders all the previous data also
            which is bad for performanance and can also create some potential bugs 
            like lossing the prev states of statefull componenets.
            */
            /* 
            so to tackle with this we use KEY props which we can use in any components 
            also the key props should always get a unique id which is possible in almost in every case
            */
            key = {expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            />
          ))
        }
      </Card>
    </div>
  );
};

export default Expenses;
