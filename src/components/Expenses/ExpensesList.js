import React from "react"

import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList=(props)=>{
    if(props.items.length === 0){
        return <h2 className='expenses-list__fallback'>Found no expenses.</h2>
    }

    return(
     <ul className="expenses-list">
        {props.items.map((expense) => (
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
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))
      }
    </ul>
    )
}

export default ExpensesList;