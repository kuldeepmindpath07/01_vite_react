import { AddRedo } from "./components/addName.tsx"
import { AddTodo } from "./components/AddTodo.tsx"
import { Todos } from "./components/todos.tsx"
import { UseReducerHook } from "./reducers/useReducerHook.tsx"
import {MUIDemo} from "./components/muiDemo.tsx"
import {GetData} from './fetching-data/getData.tsx'
import { MemoExpensiveComponent } from "./useMemoExample/expensiveComponent.tsx"
import { CustomHook } from "./customHookExample/CustomHook.tsx"
import { StartExpenseTracker } from "./expenseTracker/start.tsx"
import { ReactForm } from "./form/ReactForm.tsx"

function App(){
  return(
    <>
      <UseReducerHook/>
      <AddTodo/>
      <Todos/>
      <AddRedo/>
      <MUIDemo/>
      <GetData/>
      <MemoExpensiveComponent/>
      <CustomHook/>
      <StartExpenseTracker/>
      <ReactForm/>
    </>
  )
}

export default App
