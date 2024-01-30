import './App.css'
import { useReducer, useState } from 'react';
import AddTodo from './components/AddTodo/AddTodo.jsx';
import TodoList from './components/TodoList/TodoList.jsx';
import TodoContext from './context/TodoContext.js';
import todoReducers from './reducers/todoReducers.js';
import TodoDispatchContext from './context/TodoDispatchContext.js';

function App() {

//   const [list,setList] = useState([
//     {id: 1, todoData : 'todo 1',finished: false},
//     {id: 2, todoData : 'todo 2',finished: true},
// ])

    const [list,dispatch] = useReducer(todoReducers, []);

  return (
    <TodoContext.Provider value={{list}}>
      <TodoDispatchContext.Provider value={{dispatch}}>
        <AddTodo/>
        <TodoList/>
      </TodoDispatchContext.Provider>
    </TodoContext.Provider>
  )
}

export default App;
