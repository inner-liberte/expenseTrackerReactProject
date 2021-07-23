import Expenses from './components/Expenses/Expenses';
import React, {useState} from 'react';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {id:'e1', title: "transportation", amount:23, date: new Date()},
    {id:'e2', title: "coffee", amount:24, date: new Date()},
    {id:'e3', title: "food", amount:25, date: new Date()},
    {id:'e4', title: "beverage", amount:26, date: new Date()}

]

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  


  const addExpenseHandler = expense => {
    setExpenses(prevExpenses=>{
      return [expense, ...expenses];
    });
    
  };


  return (
    <div>
    <NewExpense onAddExpense={addExpenseHandler} />
    
    <Expenses items={expenses}></Expenses>
    
    
    </div>
  );
}

export default App;
