import React,{useState} from "react";

import ExpenseDate from "./ExpenseDate";
import Card from '../UI/Card';
import "./ExpenseItem.css";

const ExpenseItem=(props)=> {
  //Destructuring of the array
  const [title,setTitle] = useState(props.title)

  const clickHandler = () => {
    setTitle('Updated!')
    console.log(title)
  };

  return (
    <Card className='expense-item'>
      {/* or you can also write like <ExpenseDate /> since there are no content
      between the opening and closing tag */}
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
