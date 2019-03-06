import React from 'react';

const TodoForm = (props) => (
	<form onSubmit={props.formAddTask}>
		<input 
		type="text" 
		name="todo"
		value={props.value}
		onChange={props.inputChangeHandler}
		placeholder="New Task"
		/>
		<button type="submit">Add Task</button>
		<button onClick={props.formRemoveItems}>Clear Completed</button>
	</form>

);

export default TodoForm;