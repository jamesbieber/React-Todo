import React from 'react'
import './Todo.css'

const Todo = (props) => {

	console.log(props.todo);
	return (
		<p 
		className={props.todo.completed ? "completed" : "not-completed"} 
		onClick={ () => props.formItemComplete(props.todo.id)}
		>
		{props.todo.task}</p>
	)
}

export default Todo;	