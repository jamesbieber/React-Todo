import React from 'react';

const TodoForm = () => (
	<div className="todo-form">
		<form onSubmit={this.formSubmitHandler}>
			<input
				name="task"
				value={this.state.task}
				onChange={this.inputChangeHandler}
				placeholder="Add Task"
			/>
			<button type="submit">Create New Task</button>
			<button type="submit">Completed</button>
		</form>
	</div>
)

export default TodoForm;