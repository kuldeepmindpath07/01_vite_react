import { ExpenseTracker } from "./ExpenseTracker"

export const StartExpenseTracker=()=>{
    function checkBalance(income:number,expense:number):number{
        return income-expense;
    }
    return(
        <ExpenseTracker/>
    )
}