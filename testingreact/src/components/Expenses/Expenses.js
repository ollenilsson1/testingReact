import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2021');

    function filterChangeHandler(selectedYear) {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })

    /* olika sätt att göra conditional rendering, standard sättet bortkommenterat */
    let expensesContent = <p>No expenses found.</p>;

    if (filteredExpenses.length > 0){
        expensesContent = filteredExpenses.map((expense => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />))} 
    

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                {expensesContent}
                {/* {filteredExpenses.length === 0 && <p>No expenses found.</p>}
                {filteredExpenses.length > 0 && filteredExpenses.map((expense => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />))} */}
            </Card>
        </div>

    );

}

export default Expenses;