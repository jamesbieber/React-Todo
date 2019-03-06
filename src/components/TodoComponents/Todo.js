import React from 'react'
import './Todo.css'

const Todo = (props) => (
	<p className={props.todo.completed ? "completed" : "not-completed"} onClick={props.formItemComplete}>{props.todo.task}</p>
)

export default Todo;	