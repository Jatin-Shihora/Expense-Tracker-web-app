import React, {useState} from "react";

import "./ExpenseForm.css";

const ExpenseForm = () => {
    const [enteredTitle , setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('');

    //we can also implement it by using only one state by below method i.e making a object of the whole
    //For Alternative 1 and Alternative 2
    // const [userInput, setUserInput] = useState({
    //     enteredTitle:'',
    //     enteredAmount:'',
    //     enteredDate:''
    // })

    const titleChangeHandler =(event)=>{
        setEnteredTitle(event.target.value);

        //Alternative 1 = This is not a good idea since in this alternative we depend on.. 
        //..a prev state so alter2 and default is a much better option
        // setUserInput({
        //     ...userInput,
        //     enteredTitle:event.target.value,
        // })
        //Alternative 2
        // setUserInput((prevState)=>{
        //     return {...prevState,enteredTitle:event.target.value}
        // })
     };

     const amountChangedHandler =(event)=>{
        setEnteredAmount(event.target.value);

        //Alternative 1
        // setUserInput({
        //   ...userInput,
        //   enteredAmount: event.target.value,
        // });
        
     }

     const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        //Alternative 1
        // setUserInput({
        //   ...userInput,
        //   enteredDate: event.target.value,
        // });
     }

     const submitHandler = (event) =>{
       //Evertyime we submit the form the websites sends a request to servers and gets reloaded
       //... so to prevent it we use this
       event.preventDefault()

       const expenseDate = {
           title:enteredTitle,
           amount:enteredAmount,
           date:new Date(enteredDate)
       }
        console.log(expenseDate)
     }

  return (
    <form onSubmit = {submitHandler} >
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} ></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" onChange={amountChangedHandler}></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2021-01-31" max="2022-12-31" onChange={dateChangeHandler}></input>
        </div>
      </div>
      <div className="new_expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;