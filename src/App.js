import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const toDos = 
[
  {
    task: 'Organize Garage',
    id: Date.now(),
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: Date.now(),
    completed: false
  }

];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      task: 'Organize Garage',
      id: Date.now(),
      completed: false
    };
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <TodoList />
      </div>
    );
  }
}

export default App;
