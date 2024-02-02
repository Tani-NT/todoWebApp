import { useState } from "react";

function AddTodo({addTodo}){

    const [inputText, setInputText] = useState('');

    return(
        <div>
            <input
                placeholder="Add your next task.."
                type="text"
                value={inputText}
                onChange={e => setInputText(e.target.value)}
            />
            <button onClick={() =>{
                addTodo(inputText);
                setInputText('');
            }}> Add </button>
        </div>
    )
}
export default AddTodo;