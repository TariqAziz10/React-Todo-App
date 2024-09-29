import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react'
import './TodoList.css'
export default function TodoList () {

    let [todos, setTodos] = useState([{task: "sample task", id: uuidv4(), isDone: false}]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        setTodos((prevtodos) => {
            return [...prevtodos, {task: newTodo, id: uuidv4(), isDone: false}];
        });
        setNewTodo("");
    };

    
    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    };

    let deleteTodo = (id) => {
        setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
    }

    let markAllAsDone = () => {
        setTodos((prevtodos) => 
            prevtodos.map((todo) => {
                return {
                    ...todo,
                    isDone: true,
                };
            })
        );
    };

    let markAsDone = (id) => {
        setTodos((prevtodos) => 
            prevtodos.map((todo) => {
                if(todo.id == id){
                    return {
                        ...todo,
                        isDone: true,
                    };
                }else{
                    return todo;
                }
                
            })
        );
    };

    

    return (
        <div className="box">
            <input placeholder="Add a tasks" value={newTodo} onChange={updateTodoValue} className="searchE" id="todo-input"></input>
            <br></br>
            <br></br>
            <button onClick={addNewTask} className="buttonAll1">Add Task</button>
            <br></br>
            <br></br>
            <br></br>

            <hr></hr>
            <h2>Task-Todo</h2>
            <ul id="ulist">{todos.map((todo) => (
                <li key={todo.id} id="list">
                    <span style={todo.isDone ? {textDecorationLine: "line-through"} : {}}>{todo.task}</span>
                    &nbsp;&nbsp;&nbsp;
                    <button onClick={() => deleteTodo(todo.id)} className="buttonAll">Delete</button>
                    &nbsp;&nbsp;
                    <button onClick={() => markAsDone(todo.id)} className="buttonAll">Mark As Done</button>
                </li>
            ))}
            <br></br>
            <button onClick={markAllAsDone} className="buttonAll">Mark All As Done</button>
            </ul>
        </div>
    );
}