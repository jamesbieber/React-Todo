import React from 'react';
import "./components/TodoComponents/Todo.css";
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: 
      [
        {
          task: 'Organize Garage',
          id: Date.now(),
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: Date.now(),
          completed: true
        }
      ],

      todo: ''
    };
  }

    inputChangeHandler = event => {
      this.setState({ [event.target.name]: event.target.value});
    }

    formAddTask = event => {
      event.preventDefault();
      let newTask = {
          task: this.state.todo,
          id: Date.now(),
          completed: false
      };
      this.setState(prevState => {
        return {
          todos: [...prevState.todos, newTask],
          todo: ''
        };
      });
    }

    formItemComplete = (event, index) => {
      console.log("Hello");
      this.setState({
        todos: this.state.todos.map(todo => {
          if(this.todo.index === index) {
            completed: !todo.completed
            return todo;
          }
        })
      })
    }

    formRemoveItems = event => {
      event.preventDefault();
      this.setState({
        todos: this.state.todos.filter(todo => todo.completed === false)
      })
    }

  

  render() {
    return (
      <div>
        <TodoList 
        formItemComplete={this.formItemComplete} 
        todos={this.state.todos} 
        />

        <TodoForm 
        value={this.state.todo} 
        inputChangeHandler={this.inputChangeHandler} 
        formAddTask={this.formAddTask}
        formRemoveItems={this.formRemoveItems}
        />

      </div>
    );
  }
}

export default App;
